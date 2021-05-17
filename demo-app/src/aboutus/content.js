import React from 'react'
import dimg1 from './images/dimg1.jpg';

export default function content() {
    return (
        
        <div>
            
        <div className="container-fluid " style={{ backgroundImage: "url(" + dimg1 + ")",backgroundSize: 'cover' }}>
        <div className="offset-md-7 col-md-4 offset-sm-3 col-sm-10  py-5  " style={{textAlign: 'left'}}>
                <h1 className="row2-heading-col1">Welcome to Fertility </h1><h1>Center</h1>
                <p className="some-text" style={{color:"#FF5733"}}>WELCOME THERE!</p><br></br>
            <div className=" container body-text">
                <p>We provide all medical services that you need. Our goal is to make our clients happy parents. We do
                    it as easy as possible for couples to have a baby, whether it’s through the use of egg donation or a
                    gestational carrier.</p>
                <div className="btn-group btn" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn rounded-pill px-md-5 py-md-3" style={{backgroundColor:"#FF5733",color:"white"}}>More About Us</button>

                </div>
            </div>
        </div>
        </div>

    <div className=" container-fluid row my-5">
        <div className="container-fluid col-12 text-center">
            <h1>About Our Center</h1>
            <h6 style={{color:"#FF5733"}}>WHO WE ARE</h6>
        </div>
    </div>



        </div>

    )
}
