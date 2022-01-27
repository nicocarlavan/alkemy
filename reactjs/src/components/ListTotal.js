import React, { Component } from "react";
import ListRow from "./ListRow";
import TopBar from "./TopBar";
import Footer from "./Footer";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ListTotal extends Component {
    constructor() {
        super()
        this.state = {
            records: [],
            quantity: 0,
            category_id: 0
        }

    }

    componentDidMount() {
        fetch('/api/records')
            .then(response => {
                return response.json()
            })
            .then(records => {
                this.setState({
                    records: records.data.records,
                    quantity: records.meta.count
                })
            })
            .catch(error => {
                console.log('Se encontró un error: ' + error)
            })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.state.category_id === "0") {
            this.componentDidMount()
        } else {
            fetch('/api/records/listByCategory/' + this.state.category_id)
                .then(response => {
                    return response.json()
                })
                .then(records => {
                    this.setState({
                        records: records.data.records,
                        quantity: records.meta.count
                    })
                })
                .catch(error => {
                    console.log('Se encontró un error: ' + error)
                })
        }


    }


    render() {

        return (
            <React.Fragment>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar />
                        <div className="card shadow mb-4 table-responsive">
                            <div className="card-header py-3 ">
                                <h5 className="m-0 font-weight-bold text-gray-800">Listado de Registros</h5>
                                <br></br>
                                <h6 className="m-0 text-gray-800">Cantidad de Registros: {this.state.quantity}</h6>
                                <br></br>
                                <Form onSubmit={this.handleSubmit}>

                                    <InputGroup className="mb-3">
                                        <Button variant="outline-secondary" className="mr-3" type="submit">
                                            Filtrar por categoría
                                        </Button>
                                        <div className="mt-1">
                                            <Form.Select name="category_id" onChange={this.handleChange}>
                                                <option value="0">Todas</option>
                                                <option value="1">Comida</option>
                                                <option value="2">Salidas</option>
                                                <option value="3">Sueldo</option>
                                                <option value="4">Ventas</option>
                                                <option value="5">Servicios</option>
                                                <option value="6">Impuestos</option>
                                                <option value="7">Varios</option>
                                            </Form.Select>
                                        </div>
                                    </InputGroup>

                                </Form>
                                <table className="table-striped table text-center col-auto table-hover" >
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Tipo</th>
                                            <th scope="col">Categoría</th>
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
                                            <th scope="col">Categoría</th>
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
                                        {this.state.records.map((record) => {
                                            return <ListRow {...record} key={record.id} />
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div >
            </React.Fragment >
        )
    }
}

export default ListTotal;





