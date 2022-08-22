import React, { useState, useEffect } from "react";

//asset
import LogoAsik from '../../asset/logoAsik.png'

export const SearchInput = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg " style={{ backgroundColor: "transparent" }}>

                {/* <img src={LogoAsik} class='logoAsik'></img> */}
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: "#5A98BF" }}>
                    <span class="navbar-toggler-icon"></span>
                </button> */}

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <form class="form-inline my-2 my-lg-0" style={{ float: 'right' }}>

                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </div>
            </nav>
        </>
    )
}
