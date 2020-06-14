import React from 'react'
import Tab from '../styled/Tab';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
    ul {
        display: flex;
    }
`;

export default function NavBar() {
    return (
        <StyledNavBar>
            <ul role='navigation'>
                <Tab link={'/'} linkName={'HOME'} />
                <Tab link={'/one'} linkName={'PAGE ONE'} />
                <Tab link={'/two'} linkName={'PAGE TWO'} />
            </ul>
        </StyledNavBar>
    )
}
