import React from "react";
import groupImage from '../images/groupImage.png';


export default function Hero(){
    return(
        <section className="hero">
            <img src={groupImage} alt="groupImage" className="hero--photo" />
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero-text">Join unique interative activities lead by
            one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}