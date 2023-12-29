import { Outlet } from "react-router-dom"



const Layout = () => {
    return (
        <>

            <Outlet/>
            <footer>
                <span>2023</span>
            </footer>
        </>
    )
}

export default Layout