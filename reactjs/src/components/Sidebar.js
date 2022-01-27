import React from "react";
import { Route, Link, Routes } from 'react-router-dom'
import NewRecordForm from "./NewRecordForm";
import ContentWrapper from "./ContentWrapper";
import ListIn from './ListIn';
import ListOut from './ListOut';
import ListTotal from './ListTotal';
import EditRecordForm from "./EditRecordForm";

function Sidebar() {
    return (
        <React.Fragment>
            < ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" >

                {/* Sidebar - Brand */}
                < Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" >
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src="/assets/images/dashboard.png" alt="Dashboard" />
                    </div>
                </Link >

                {/* Divider */}
                < hr className="sidebar-divider my-0" />

                {/* Nav Item - Dashboard */}
                < li className="nav-item active" >
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Presupuesto</span></Link>
                </li >

                {/* Divider */}
                < hr className="sidebar-divider" />

                {/* Heading */}
                < div className="sidebar-heading" > Acciones</div >

                {/* Nav Item - Nuevo Registro */}
                < li className="nav-item" >
                    <Link className="nav-link collapsed" to="NewRecordForm">
                        <i className="far fa-plus-square"></i>
                        <span>Nuevo Registro</span>
                    </Link>
                </li >

                {/* Nav Item - Listado Completo */}
                < li className="nav-item" >
                    <Link className="nav-link" to="ListTotal">
                        <i className="far fa-list-alt"></i>
                        <span>Listado de Registros</span></Link>
                </li >

                {/* Nav Item - Listado Ingresos */}
                < li className="nav-item" >
                    <Link className="nav-link" to="ListIn">
                        <i className="far fa-list-alt"></i>
                        <span>Listado de Ingresos</span></Link>
                </li >

                {/* Nav Item - Listado Egresos */}
                < li className="nav-item" >
                    <Link className="nav-link" to="ListOut">
                        <i className="far fa-list-alt"></i>
                        <span>Listado de Egresos</span></Link>
                </li >

                {/* Divider */}
                < hr className="sidebar-divider d-none d-md-block" />
            </ul >



            {/* Creando rutas */}
            <Routes>
                <Route exact path='/' element={<ContentWrapper />} />
                <Route path='/NewRecordForm' element={<NewRecordForm />} />
                <Route path='/ListTotal' element={<ListTotal />} />
                <Route path='/ListIn' element={<ListIn />} />
                <Route path='/ListOut' element={<ListOut />} />
                <Route path='/EditRecordForm/:id' element={<EditRecordForm />} />
            </Routes>

        </React.Fragment>

    )
}


export default Sidebar;