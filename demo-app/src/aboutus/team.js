import React from 'react'
import team1 from './images/team1.jpg';
import team2 from './images/team2.jpg';
import team3 from './images/team3.jpg';
import team4 from './images/team4.jpg';
import dimg from './images/dimg.jpg';
export default function team() {
    return (
        <div>
           <div className="container-fluid text-center py-4 "style={{ backgroundImage: "url(" + dimg + ")",backgroundSize: 'cover' }}>
    <h1 className="text-light">Meet Our Doctors</h1>
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
    <button className="btn rounded-pill  px-md-5 py-md-2 "style={{backgroundColor:"#FF5733",color:"white"}}>View More</button>
</div>

                   
                   
        </div>
    )
}
