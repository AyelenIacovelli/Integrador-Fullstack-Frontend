import { AiOutlineCheck } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import "./orderStatus.css"

const OrderStatus = ({ status }) => {
    return (
        <div>
            {status === "check" && (
                <span className="status check">
                    <AiOutlineCheck />
                </span>
            )}
            {status === "pending" && (
                <span className="status pending">
                    <BiTime />
                </span>
            )}
            {status === "cancel" && (
                <span className="status cancel">
                    <MdOutlineCancel />
                </span>
            )}
        </div>
    );
};

export default OrderStatus;