import React, {useEffect} from "react";
import { ChevronLeftRounded } from "@material-ui/icons";
import { ChevronRightRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {getIndexOfLastTemp, getIndexOfFirstTemp, incrementCurrentPage, decrementCurrentPage} from "../../redux/paginationReducer";



// Pagination reusbale component
const Pagination = () => {

    const firstPage = useSelector((state) => state.paginationSlice.firstPage)
    const totalTemplates = useSelector((state) => state.getTemplate.totalTemplates)
    const tempPerPage = useSelector((state) => state.paginationSlice.tempPerpage)

    const indPageNumbers = []
    // Get First Page
    var firstPageNum = [firstPage]
    // Get Last Page
    const lastPage = (Math.ceil((totalTemplates / tempPerPage) - 1))


    const dispatch = useDispatch()
    // Get Total Number of Pages
    for (var i = 1; i <= Math.ceil(totalTemplates / tempPerPage); i++){
        indPageNumbers.push(i)
    }

    useEffect(() => {
        dispatch(getIndexOfFirstTemp());
        dispatch(getIndexOfLastTemp());
        for (var i = 1; i <= Math.ceil(totalTemplates / tempPerPage); i++){
            indPageNumbers.push(i)
        }
        
    }, [dispatch])

    return(
        <React.Fragment>
            <div className="flexed-area centralized apart pagination-widget">
                <div onClick={() => dispatch(decrementCurrentPage())} className="flexed-area centralized" style={{cursor: "pointer"}}>
                    <ChevronLeftRounded />  
                    <h5>Previous</h5>
                </div>
                
                <div className="pag-num">
                    <span>
                        {indPageNumbers[firstPageNum]}
                    </span>  
                        of  
                    <span>
                        {indPageNumbers[lastPage]}
                    </span>
                </div>

                <div onClick={() => dispatch(incrementCurrentPage())} className="flexed-area centralized">
                    <h5 style={{cursor: "pointer"}}>Next</h5>
                    <ChevronRightRounded />
                </div>
                
            </div>
        </React.Fragment>
    )
}


export default Pagination;