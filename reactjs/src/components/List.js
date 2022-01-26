import React, { Component } from "react";
import ListRow from "./ListRow";


class List extends Component {
    constructor() {
        super()
        this.state = {
            records: [],
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
                    records: records.data.records,
                    lastTenRecords: records.data.records.slice(-10)
                })
            })
            .catch(error => {
                console.log('Se encontró un error: ' + error)
            })
    }



    render() {
        return (
            <React.Fragment>
                <table className="table-striped table text-center col-auto " >
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
                        </tr>
                    </tfoot>
                    <tbody>
                        {this.state.lastTenRecords.map((record) => {
                            return <ListRow {...record} key={record.id} />
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default List;