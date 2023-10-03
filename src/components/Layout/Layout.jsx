import { useEffect } from "react";
import "./layout.css"

import { useLocation } from "react-router-dom";


const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <div className="layout">{children}</div>;
};

export default Layout;