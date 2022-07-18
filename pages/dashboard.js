import { useEffect } from 'react'
import Menu from '../components/Menu/Index'

const Dashboard = () => {
    useEffect(() => {
        document.body.classList.add("dashboard")
    })

    return (
        <Menu />
    )
}

export default Dashboard