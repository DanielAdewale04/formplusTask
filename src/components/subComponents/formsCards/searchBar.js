import React, {useState} from "react";
import { SearchRounded } from "@material-ui/icons";
// import { storeSearch } from "../../../redux/filterSearch";
import { useDispatch } from "react-redux";
import searchSlice from "../../.././redux/filterSearch";

function SearchBar(){

    const dispatch = useDispatch()
    const [inputFieldObject, setInputFieldObject] = useState("");
    const inputObject = (e) => {
        setInputFieldObject(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchSlice.actions.storeSearch(inputFieldObject))
    }
    console.log(inputFieldObject)


    return(
        <React.Fragment>
            <div className="search_card">
                <form>
                    <input placeholder="Search Templates" onChange={inputObject} />
                    <div className="search_icon">
                        <button type="submit" id="submit" style={{display:'none'}} onClick={handleSubmit}>click me</button>
                        <i><label htmlFor="submit"><SearchRounded /></label></i>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default SearchBar;