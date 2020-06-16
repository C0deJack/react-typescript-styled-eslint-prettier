import React from 'react';
import styled from 'styled-components';

import Logo from '../styled/Logo';
import ThemeToggle from '../styled/ThemeToggle';
import SearchBar from '../styled/SearchBar';
import { Theme } from '../../styles/theme';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

type HeaderProps = {
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export default function Header(props: HeaderProps) {
	
    return (
        <StyledHeader>
            <Logo />
            <div>
                <SearchBar />
                <ThemeToggle setTheme={props.setTheme} />
            </div>
        </StyledHeader>
    );
}
