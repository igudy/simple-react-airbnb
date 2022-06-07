import React from "react";
import star from '../images/star.png';


export default function Card(props){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }else{
        badgeText = "UNAVAILABLE"
    }

    return(
        <div className="card">
            <div className="card--badge">{badgeText}</div>
            <img src={`../images/${props.item.coverImg}`} alt="image1" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.reviewCount})</span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title bold">{props.item.title}</p>
            <p><span className="card--price bold">{props.item.price} </span>/ person</p>
        </div>
    )
}