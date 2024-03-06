import React from "react";
import { ReactDOM } from "react";
import Navbar from '../components/navbar';
import Footer from "../components/footer";

import Featured from "./featured";

import "../styles/home.css";
import { Outlet, Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="container-fluid p-0">
               <div  className="intro_img">
                </div>         
        </div>

    )
}