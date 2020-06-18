import React from 'react';
import styled from 'styled-components';

import Logo from '../styled/Logo';
import ThemeToggle from '../styled/ThemeToggle';
import SearchBar from '../styled/SearchBar';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    div {
        display: flex;
    }
`;

export default function Header() {
	
    return (
        <StyledHeader>
            <Logo />
            <div>
                <SearchBar />
                <ThemeToggle />
            </div>
        </StyledHeader>
    );
}
