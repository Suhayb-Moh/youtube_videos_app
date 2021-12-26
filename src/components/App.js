import react from "react";
import SearchBar from "./SearchBar";

class App extends react.Component{
    render () {
        return (
            <div className="ui container">
               <SearchBar />
            </div>
        )
    }
}

export default App;