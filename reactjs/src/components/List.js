import React from "react";
import ListRow from "./ListRow";


function List(props) {
    console.log(props)
    return (
        <React.Fragment>
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
                    {props.map((record) => {
                        return <ListRow {...record} key={record.id} />
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )

}

export default List;