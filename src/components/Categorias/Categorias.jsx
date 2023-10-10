import { useSelector } from "react-redux";
// import { Categories } from "../../data/Categories";
import Categoria from "./Categoria";
import "./categorias.css"


const Categorias = () => {

    const { categories } = useSelector((state) => state.categories)

    // console.log(categories);

    return (
        <div className="categorias-container">
            {
                categories.map((category) => {
                    return <Categoria {...category} key={category.id} />
                })
            }
        </div>
    );
};

export default Categorias;