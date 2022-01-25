import SmallCard from "./SmallCard";


let balance = {
    title: "Balance",
    color: "primary",
    total: 17,
    icon: "fa-chart-bar"
};

let totalIngresos = {
    title: "Total Ingresos",
    color: "success",
    total: 49,
    icon: "fa-tasks"
};

let totalEgresos = {
    title: "Total Egresos",
    color: "danger",
    total: 32,
    icon: "fa-external-link-alt"
};

let cardProps = [balance, totalIngresos, totalEgresos];



function ContentRowTotals() {
    return (

        <div className="row">
            {cardProps.map((info, idx) => {
                return <SmallCard cardInfo={info} key={idx} />
            })}
        </div>

    )
}


export default ContentRowTotals;