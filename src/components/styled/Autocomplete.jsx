import React, { Component } from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`

	border: 1px solid #999;
	border-top-width: 0;
	list-style: none;
	margin-top: 0;
	max-height: 143px;
	overflow-y: auto;
	padding-left: 0;
	width: calc(300px + 1rem);

	li {
		padding: 0.5rem;
	}

	.suggestion-active,
	li:hover {
		background-color: #008f68;
		color: #fae042;
		cursor: pointer;
		font-weight: 700;
	}

	li:not(:last-of-type) {
		border-bottom: 1px solid #999;
	}

	/* .no-suggestions {
		color: #999;
		padding: 0.5rem;
	} */
`;

// interface AutocompleteProps {
// 	suggestions: Array<string>;
// }

// interface AutocompleteState {
// 	state: {
// 		activeSuggestion: number;
// 		filteredSuggestions: Array<string>;
// 		showSuggestions: boolean;
// 		userInput: string;
// 	};
// }

// class Autocomplete extends Component<AutocompleteProps> {
class Autocomplete extends Component {
	// 	// static propTypes = {
	// 	//   suggestions: PropTypes.instanceOf(Array)
	// 	// };

	static defaultProps = {
		suggestions: [],
	};

	// constructor(props:AutocompleteProps) {
	constructor(props) {
		super(props);

		this.state = {
			// The active selection's index
			activeSuggestion: 0,
			// The suggestions that match the user's input
			filteredSuggestions: [],
			// Whether or not the suggestion list is shown
			showSuggestions: false,
			// What the user has entered
			userInput: '',
		};
	}

	// onChange = (e:React.FormEvent<HTMLInputElement>) => {
	onChange = (e) => {
		const { suggestions } = this.props;
		const userInput = e.currentTarget.value;

		// Filter our suggestions that don't contain the user's input
		const filteredSuggestions = suggestions.filter(
			(suggestion) =>
				suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
		);

		this.setState({
			activeSuggestion: 0,
			filteredSuggestions,
			showSuggestions: true,
			userInput: e.currentTarget.value,
		});
	};

	onClick = (e) => {
		this.setState({
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: e.currentTarget.innerText,
		});
	};

	onKeyDown = (e) => {
		const { activeSuggestion, filteredSuggestions } = this.state;

		// User pressed the enter key
		if (e.keyCode === 13) {
			this.setState({
				activeSuggestion: 0,
				showSuggestions: false,
				userInput: filteredSuggestions[activeSuggestion],
			});
		}
		// User pressed the up arrow
		else if (e.keyCode === 38) {
			if (activeSuggestion === 0) {
				return;
			}

			this.setState({ activeSuggestion: activeSuggestion - 1 });
		}
		// User pressed the down arrow
		else if (e.keyCode === 40) {
			if (activeSuggestion - 1 === filteredSuggestions.length) {
				return;
			}

			this.setState({ activeSuggestion: activeSuggestion + 1 });
		}
	};

	render() {
		const {
			onChange,
			onClick,
			onKeyDown,
			state: {
				activeSuggestion,
				filteredSuggestions,
				showSuggestions,
				userInput,
			},
		} = this;

		let suggestionsListComponent;

		if (showSuggestions && userInput) {
			if (filteredSuggestions.length) {
				suggestionsListComponent = (
					<StyledList className="suggestions">
						{filteredSuggestions.map((suggestion, index) => {
							let className;

							// Flag the active suggestion with a class
							if (index === activeSuggestion) {
								className = 'suggestion-active';
							}

							return (
								<li
									className={className}
									key={suggestion}
									onClick={onClick}
								>
									{suggestion}
								</li>
							);
						})}
					</StyledList>
				);
			} 
			// else {
			// 	suggestionsListComponent = (
			// 		<div className="no-suggestions">
			// 			<em>No suggestions, you're on your own!</em>
			// 		</div>
			// 	);
			// }
		}

		return (
			<>
				<input
					type="text"
					onChange={onChange}
					onKeyDown={onKeyDown}
					value={userInput}
				/>
				{suggestionsListComponent}
			</>
		);
	}
}

export default Autocomplete;
