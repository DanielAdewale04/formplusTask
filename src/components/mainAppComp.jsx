import React, {useState, useEffect} from "react";
import TemplateWidget from "./subComponents/template";
import FormWidget from "./subComponents/formWidget";
import NoticeCard from "./subComponents/NoticeCard";
import Loader from "./subComponents/loader"


function MainAppBody(){
	const [loader, setLoader] = useState(false);

	useEffect(() =>{
		setLoader(true)
		setTimeout(() => {
			setLoader(false)
		}, 2000)
	}, [])
    return (
		<React.Fragment>

			{
				loader ?
				<div className="fixed_loader">
					<Loader color="red" />
				</div>
				

				:

				<div className="index_main_widget">
					<FormWidget />
					<NoticeCard msg="Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates"/>
					<TemplateWidget />
				</div>

			}
			
		</React.Fragment>
    );
  }

export default MainAppBody;
