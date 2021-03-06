import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import TopBar from './TopBar';
import Footer from './Footer';


class NewRecordForm extends Component {


    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            type_id: 0,
            category_id: 0,
            concept: "",
            amount: 0,
            record_date: ""
        }
    }



    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        fetch('/api/records/edit/' + this.state.id, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category_id: this.state.category_id,
                concept: this.state.concept,
                amount: this.state.amount,
                record_date: this.state.record_date
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.meta.status === 200) {
                    alert('El registro se ha editado con éxito')
                    window.location = '/ListTotal';
                } else {
                    alert('Ocurrió un error al intentar editar el registro')
                }
            })

    }

    componentDidMount() {
        let index = window.location.pathname.lastIndexOf('/')
        let paramId = window.location.pathname.slice(index + 1)

        fetch('/api/records/' + paramId)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: paramId,
                    type_id: data.data.records.type_id,
                    category_id: data.data.records.category_id,
                    concept: data.data.records.concept,
                    amount: data.data.records.amount,
                    record_date: data.data.records.record_date
                })

            })


    }

    render() {
        const { type_id, category_id, concept, amount, record_date } = this.state

        return (

            <React.Fragment>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar />
                        <div className="card shadow mb-4 table-responsive">
                            <div className="card-header py-3 " >
                                <h5 className="m-0 font-weight-bold text-gray-800">Editar Registro</h5>
                                <br></br>
                                <Card className="mx-auto">
                                    <Card.Body >
                                        <Form onSubmit={this.handleSubmit}>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text className="mr-3">Tipo</InputGroup.Text>
                                                <div className="mt-1" onChange={this.handleChange}>
                                                    <Form.Check inline disabled={true} type="radio" name="type_id" value="1" label="Ingreso"
                                                        checked={type_id === 1 ? true : false} />
                                                    <Form.Check inline disabled={true} type="radio" name="type_id" value="2" label="Egreso"
                                                        checked={type_id === 2 ? true : false} />
                                                </div>
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text className="mr-3">Categoria</InputGroup.Text>
                                                <div className="mt-1">
                                                    <Form.Select value={category_id} name="category_id" onChange={this.handleChange}>
                                                        <option >Elija una categoría</option>
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
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text className="mr-3">Concepto</InputGroup.Text>
                                                <Form.Control type="text" name="concept"
                                                    value={concept} onChange={this.handleChange} />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text className="mr-3">Importe</InputGroup.Text>
                                                <InputGroup.Text>$</InputGroup.Text>
                                                <FormControl aria-label="Importe" name="amount"
                                                    value={amount} onChange={this.handleChange} />
                                                <InputGroup.Text>.00</InputGroup.Text>
                                            </InputGroup>
                                            <InputGroup>
                                                <InputGroup.Text className="mr-3">Fecha del Registro</InputGroup.Text>
                                                <FormControl type="date" name="record_date"
                                                    value={record_date} onChange={this.handleChange} />
                                            </InputGroup>
                                            <br></br>
                                            <div className="text-center">
                                                <Button variant="outline-secondary" type="submit">
                                                    Editar
                                                </Button>
                                            </div>

                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>

            </React.Fragment >
        );
    }

}

export default NewRecordForm;