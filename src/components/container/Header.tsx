import React from 'react';
import styled from 'styled-components';

import Logo from '../styled/Logo';
// import ThemeToggle from '../styled/ThemeToggle';
import SearchBar from '../styled/SearchBar';
import { Theme, lightTheme, darkTheme } from '../../styles/theme';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

type HeaderProps = {
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export default function Header(props: HeaderProps) {
	
	// const changeTheme = (e:ChangeEvent<HTMLInputElement>):void => {
	const changeTheme = (e:any):void => {
		if(e.target.checked) {
			props.setTheme(darkTheme);
		} else {
			props.setTheme(lightTheme);
		}
	}

    return (
        <StyledHeader>
            <Logo />
            <div>
                <SearchBar />
                {/* <ThemeToggle /> */}
				<input type="checkbox" value='true' onClick={changeTheme}/>
            </div>
        </StyledHeader>
    );
}
