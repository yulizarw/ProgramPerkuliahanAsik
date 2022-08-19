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
import { GambarCarousel } from "../components/gambarCarousel";
export const LandingPage = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" style={{ height: '100vh' }}>
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
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div class='box1'>
                <img class='iconHeaderRibbon' src={iconHandphone}></img>
                <p class='textIconHeaderRibbon'>085810600103</p>
                <img class='iconHeaderRibbon' src={iconEmail}></img>
            </div>

        </>
    )
}