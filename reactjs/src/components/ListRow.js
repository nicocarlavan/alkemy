import React from "react";

function ListRow(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.type.type}</td>
                <td>{props.category.category}</td>
                <td>{props.concept}</td>
                <td>${props.amount}</td>
                <td>{props.record_date}</td>
                <td>{props.created_at}</td>
                <td>{props.updated_at}</td>
            </tr>
        </React.Fragment>
    )
}

export default ListRow;