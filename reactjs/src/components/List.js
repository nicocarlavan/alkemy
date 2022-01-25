import ChartRow from "./ChartRow";

let tableRowData = [
    {
        id: 1,
        type: "Ingreso",
        category: "Sueldo",
        concept: "Programador Full Stack",
        amount: "221000",
        record_date: "2021-12-12",
        created_at: "2022-01-20",
        updated_at: null
    },
    {
        id: 2,
        type: "Ingreso",
        category: "Sueldo",
        concept: "Programador Freelance",
        amount: "21000",
        record_date: "2022-01-05",
        created_at: "2022-01-10",
        updated_at: "2022-01-25"
    },
    {
        id: 3,
        type: "Egreso",
        category: "Comida",
        concept: "Supermercado Disco",
        amount: "12300",
        record_date: "2022-01-10",
        created_at: "2022-01-18",
        updated_at: null
    }
]

function List() {
    return (
        <table className="table table-striped table-dark">
            <thead>
                <th scope="col">ID</th>
                <th scope="col">Tipo</th>
                <th scope="col">Categoria</th>
                <th scope="col">Concepto</th>
                <th scope="col">Importe</th>
                <th scope="col">Fecha del Registro</th>
                <th scope="col">Fecha de Creación</th>
                <th scope="col">Fecha de Actualización</th>
            </thead>
            <tfoot>
                <th scope="col">ID</th>
                <th scope="col">Tipo</th>
                <th scope="col">Categoria</th>
                <th scope="col">Concepto</th>
                <th scope="col">Importe</th>
                <th scope="col">Fecha del Registro</th>
                <th scope="col">Fecha de Creación</th>
                <th scope="col">Fecha de Actualización</th>
            </tfoot>
            <tbody>
                {tableRowData.map((row, idx) => {
                    return <ChartRow {...row} key={idx} />
                })}
            </tbody>
        </table>
    )
}

export default List;