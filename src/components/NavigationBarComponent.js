import React from 'react';
import { ROOT, BASIC_FORM } from "../path";
import { Link, useLocation } from "react-router-dom";

export default function NavigationBarComponent() {
    const location = useLocation();
    const { pathname } = location;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className={`navbar-brand px-2`} to={ROOT}>Formik</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${ROOT === pathname && "active"}`} to={ROOT}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${BASIC_FORM === pathname && "active"}`} to={BASIC_FORM}>BasicForm</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
