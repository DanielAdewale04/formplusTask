import React, {Component} from "react";
import SelectCard from "./selectCard";

class SortWidget extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="sort_widget flexed-area centralized">
                    <h6 style={{width:"10%",margin: "0 3% 0 0"}}>Sort By:</h6>
                    <SelectCard option="All" />
                    <SelectCard option="Default" />
                    <SelectCard option="Default" />
                </div>
                
            </React.Fragment>
        )
    }
}

export default SortWidget;