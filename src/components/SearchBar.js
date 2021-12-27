import react from "react";

class SearchBar extends react.Component {
    state = { inputTerm: '' };

    onInputToChange = (event) => {
        this.setState({ inputTerm: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call callback from parent component
        this.props.onFormSubmit(this.state.inputTerm)
    }
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search for video</label>
                        <input type='text' placeholder="Search"  value={this.state.inputTerm}  onChange={this.onInputToChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;