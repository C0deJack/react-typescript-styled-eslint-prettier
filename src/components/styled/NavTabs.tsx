import React from 'react'
import Tab from '../styled/Tab';
import styled from 'styled-components';

const StyledNavTabs = styled.nav`
    ul {
        display: flex;
    }
`;

export default function NavTabs() {
    return (
        <StyledNavTabs>
            <ul role='navigation'>
                <Tab link={'/'} linkName={'HOME'} />
                <Tab link={'/one'} linkName={'PAGE ONE'} />
                <Tab link={'/two'} linkName={'PAGE TWO'} />
            </ul>
        </StyledNavTabs>
    )
}
