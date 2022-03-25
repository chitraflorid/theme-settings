import React, {useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks';

import {FooterLink} from '../../components/core';
import './style.css';

export function Home() {
    const {orgName} = useTheme();
    const navigate = useNavigate();

    const renderSettingsLink = useMemo(() => {
        function handleClick(e) {
            e.preventDefault();
            navigate('/');
        }

        return (
            <FooterLink>
                <a href='#' onClick={handleClick}>
                    Back to Settings
                </a>
            </FooterLink>
        )
    }, []);

    return (
        <>
            <div className='container'>
                <div className='home'>
                    <h1>Welcome to the <br/> {orgName ? orgName : 'Qatalog'} homepage!</h1>
                </div>
            </div>
            {renderSettingsLink}
        </>
    );
}