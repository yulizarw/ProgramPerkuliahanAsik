import React, { useState, useEffect } from "react";

//asset
import LogoAsik from '../../asset/logoAsik.png'

export const SearchInput = () => {
    return (
        <>

            <form class="form-inline my-2 my-lg-0 form-floating" style={{ float: 'left' }}>
                <input class="form-control mr-sm-2 searchBox" type="search" placeholder="Search" aria-label="Search" />


            </form>


        </>
    )
}
