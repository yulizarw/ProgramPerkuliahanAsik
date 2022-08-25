import React, { useState, useEffect } from "react";

import { Link, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import '../App.css'
//asset
import gambar1 from '../asset/Rectangle337.png'
import gambar2 from '../asset/Rectangle207.png'
//icon
import iconHandphone from '../asset/Icon/Communication/call.png'
import iconEmail from '../asset/Icon/Communication/mail.png'

//components
//header
import { GambarCarousel } from "../components/header/gambarCarousel";
import { NavbarLanding } from "../components/header/navbar";
import { SearchInput } from "../components/header/searchInput"
import { JumboTron } from "../components/header/jumbotron";
import { ButtonHubungiKami } from "../components/header/buttonHubungi";


export const LandingPage = () => {

    var w = window.innerWidth;
    var h = window.innerHeight;

    var box1width = (640 / w) * 100
    var box1height = (48 / h) * 100
    console.log(w)
    console.log(h)

    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" >
                <div class="carousel-inner" >
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={gambar1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={gambar2} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://images.pexels.com/photos/7944238/pexels-photo-7944238.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Third slide" />
                    </div>
                </div>
            </div>
            <div class='box1' >
                <i class='fa fa-phone iconHeaderRibbon'></i>
                <p class='textIconHeaderRibbon'>085810600103</p>
                <i class='fa fa-envelope mailIconHeaderRibbon' style={{ color: 'white' }}></i>
                <p class='textMailIconHeaderRibbon'>infoppa@baik.or.id</p>
            </div>

            {/* navbar */}
            <NavbarLanding />
            <SearchInput />
            <JumboTron />
            <ButtonHubungiKami />
        </>
    )
}