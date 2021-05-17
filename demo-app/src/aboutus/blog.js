import React from 'react'
import bimg1 from './images/bimg1.jpg';
import bimg2 from './images/bimg2.jpg';
import bimg3 from './images/bimg3.jpg';

export default function blog() {
    return (
        <div>
        <div className="container-fluid d-md-flex col-md-12 col-sm-6 my-5 "style={{alignItems:"center"}}>
        <div className=" container " style={{maxWidth: "20rem"}}>
            <img src={bimg1} className="card-img-top" alt="..."/>
            <div className="card-body my-3">
                <h4 className="card-title">Highly Qualified </h4><h4>Specialists</h4>
                <p className="card-text">Our kind and compassionate care team includes physicians, nurses, medical assistants and other support staff.</p>
            </div>
            <div className="card-body">
                <a href="#" className="card-link">More Info</a>
            </div>
        </div>

        <div className="container" style={{maxWidth: "20rem"}}>
        <img src={bimg2} className="card-img-top" alt="..."/>
            <div className="card-body my-3">
                <h4 className="card-title">The Latest High-Tech Equipment</h4>
                <p className="card-text">The center is equipped with high-tech and approved equipment that ensures the best possible cooperation with doctors.</p>
            </div>
            <div className="card-body">
                <a href="#" className="card-link">More info</a>
            </div>
        </div>

        <div className="container" style={{maxWidth: "20rem"}}>
            <img src={bimg3} className="card-img-top" alt="..."/>
            <div className="card-body my-3">
                <h4 className="card-title">We Work with All the Pathologies</h4>
                <p className="card-text">We help people fight against reproductive difficulties, infertility or fertility problems who dream of starting a family.</p>
            </div>
            <div className="card-body my-3">
                <a href="#" className="card-link">More info</a>
            </div>
        </div>

    </div>
        </div>
    )
}
