import React from 'react'
import Container from './Container'
import {Link} from 'react-router'

export default class Header extends React.Component {
    render = () => {
        return (
            <div className="bg-light">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="/" className="navbar-brand">Goodnight Team</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" activeClassName="active" className="nav-link">Danh sách nhân
                                        viên</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClassName="active" to="thongke" className="nav-link">Thống kê</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClassName="active" to="quanly" className="nav-link">Quản lý nhân
                                        viên</Link>
                                </li>
                                <li className="nav-item">
                                    <Link activeClassName="active" to="quanlyluong" className="nav-link">Quản lý
                                        lương</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        )
    }

}