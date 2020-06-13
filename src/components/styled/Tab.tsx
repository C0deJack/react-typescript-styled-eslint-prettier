import React from 'react'
import styled from "styled-components";

const StyledTab = styled.li`
    list-style: none;
    background-color: #55ff44;
    font-size: 34px;

    text-decoration: none;
    display: flex;
    align-items: flex-start;

    :active {
        background-color: blue;
    }

    a {
        color: pink;
        font-size: 22px;
        background-color: blueviolet;
    }
`;

interface TabProps {
    link: string | undefined;
    linkName: string;
}

export default function Tab(props: TabProps) {
    return (
        <StyledTab>
            <a href={props.link}>{props.linkName}</a>
        </StyledTab>
    )
}
