import CategoryCard from "./CategoryCard";

let categories = [
    {
        category: "Comida",
        image: "img-category-comida.jpg"
    },
    {
        category: "Salidas",
        image: "img-category-salidas.jpg"
    },
    {
        category: "Sueldo",
        image: "img-category-sueldo.jpg"
    }
]

function Categories() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
                </div>
                <div className="card-body">
                    {categories.map((info, idx) => {
                        return <CategoryCard cardInfo={info} key={idx} />
                    })}
                </div>
            </div>
        </div>

    )
}

export default Categories;