import React, { Component } from "react";
import { Link } from 'react-router-dom'

class ListRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            type: "",
            category: "",
            concept: "",
            amout: 0,
            record_date: "",
            created_at: "",
            updated_at: ""
        }
    }

    reload = () => {
        window.location.reload(true);
    }

    handleClickDelete = async (e) => {
        e.preventDefault();
        fetch('/api/records/delete/' + this.props.id, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => {
                if (data.meta.status === 200) {
                    alert('El registro ' + this.props.id + ' se ha eliminado con éxito')
                    this.reload();
                } else {
                    alert('Ocurrió un error al intentar elimiar el registro')
                }
            })
    }

    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.type.type}</td>
                    <td>{this.props.category.category}</td>
                    <td>{this.props.concept}</td>
                    <td>${this.props.amount}</td>
                    <td>{this.props.record_date}</td>
                    <td>{this.props.created_at}</td>
                    <td>{this.props.updated_at}</td>
                    <td><Link to={"/EditRecordForm/" + this.props.id}>
                        <i className="fas fa-pencil-alt mt-3"></i></Link></td>
                    <td><i onClick={this.handleClickDelete} className="fas fa-trash-alt mt-3"></i></td>
                </tr>

            </React.Fragment >
        )
    }
}

export default ListRow;