import React, { useState, useCallback, useMemo } from 'react';
import { ThemeContext } from '../contexts';
import {useFetchJSON} from '../hooks';
const THEME_DATA_URL = 'data/data.json';

export function ThemeProvider({ children }) {
    const initialState = {
        orgName: 'Qatalog',
        theme: null
    };

    const [orgList] = useFetchJSON(THEME_DATA_URL);

    const [state, setState] = useState(initialState);

    const applyTheme = useCallback( (orgName, theme) => {
        setState({orgName, theme});
    }, []);

    const resetTheme = useCallback(() => {
        setState(initialState);
    }, []);
    
    const value = useMemo(() => ({
        ...state,
        applyTheme,
        resetTheme,
        orgList

    }), [state, orgList]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};