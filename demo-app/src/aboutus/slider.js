import React from 'react'
import dimg from './images/dimg.jpg';


export default function slider() {
    return (
        <div>
            <>
            <div id="carouselExampleControlsNoTouching" className="carousel slide mt-5" data-bs-touch="false" data-bs-interval="false">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={dimg} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block ">
                    <h1>ABOUT US</h1>
                    <p className="banner-heading-helper"><a href="#">Home</a> <span id="give-some-margin">&gt;</span> CONTACT US</p>

                </div>
            </div>
            <div className="carousel-item">
            <img src={dimg} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h1>ABOUT US</h1>
                    <p className="banner-heading-helper "><a href="#">Home</a> <span>&gt;</span> CONTACT US</p>

                </div>
            </div>
            <div className="carousel-item">
            <img src={dimg} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                    <h1>ABOUT US</h1>
                    <p className="banner-heading-helper"><a href="#">Home</a> <span id="give-some-margin">&gt;</span> CONTACT US</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
            </>
        </div>
    )
}
