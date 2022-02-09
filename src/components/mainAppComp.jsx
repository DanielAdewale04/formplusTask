import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import TemplateWidget from "./subComponents/template";
import FormWidget from "./subComponents/formWidget";
import NoticeCard from "./subComponents/NoticeCard";


class MainAppBody extends Component {

	constructor(props){
		super(props)
		this.state = {
			isAuth : false,
		}
	}
		

  render() {

    return (
		<React.Fragment>
			<div className="index_main_widget">
				<FormWidget />
				<NoticeCard />
				<TemplateWidget />
			</div>
		</React.Fragment>
    );
  }
}

export default MainAppBody;
