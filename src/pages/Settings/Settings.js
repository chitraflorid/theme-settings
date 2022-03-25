import React, {useRef, useState, useMemo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTheme } from '../../hooks';
import {Button, FooterLink, Selector} from '../../components/core';
import './style.css';

export function Settings() {
    const navigate = useNavigate();
    const { 
        applyTheme,
        resetTheme,
        orgList,
        theme,
        orgName
    } = useTheme();

     const currTheme = useRef(theme);
     const [currOrgName, setCurrOrgName] = useState(orgName);
     const [filteredOrgList, setCurrentFilteredOrgList]  = useState([]);

    const handleOrgChange = useCallback((org) => {
        setCurrOrgName(org.org_name);
        currTheme.current = org.background_image;

    }, []);

    const handleBtnClick = useCallback((e) => {
        e.preventDefault();
        const type = e.target.type;

        if (!currTheme.current) {
            return false;
        }

        if (type === 'reset') {
            setCurrOrgName('');
            currTheme.current = '';

            resetTheme();
        } else {
            applyTheme(currOrgName, currTheme.current);
        }
    }, [currOrgName]);

    const renderHomeLink = useMemo(() => {
        function handleClick(e) {
            e.preventDefault();
            navigate('/home');
        }

        return (
            <FooterLink>
                <a href='#' onClick={handleClick}>
                    Your Homepage
                </a>
            </FooterLink>
        )
    }, []);

    const renderSelector = useMemo(() => {
        return (
            <Selector
                currValue={currTheme.current}
                placeHolderText={'Choose an organization'}
                className={'dropdown'}
                data={orgList}
                valueField={'background_image'}
                textField={'org_name'}
                idField={'org_name'}
                onChange={handleOrgChange}
            />
        );
    }, [currTheme.current, orgList]);

    function handleInputChange(e) {
        e.stopPropagation();
        const searchTxt = (e.target.value).toLowerCase();

        if (!searchTxt) {
            setCurrentFilteredOrgList([]);
        } else {
            setCurrentFilteredOrgList(orgList.filter(item => item.org_name.toLowerCase().includes(searchTxt)));
        }
    }

    return (
        <>
            <div className='container'>
                <div className='settings'>
                    <input type='text' onChange={handleInputChange} />
                    <ul>
                    {filteredOrgList.map(org => {
                        return (
                            <li key={org.org_name} onClick={() => handleOrgChange(org)} >{org.org_name}</li>
                        )
                    })
                    }
                    </ul>
                    <div className='btn-strip' onClick={handleBtnClick}>
                        <Button
                            type={'reset'}
                            className={'reset-btn'}
                        >
                            Reset
                        </Button>
                        <Button
                            type={'button'}
                            className={'theme-btn'}
                        >
                            Apply Theme
                        </Button>
                    </div>
                </div>
            </div>
            {renderHomeLink}
        </>
    );
}