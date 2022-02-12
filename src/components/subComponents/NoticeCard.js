import React, {Component} from "react"
import { InfoOutlined } from "@material-ui/icons";

class NoticeCard extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="notice_card">
                    <div className="flexed-area centralized">
                        <i><InfoOutlined /></i>
                        <h6>{this.props.msg}</h6>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NoticeCard;