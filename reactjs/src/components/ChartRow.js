function ChartRow({ id, type, category, concept, amount, record_date, created_at, updated_at }) {
    return (
        <tr>
            <td scope="row">{id}</td>
            <td>{type}</td>
            <td>{category}</td>
            <td>{concept}</td>
            <td>${amount}</td>
            <td>{record_date}</td>
            <td>{created_at}</td>
            <td>{updated_at}</td>
        </tr>
    )
}

export default ChartRow;