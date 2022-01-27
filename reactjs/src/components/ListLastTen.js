import React, { Component } from "react";
import ListRow from "./ListRow";
import Footer from "./Footer";

class ListOut extends Component {
    constructor() {
        super()
        this.state = {
            records: [],
            quantity: 0,
            lastTenRecords: []
        }

    }

    componentDidMount() {
        fetch('/api/records/')
            .then(response => {
                return response.json()
            })
            .then(records => {
                this.setState({
                    quantity: records.data.records.slice(-10).length,
                    lastTenRecords: records.data.records.slice(-10).reverse()
                })
            })
            .catch(error => {
                console.log('Se encontró un error: ' + error)
            })
    }



    render() {
        return (
            <React.Fragment>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="card shadow mb-4 table-responsive">
                            <div className="card-header py-3 ">
                                <h5 className="m-0 font-weight-bold text-gray-800">Ultimos Registros</h5>
                                <br></br>
                                <h6 className="m-0 text-gray-800">Cantidad de Registros: {this.state.quantity}</h6>
                                <br></br>
                                <table className="table-striped table text-center col-auto table-hover" >
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Tipo</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Concepto</th>
                                            <th scope="col">Importe</th>
                                            <th scope="col">Fecha del Registro</th>
                                            <th scope="col">Fecha de Creación</th>
                                            <th scope="col">Fecha de Actualización</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Tipo</th>
                                            <th scope="col">Categoria</th>
                                            <th scope="col">Concepto</th>
                                            <th scope="col">Importe</th>
                                            <th scope="col">Fecha del Registro</th>
                                            <th scope="col">Fecha de Creación</th>
                                            <th scope="col">Fecha de Actualización</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {this.state.lastTenRecords.map((record) => {
                                            return <ListRow {...record} key={record.id} />
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default ListOut;





