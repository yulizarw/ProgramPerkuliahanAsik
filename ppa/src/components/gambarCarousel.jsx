import React, { useState, useEffect } from "react";

//asset
import gambar1 from '../asset/Rectangle337.png'
import gambar2 from '../asset/Rectangle207.png'

export const GambarCarousel = () => {

    const dataGambar = [

        { urlGambar: '../asset/Rectangle337.png' },
        { urlGambar: '../asset/Rectangle207.png' },

    ]
    dataGambar.map((gambar, i) => (
        console.log(gambar.urlGambar, 'disini')
    ))


    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
                <ol class="carousel-indicators">
                    {dataGambar.map((gambar, i) => (
                        gambar[i] == 0 ? ( <li data-target="#carouselExampleIndicators" data-slide-to={gambar[i]} class="active"></li>) :
                           ( <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>)
                    ))}
                </ol>
                <div class="carousel-inner" style={{ height: '100vh' }}>
                    {dataGambar.map((gambar, i) => (
                        gambar[i] == 0 ?
                            (<div class="carousel-item active">
                                {/* <img class="d-block w-100" src={gambar.urlGambar[i]} alt={i} /> */}
                                {gambar.urlGambar}
                            </div>)
                            :
                            (<div class="carousel-item">
                                {/* <img class="d-block w-100" src={gambar.urlGambar[i]} alt={i}  /> */}
                                {gambar.urlGambar}
                            </div>)
                    ))}
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

            {/* {dataGambar.map((gambar, i) => (
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={gambar[i]} class="active"></li>
                    </ol>
                    <div class="carousel-inner" style={{ height: '100vh' }}>
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={gambar.urlGambar} alt="First slide" />
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
            ))} */}
        </>
    )
}