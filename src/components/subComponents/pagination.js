import React, {Component, useState, useEffect} from "react";
import { ChevronLeftRounded } from "@material-ui/icons";
import { ChevronRightRounded } from "@material-ui/icons";

const Pagination = ({tempCardPerPage, totalNumbOfCard, paginate, ReversePaginate}) => {
    var [firstPage, setFirstPage] = useState(0)
    const indPageNumbers = []
    // Get Last Page
    const lastPage = (Math.ceil((totalNumbOfCard / tempCardPerPage) - 1))
    // Get Total Number of Pages
    for (var i = 1; i <= Math.ceil(totalNumbOfCard / tempCardPerPage); i++){
        indPageNumbers.push(i)
    }
    // Increase number of Page by 1 and move to next Page
    const PageIncrement = () =>{
        if (firstPage >= 0){
            setFirstPage(firstPage + 1)
            paginate()
        }
    }
    // Decrease number of Page by 1 and move to initial Page
    const PageDecrement = () => {
        if (firstPage > 0 ){
            setFirstPage(firstPage - 1)
            ReversePaginate()
        }    
    }

    return(
        <React.Fragment>
            <div className="flexed-area centralized apart pagination-widget">
                <div onClick={PageDecrement} className="flexed-area centralized" style={{cursor: "pointer"}}>
                    <ChevronLeftRounded />  
                    <h5>Previous</h5>
                </div>
                
                <div className="pag-num">
                    <span>
                        {indPageNumbers[firstPage]}
                    </span>  
                        of  
                    <span>
                        {indPageNumbers[lastPage]}
                    </span>
                </div>

                <div onClick={PageIncrement} className="flexed-area centralized">
                    <h5 style={{cursor: "pointer"}}>Next</h5>
                    <ChevronRightRounded />
                </div>
                
            </div>
        </React.Fragment>
    )
}


export default Pagination;