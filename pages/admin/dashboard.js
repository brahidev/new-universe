import { useState } from "react";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";

const Dashboard = () => {
	const [ section, setSection ] = useState("dashboard")

	const content = () => {
		if ( section === 'dashboard' ){ return <p> Dashboard </p> }
		if ( section === 'users' ){ return <p> Users </p> }
		if ( section === 'games' ){ return <p> Games </p> }
		if ( section === 'news' ){ return <p> News </p> }
	}

	return (
		<>
			<Sidebar section={ section } setSection={ setSection } />
			{
				content()
			}
		</>
	)
};

export default Dashboard;
