import React, {Component} from "react"
import { InfoOutlined } from "@material-ui/icons";

class NoticeCard extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="notice_card">
                    <div className="flexed-area centralized">
                        <i><InfoOutlined /></i>
                        <h6>Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</h6>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NoticeCard;