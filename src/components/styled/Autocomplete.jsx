import React, { Component } from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
	width: 236px;
    border: 1px solid #999;
    border-top-width: 0;
    list-style: none;
    overflow-y: auto;
    padding-left: 0;
	background-color: ${props => props.theme.color.light};
	border-radius: 17px;
    border: ${props => props.theme.color.dark} solid 1px;
	position: absolute;
	left: 0;
	top: 24px;

    li {
        padding: 0.5rem;
    }

    .suggestion-active,
    li:hover {
        background-color: ${props => props.theme.color.grey};
        cursor: pointer;
    }
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
        }

        return (
            <>
                <input
                    type="text"
                    placeholder="Search"
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
