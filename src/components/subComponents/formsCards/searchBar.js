import React, {Component} from "react";
import { SearchRounded } from "@material-ui/icons"

class SearchBar extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="search_card">
                    <form>
                        <input placeholder="Search Templates" />
                        <div className="search_icon">
                            <i><SearchRounded /></i>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchBar;