import React from 'react'
import img1 from "./image/img1.jpg";

export default function slider() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Contact</h1>
              <h5 className="banner-heading-helper">Home<span id="give-some-margin">&gt;</span>Contact</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Contact</h1>
              <h5 className="banner-heading-helper">Home <span id="give-some-margin">&gt;</span>Contact</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Contact</h1>
              <h5 className="banner-heading-helper">Home<span id="give-some-margin">&gt;</span>Contact</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}
