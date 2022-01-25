function Sidebar() {
    return (

        < ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" >

            {/* Sidebar - Brand */}
            < a className="sidebar-brand d-flex align-items-center justify-content-center" href="/" >
                <div className="sidebar-brand-icon">
                    <img className="w-50" src="assets/images/dashboard.png" alt="Dashboard" />
                </div>
            </a >

            {/* Divider */}
            < hr className="sidebar-divider my-0" />

            {/* Nav Item - Dashboard */}
            < li className="nav-item active" >
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - Presupuesto</span></a>
            </li >

            {/* Divider */}
            < hr className="sidebar-divider" />

            {/* Heading */}
            < div className="sidebar-heading" > Acciones</div >

            {/* Nav Item - Nuevo Registro */}
            < li className="nav-item" >
                <a className="nav-link collapsed" href="/">
                    <i className="far fa-plus-square"></i>
                    <span>Nuevo Registro</span>
                </a>
            </li >

            {/* Nav Item - Listado Ingresos */}
            < li className="nav-item" >
                <a className="nav-link" href="/">
                    <i className="far fa-list-alt"></i>
                    <span>Listado de Ingresos</span></a>
            </li >

            {/* Nav Item - Listado Egresos */}
            < li className="nav-item" >
                <a className="nav-link" href="/">
                    <i className="far fa-list-alt"></i>
                    <span>Listado de Egresos</span></a>
            </li >

            {/* Divider */}
            < hr className="sidebar-divider d-none d-md-block" />
        </ul >

    )
}


export default Sidebar;