import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	html,
	body {
		margin: 0;
		padding: 0;
		/* prevent side scroll on IPhones */
		max-width: 100% !important;
		overflow-x: hidden !important;
	}

	body {
		min-width: 315px;
	}

	*, *::after, *::before {
		box-sizing: border-box;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		/* text-rendering: optimizeLegibility; */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		
		background-color: ${props => props.theme.theme_background_color};
    	color: ${props => props.theme.theme_color};
	}
`;
