import LastRecord from "./LastRecord"
import Categories from "./Categories"
import List from "./List";

function ContentRowMiddle() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Last Record */}
                <LastRecord />
                {/* Categories */}
                <Categories />
            </div>
            <div className="row">
                <List />
            </div>
        </div>
    )
}

export default ContentRowMiddle;