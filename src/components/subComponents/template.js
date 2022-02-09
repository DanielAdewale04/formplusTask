import React, {Component} from "react";
import Fetch from "../../API/fetch";
import Pagination from "./pagination";
import InAppLoader from "./loader"

class TemplateWidget extends Component{
    constructor(props){
        super(props)
        this.state = {
            items: [],
            currentPage: 1,
            tempPerPage: 30,
        }
    }
    componentDidMount(){
        Fetch.get_request("task_templates").then((res) => {
            this.setState({items: res})
        }).catch((err) => console.log(err)) 
    }
    paginationLogic(){
        const indexOfLastTemp = this.state.currentPage * this.state.tempPerPage;
        const indexOfFirstTemp = indexOfLastTemp - this.state.tempPerPage;
        const displayedCards = this.state.items.slice(indexOfFirstTemp, indexOfLastTemp)
        return displayedCards;
    }
    render(){
        const itemsCount = this.state.items.length;
        const paginate = () => {
            this.setState({currentPage: this.state.currentPage + 1})
        }
        const reversePaginate = () => {
            this.setState({currentPage: this.state.currentPage - 1})
        }
        
        return(
            <React.Fragment>
                <div className="template_widget">
                    <div className="flexed-area centralized apart">
                        <h4>All Templates</h4>
                        <h6>{itemsCount} <span>templates</span></h6>
                    </div>

                    {
                        this.state.items.length == 0 ?

                        null
                        
                        :

                        <Pagination 
                            tempCardPerPage={this.state.tempPerPage} 
                            totalNumbOfCard={this.state.items.length} 
                            paginate={paginate}
                            ReversePaginate={reversePaginate}
                            CurrentPage={this.state.currentPage}
                        />
                    }
                    
                    <div>
                        {
                            this.state.items.length == 0 ?

                            <InAppLoader />

                            :

                            <React.Fragment>
                                {this.paginationLogic().map((item) => <TemplateCard key={item.name} title={item.name} desc={item.description} />)}
                            </React.Fragment>
                            
                        } 
                        
                    </div>

                </div>

                {
                    this.state.items.length == 0 ?

                    null
                    
                    :

                    <Pagination 
                        tempCardPerPage={this.state.tempPerPage} 
                        totalNumbOfCard={this.state.items.length} 
                        paginate={paginate}
                        ReversePaginate={reversePaginate}
                        CurrentPage={this.state.currentPage}
                    />


                }
                
            </React.Fragment>
        )
    }
}

export default TemplateWidget;

export class TemplateCard extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="template_card">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.desc}</p>
                    <button>Use Template</button>
                </div>
            </React.Fragment>
        )
    }
}
