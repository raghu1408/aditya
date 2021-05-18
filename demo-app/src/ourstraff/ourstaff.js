/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import dimg from "./images/dimg.jpg";
import team1 from './images/team1.jpg';
import team2 from './images/team2.jpg';
import team3 from './images/team3.jpg';
import team4 from './images/team4.jpg';
import './ourstaff.css';

export default function ourstaff() {
    return (
        <div>
            <div className="row row1 py-5" id="banner">
                <div className="banner-header text-center py-5">
                    <h1 className="banner-heading text-light">Our Staff</h1>
                    <p className="banner-heading-helper text-light"><a href="#" className="text-light">Home</a> <span id="give-some-margin">&gt;</span> OUR STAFF</p>
                </div>
            </div>
            <div className="row row2">
                <div className="col-md-6" style={{backgroundColor: "#c0d05b",color: "#fff"}}>
                    <div className="row">
                        <div className="offset-lg-4 col-lg-7 offset-lg-1 col-md-12 px-3 py-5 col-10"style={{textAlign:'left'}}>
                            <h1 className="row2-heading-col1 offset-md-0 offset-2 px-md-0 px-3">Team Spirit</h1>
                            <h6 className="some-text offset-md-0 offset-2 px-md-0 px-3" style={{color:"#77872a"}}>WHO WE ARE</h6>
                            <div className="body-text px-md-2 px-4 my-5">
                                <p className="offset-md-0 offset-2">We help families have a baby. With decades of experience, a state-of-the-art laboratory facility,
                            personal care provided by more than 70 dedicated staff members.</p>
                                <p className="float-end">Dr. Andrew Cruize, MD</p>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div className="col-md-6 py-5 d-md-block d-none" id="double-side-img" style={{backgroundImage:"url(" + dimg + ")", backgroundSize:'cover'}}>
                    
                </div>
            </div>
            <div className="container-fluid text-center py-4 ">
    <h1 className="text-dark">Our Doctors</h1>
    <h5 style={{color:"#E22D0D"}}>OUR TEAM</h5>
    <div className="container-fluid d-md-flex  my-5"style={{alignItems:"center"}}>
        <div className="container-fluid d-md-flex" style={{alignItems:"center"}}>
            
            <div className="container bg-light my-3" style={{maxWidth: "18rem"}}>
                <img src={team1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dr. Andrew Cruize, MD</h5>
                    <p className="card-text">Reproductive endocrinology and infertility.</p>
                </div>
            </div>
            
            
            <div className=" container bg-light mx-md-3 my-3" style={{maxWidth: "18rem"}}>
                <img src={team2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dr. Lora Lewis, MD</h5>
                    <p className="card-text">Reproductive endocrinology and infertility.</p>
                </div>
            </div>
            
        </div>

        <div className="container-fluid d-md-flex " style={{alignItems:"center"}}>
            
            <div className="container bg-light  my-3" style={{maxWidth: "18rem"}}>
                <img src={team3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dr. Chris Priston, MD</h5>
                    <p className="card-text">Reproductive endocrinology and infertility.</p>
                </div>
            </div>
            
            
            <div className=" container bg-light mx-md-3 my-3" style={{maxWidth: "18rem"}}>
                <img src={team4} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dr. Lora Lewis, MD</h5>
                    <p className="card-text">Reproductive endocrinology and infertility.</p>
                </div>
            </div>
            
            
        </div>
        
        
    </div>
    <div className="container-fluid d-md-flex  my-5"style={{alignItems:"center"}}>
        <div className="container-fluid d-md-flex" style={{alignItems:"center"}}>
            
            <div className="container bg-light my-3" style={{maxWidth: "18rem"}}>
                <img src={team1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dr. Andrew Cruize, MD</h5>
                    <p className="card-text">Reproductive endocrinology and infertility.</p>
                </div>
            </div>
            
            
            <div className=" container bg-light mx-md-3 my-3" style={{maxWidth: "18rem"}}>
                <img src={team2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dr. Lora Lewis, MD</h5>
                    <p className="card-text">Reproductive endocrinology and infertility.</p>
                </div>
            </div>
            
        </div>

        <div className="container-fluid d-md-flex " style={{alignItems:"center"}}>
            
            <div className="container bg-light  my-3" style={{maxWidth: "18rem"}}>
                <img src={team3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dr. Chris Priston, MD</h5>
                    <p className="card-text">Reproductive endocrinology and infertility.</p>
                </div>
            </div>
            
            
            <div className=" container bg-light mx-md-3 my-3" style={{maxWidth: "18rem"}}>
                <img src={team4} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Dr. Lora Lewis, MD</h5>
                    <p className="card-text">Reproductive endocrinology and infertility.</p>
                </div>
            </div>
        </div>
    </div>

</div>
            
<div className="row-4 text-center py-5" id="row4-background" style={{backgroundImage:"url(" + team4 + ")", backgroundSize:'cover'}}>
        <div className="row-4-content py-5">
            <h1 className="row4-heading">Book an Appointment today!</h1>
            <p className="row4-helper-heading">GET A FREE CONSULTATION</p>
            <div className="button-helper pt-5">
                 <button className="btn rounded-pill  px-md-5 py-md-4 "style={{backgroundColor:"#FF5733",color:"white"}}>Ask a Question</button>
            </div>
         </div>
    </div>

</div>                                     
    )
}
