import React from 'react'
import Navbar from "./navbar";
import Slider from "./slider";
import Content from "./content";
import Blog from "./blog";
import Team from "./team";

export default function aboutus() {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Content/>
            <Blog/>
            <Team/>

        </div>
    )
}
