import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Lyout() {
    return (
        <div>
             
            <nav className="navbar navbar-inverse navbar-fixed-top bg-info" style={{marginBottom:"100px"}}>
                <div className="container-fluid">
                    <div className="navbar-header navbar-right">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand " href="https://peamit-plus.github.io/jerusalem/"
                            style={{ marginLeft: "20px", textAlign: "right" }}>+ פעמית
                            פלוס</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to={"/*"}>עזרה</Link></li>
                            <li><Link to={"/about"}>אודות</Link></li>
                            <li ><Link to={"/"}>בית</Link></li>
                        </ul>
                        <div className="navbar-form navbar-left">
                            <div className="input-group">
                                <input list="dtlist" type="search" onInput="checkDataList" className="form-control" id="searchInput"
                                    placeholder="חיפוש מוצר" name="search" dir="rtl" />
                                <datalist id="dtlist"></datalist>
                                <div className="input-group-btn">
                                    <button className="btn btn-default" onclick="searchProductForm()">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-info navbar-btn fade-in navbar-left" data-toggle="modal" data-target="#myModal">למידע
                            ללקוח לחץ
                            כאן</button>
                    </div>
                </div>
            </nav>
            {/* <div style={{marginTop:"100px"}}> */}
            <Outlet/>
            {/* </div> */}
        </div>

    )
}
