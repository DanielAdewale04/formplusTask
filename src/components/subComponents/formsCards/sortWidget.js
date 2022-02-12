import React, {Component} from "react";
import {optionValue} from "./selectCard"

class SortWidget extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="sort_widget flexed-area centralized">
                    <h6 style={{width:"10%",margin: "0 3% 0 0"}}>Sort By:</h6>
                    {/* Select Card with options looping from optionValue */}
                   
                    <select className="item-select">
                        {optionValue.optionCategory.map((item) => <option key={item.id}>{item.name}</option> )}
                    </select>
                    
                    <select className="item-select">
                        {optionValue.optionDate.map((item) => <option key={item.id}>{item.name}</option> )}
                    </select>

                    <select className="item-select">
                        {optionValue.optionOrder.map((item) => <option key={item.id}>{item.name}</option> )}
                    </select>
                    
                </div>
                
            </React.Fragment>
        )
    }
}

export default SortWidget;

