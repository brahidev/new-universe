import { useEffect } from 'react'

import Header from '../components/Head/Header'
import Menu from '../components/Menu/Index'

const Dashboard = () => {
    useEffect(() => {
        document.body.classList.add("dashboard")
    })

    return (
        <>
            <Header
                text="New Universe - Dashboard"
            />
            <Menu />
        </>
    )
}

export default Dashboard