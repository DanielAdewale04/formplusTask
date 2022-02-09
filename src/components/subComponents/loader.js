import React, {useState, useEffect} from "react";
import { GridLoader } from "react-spinners";

function InAppLoader(){
    return(
        <React.Fragment>
            <div className="inAppLoader">
                <GridLoader/>
            </div>
        </React.Fragment>
    )
}

export default InAppLoader;