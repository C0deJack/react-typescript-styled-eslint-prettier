import React from 'react';
import styled from 'styled-components';
import Autocomplete from '../styled/Autocomplete';

const StyledSearchBar = styled.div`
    position: relative;
    margin: 0 1rem;
    padding: 5px 10px;
    height: 37px;
    background-color: ${props => props.theme.color.light};
    border-radius: 100px;
    border: ${props => props.theme.color.dark} solid 2px;

    input {
        outline: none;
        border: ${props => props.theme.color.light} solid;
        color: ${props => props.theme.color.dark};
        background-color: ${props => props.theme.color.light};
        font-size: 1.1rem;
    }

    button {
        outline: none;
        border: none;
        background-color: transparent;
        padding: 0;
    }

    button:hover {
        cursor: pointer;
    }

    svg {
        fill: ${props => props.theme.color.dark};
    }
`;

export default function SearchBar() {

    return (
        <StyledSearchBar>
            <Autocomplete
                suggestions={[
                "Alligator",
                "Bask",
                "Crocodilian",
                "Death Roll",
                "Eggs",
                "Jaws",
                "Reptile",
                "Solitary",
                "Tail",
                "Wetlands"
                ]}
            />
            <button type='button'>
                <svg width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>Search</title>
                    <path d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z" />
                </svg>
            </button>
        </StyledSearchBar>
    )
}
