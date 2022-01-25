function CategoryCard({ cardInfo }) {
    return (
        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                        <img src="assets/images/mandalorian.jpg" width="20%" />    {cardInfo.category}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;