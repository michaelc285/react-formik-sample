import React, { useRef } from 'react';
import { ROOT, BASIC_FORM, FORMIK_FORM } from "../path";
import { Link, useLocation } from "react-router-dom";
import { useMeasure } from '../hooks/useMeasure';

export default function NavigationBarComponent() {
    const { pathname } = useLocation();
    const navRef = useRef();
    useMeasure(navRef, "NAV_REF_ADD");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" ref={navRef}>
            <Link className={`navbar-brand px-2`} to={ROOT}>Formik</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${BASIC_FORM === pathname && "active"}`} to={BASIC_FORM}>Basic</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${FORMIK_FORM === pathname && "active"}`} to={FORMIK_FORM}>Formik</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
