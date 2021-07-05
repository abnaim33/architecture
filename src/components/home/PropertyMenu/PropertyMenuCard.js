import React from 'react'

function PropertyMenuCard({ pmenu }) {
    return (
        <div className="card">
            <img src={pmenu.img} alt="" className="card-img" />
            <div className="card-body">
                <h4>{pmenu.text}</h4>
                <p>{pmenu.description}</p>
                <button className="property-btn"> View This</button>
            </div>
        </div>
    )
}

export default PropertyMenuCard
