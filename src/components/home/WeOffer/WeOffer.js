import React from 'react'
import OfferCard from './OfferCard'
import './WeOffer.css';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import { Icon, InlineIcon } from '@iconify/react';
import LoyaltyIcon from '@material-ui/icons/Loyalty';;




// import badgeIcon from '@iconify-icons/carbon/badge';


function WeOffer() {
    const OfferInfo = [
        {
            Icon: LoyaltyIcon,
            text: 'Loyalty Programs for you',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi officia ea!'
        },
        {
            Icon: LocalOfferIcon,
            text: 'Always the best value',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi officia ea!'
        },
        {
            Icon: PhoneInTalkIcon,
            text: '24 Hours custom services',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi officia ea!'
        },
    ]
    return (
        <div className="weOffer" id="offer">
            <div className="container">
                <h1 className="pt-4 text-center" style={{ color: "rgb(3, 167, 153)" }}>What we offer</h1>




                {/* <div className="Offer_row1">
 
                <div className="Offer_div_left">

                    <Icon icon={handshakeIcon} className="offer_icon" />
                    <div>
                        <h3>Loyalty Programs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aliquam accusantium eum cum dolorum quidem!</p>
                    </div>
                </div>
                <div className="Offer_div_right">
                    <Icon icon={badgeIcon} className="offer_icon" />
                    <div>
                        <h3>10 Years Experience</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi officia ea!</p>
                    </div>
                </div>
            </div>
            <div className="Offer_row2">
                <div className="Offer_div_left">
                    <LocalOfferIcon className="offer_icon" />
                    <div>
                        <h3>Always the best value</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ea quide</p>
                    </div>
                </div>
                <div className="Offer_div_right">
                    <PhoneInTalkIcon className="offer_icon" />
                    <div>
                        <h3>24 Hours custom services</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum error ad consectetur?</p>
                    </div>
                </div>
            </div> */}

                <div className="offer_row">

                    {
                        OfferInfo.map(OfferInfo => <OfferCard OfferInfo={OfferInfo}></OfferCard>)
                    }

                </div>
            </div>
        </div>
    )
}

export default WeOffer
