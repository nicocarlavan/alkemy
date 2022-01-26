import React, { Component } from "react";
import CategoryCard from "./CategoryCard";



class Categories extends Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        fetch('/api/records/categories')
            .then(response => {
                return response.json()
            })
            .then(categories => {
                this.setState({
                    categories: categories.data.records
                })
            })
            .catch(error => {
                console.log('Se encontró un error: ' + error)
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-12 mb-4" >
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    this.state.categories.map((category, index) => {
                                        return <CategoryCard {...category} key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Categories;