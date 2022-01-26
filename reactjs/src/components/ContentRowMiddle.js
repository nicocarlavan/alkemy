import Categories from "./Categories"
import List from "./List";

function ContentRowMiddle() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Categories */}
                <Categories />
            </div>
            <div className="card shadow mb-4 table-responsive">
                <div className="card-header py-3 ">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimos Registros</h5>

                    <List />


                </div>
            </div>
        </div >
    )
}

export default ContentRowMiddle;