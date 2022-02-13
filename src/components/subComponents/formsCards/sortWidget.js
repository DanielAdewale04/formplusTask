import React, {useState, useEffect} from "react";
import {optionValue} from "./selectCard"
import getCategory from "../../../redux/getCategory";
import { useDispatch, useSelector } from "react-redux";

function SortWidget(){

    const dispatch = useDispatch()
    const [catValue, setCatValue] = useState("");
    console.log(catValue)
    const handleChange = (e) => {
        dispatch(getCategory.actions.getCat(e.target.value))
    }

    return(
        <React.Fragment>
            <div className="sort_widget flexed-area centralized">
                <h6 style={{width:"10%",margin: "0 3% 0 0"}}>Sort By:</h6>

                {/* Select Card with options looping from optionValue */}
                
                <select className="item-select" onClick={handleChange}>
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

export default SortWidget;

