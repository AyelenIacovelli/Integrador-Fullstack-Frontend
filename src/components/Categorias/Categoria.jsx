import { useDispatch, useSelector } from "react-redux";

import { selectCategory } from "../../redux/slices/categoriesSlice";
import { motion } from "framer-motion"

export const Categoria = ({ img, title, category }) => {

    const { selectedCategory } = useSelector((state) => state.categories)

    const dispatch = useDispatch();

    return (
        <motion.div className="card-categoria"
            selected={category === selectedCategory}
            onClick={() => dispatch(selectCategory(category))}
            whileTap={{ scale: 0.95 }}
        >
            <img
                src={img}
                alt={category}
            />
            <h2>{title}</h2>
            <div className="border-decoration"></div>
        </motion.div>
    );
};

export default Categoria;