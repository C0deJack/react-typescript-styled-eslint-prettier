import React from 'react'
import Tab from '../styled/Tab';
import styled from 'styled-components';

const StyledNavTabs = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function NavTabs() {
    return (
        <StyledNavTabs>
            <ul>
                <Tab link={'/'} linkName={'HOME TAB'} />
                <Tab link={'/one'} linkName={'PAGE ONE TAB'} />
            </ul>
        </StyledNavTabs>
    )
}