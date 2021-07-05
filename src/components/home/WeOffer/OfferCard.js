import React from 'react'

function OfferCard({ OfferInfo }) {
    return (
        <div className="offerCard">
            <OfferInfo.Icon className="offerCard_icon" />
            <h3 className="offerCard_text">{OfferInfo.text}</h3>
            <p>{OfferInfo.description}</p>
        </div>
    )
}

export default OfferCard
