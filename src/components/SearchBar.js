import react from "react";

class SearchBar extends react.Component {
    state = { term: '' };

    onInputToChange = () => {

    } 
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search for video</label>
                        <input type='text' placeholder="Search"  value={this.state.term}  onChange={this.onInputToChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;