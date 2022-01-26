import React, { Component } from "react";
import SmallCard from "./SmallCard";


let balance = {
    title: "Balance",
    color: "primary",
    icon: "fa-chart-bar"
};

let ingresos = {
    title: "Total Ingresos",
    color: "success",
    icon: "fa-tasks"
};

let egresos = {
    title: "Total Egresos",
    color: "danger",
    icon: "fa-external-link-alt"
};

let cardProps = [balance, ingresos, egresos];
let totalsAux;


class ContentRowTotals extends Component {

    constructor() {
        super()
        this.state = {
            totalBalance: 0,
            totalIngresos: 0,
            totalEgresos: 0,
        }

    }


    componentDidMount() {
        fetch('/api/records/')
            .then(response => {
                return response.json()
            })
            .then(totals => {
                this.setState({
                    totalBalance: totals.data.totalBalance,
                    totalIngresos: totals.data.totalIngresos,
                    totalEgresos: totals.data.totalEgresos
                })


            })
            .catch(error => {
                console.log('Se encontró un error: ' + error)
            })


    }



    render() {
        totalsAux = Object.values(this.state)
        return (
            <React.Fragment>
                <div className="row" >
                    {
                        cardProps.map((card, idx) => {
                            return <SmallCard {...card} total={totalsAux[idx]} key={idx} />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}


export default ContentRowTotals;