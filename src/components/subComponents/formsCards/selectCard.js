import React, {Component} from "react";

class SelectCard extends Component{
    render(){
        return(
            <React.Fragment>
                <select className="item-select">
                    <option>{this.props.option}</option>
                </select>
            </React.Fragment>
        )
    }
}

export default SelectCard;