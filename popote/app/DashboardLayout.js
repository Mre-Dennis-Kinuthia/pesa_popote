import Dashboardnavbar from './components/DashboardNavbar';

export default function DashboardLayout({children}){
    return(
        <>
            <Dashboardnavbar />
            <main className="container">{children}</main>
        </>
    )
}