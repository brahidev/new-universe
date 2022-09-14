import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import Header from "../../components/Head/Header";
import DashboardContent from "./section/DashboardContent";
import GamesContent from "./section/GamesContent";
import { checkLoginCookie } from "../../utils/cookies";

const Dashboard = () => {
	const [ section, setSection ] = useState("dashboard")
	const router = useRouter()

	useEffect(() => {
		const Login =  checkLoginCookie()

		if (!Login) {
			router.push('/admin')
		}
	}, [router])

	const content = () => {
		if ( section === 'dashboard' ) {
			return <DashboardContent />
		}
		if ( section === 'users' ){
			return <DashboardContent />
		}
		if ( section === 'games' ){
			return <GamesContent />
		}
		if ( section === 'news' ){ return <p> News </p> }
	}

	return (
		<>
			<Header text="Dashboard" />
			<Sidebar section={ section } setSection={ setSection } />
			{
				content()
			}
		</>
	)
};

export default Dashboard;
