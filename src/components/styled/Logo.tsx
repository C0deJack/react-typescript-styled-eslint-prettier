import React from 'react'
import styled from 'styled-components';

const StyledLogo = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.dark};

    h1 {
        margin: 0;
        font-size: 40px;
    }

`;

export default function Logo() {
    return (
        <StyledLogo href='/'>
            <h1>Logo</h1>
        </StyledLogo>
    )
}
