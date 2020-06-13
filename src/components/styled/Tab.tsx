import React from 'react'
import styled from "styled-components";

const StyledTab = styled.li`
    list-style: none;
    padding: 1rem;

    a {
        text-decoration: none;
        font-size: 22px;
        color: ${({ theme }) => theme.brand_color_magenta};
    }
`;

interface TabProps {
    link: string;
    linkName: string;
}

export default function Tab(props: TabProps) {
    return (
        <StyledTab>
            <a href={props.link}>{props.linkName}</a>
        </StyledTab>
    )
}
