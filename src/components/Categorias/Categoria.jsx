import { useDispatch } from "react-redux";

import { selectCategory } from "../../redux/slices/categoriesSlice";
import { motion } from "framer-motion"

import "./categorias.css"

export const Categoria = ({ img, title, category, isSelected }) => {

    // const { selectedCategory } = useSelector((state) => state.categories)

    const dispatch = useDispatch();

    const handleCategoryClick = () => {
        if (category === "Todos") {
            dispatch(selectCategory(null)); // Borra la selección si se hace clic en "Todas las Categorías".
        } else {
            dispatch(selectCategory(category));
        }
    };


    return (
        <motion.div
            className={`card-categoria ${isSelected ? "selected" : ""}`}
            onClick={handleCategoryClick}
            whileTap={{ scale: 0.95 }}
        >
            <img src={img} alt={category} />
            <h2 className="h2-categoria">{title}</h2>
        </motion.div>
    );
};

export default Categoria;