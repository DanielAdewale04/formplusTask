import React, {Component} from "react";
import SearchBar from "./formsCards/searchBar";
import SortWidget from "./formsCards/sortWidget";

class FormWidget extends Component{
    render(){
        return(
            <React.Fragment>
                {/* Displays all form at the very top
                    Divide into sub components of Search, Filter of reusable component */}
                <div className="breadcrumb-area">
                     <div className="flexed-area centralized apart form-area">
                        <SearchBar />
                        <SortWidget />
                     </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FormWidget;