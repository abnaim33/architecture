import React from 'react'
import './PropertyMenu.css';
import cardImage1 from '../../../images/menuImage1.jpg';
import cardImage2 from '../../../images/menuImage2.jpg';
import cardImage3 from '../../../images/menuImage3.jpg';
import cardImage4 from '../../../images/menuImage4.jpg';
import cardImage5 from '../../../images/menuImage5.jpg';
import cardImage6 from '../../../images/menuImage6.jpg';
import { Link } from 'react-router-dom';
import PropertyMenuCard from './PropertyMenuCard';
function PropertyMenu() {
    const propertyMenu = [{
        img: cardImage1,
        text: 'Property Menu',
        description: 'Lorem ipsum dolor sit amet elit Unde dolores aliquam itaque incidunt obcaecati ratione'
    },
    {
        img: cardImage2,
        text: 'Property Menu',
        description: 'Lorem ipsum dolor sit amet elit Unde dolores aliquam itaque incidunt obcaecati ratione'
    },
    {
        img: cardImage3,
        text: 'Property Menu',
        description: 'Lorem ipsum dolor sit amet elit Unde dolores aliquam itaque incidunt obcaecati ratione'
    },
    {
        img: cardImage4,
        text: 'Property Menu',
        description: 'Lorem ipsum dolor sit amet elit Unde dolores aliquam itaque incidunt obcaecati ratione'
    },
    {
        img: cardImage5,
        text: 'Property Menu',
        description: 'Lorem ipsum dolor sit amet elit Unde dolores aliquam itaque incidunt obcaecati ratione'
    },
    {
        img: cardImage6,
        text: 'Property Menu',
        description: 'Lorem ipsum dolor sit amet elit Unde dolores aliquam itaque incidunt obcaecati ratione'
    },
    ]
    return (
        <div className="propertyMenu" id="property">
            <div className="container">

                <h1 className="text-left pt-5">Our Property Menu</h1>



                <div className="PropertyMenu_row">

                    {
                        propertyMenu.map(pmenu => <PropertyMenuCard pmenu={pmenu} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default PropertyMenu
