import React, {Component, useEffect} from "react";
import Pagination from "./pagination";
import InAppLoader from "./loader";
import { useDispatch, useSelector } from "react-redux";
import { getTemp } from "../../redux/getTemplates";
import dateFormat from "dateformat";

function TemplateWidget(){


    const templates = useSelector((state) => state.getTemplate.templates )
    const status = useSelector((state) => state.getTemplate.status )
    const indexOfFirstTemp = useSelector((state) => state.paginationSlice.indexOfFirstTemp)
    const indexOfLastTemp = useSelector((state) => state.paginationSlice.indexOfLastTemp)
    const searchInput = useSelector((state) => state.storeSearch)
    const CatHeader = useSelector((state) => state.getCategory)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemp())     
    }, [useDispatch()])

    const handleSearch = (value) => {
        if (searchInput == ""){
            return value
        }
        else if (value.name.toLowerCase().includes(searchInput.toLowerCase())){
            return value
        }
    }
        
        
        return(
            <React.Fragment>
                 <div className="template_widget">
                    <div className="flexed-area centralized apart">
                        <h4>{CatHeader} Templates</h4>
                        <h6>{templates.length} <span>templates</span></h6>
                    </div>
                    {
                        status == "loading" || status == "Failed!" ?
                            null
                                :
                            <Pagination />
                    } 
                    
                    <div>
                        {
                            status == "loading" ?
                                <InAppLoader />
                                    :
                                <React.Fragment>
                                    {templates.filter(handleSearch).slice(indexOfFirstTemp, indexOfLastTemp).map((item) => <TemplateCard 
                                                                                                        key={item.name} 
                                                                                                        title={item.name} 
                                                                                                        desc={item.description} 
                                                                                                        time={dateFormat(item.created, "fullDate")} />)}
                                </React.Fragment>
                        } 
                    </div>
                </div>
                 {
                    status == "loading" || status == "Failed!"  ?
                        null
                            :
                        <Pagination />
                }
            </React.Fragment>
        )
    }

export default TemplateWidget;

export class TemplateCard extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="template_card">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.desc}</p>
                    <div className="template-card-base flexed-area centralized apart">
                        <h4>Use Template</h4>
                        <span>{this.props.time}</span>
                    </div>
                   
                </div>
            </React.Fragment>
        )
    }
}
