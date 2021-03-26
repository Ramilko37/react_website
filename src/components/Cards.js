import React from "react";
import './Cards.css';
import CardItem from "./CardItem";
import { images } from '../utils/images';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={images.img}
                        text='Explore the hidden waterfall
                         deep inside the Amazon Jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                            src={images.img_2}
                            text='Travel through the islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src={images.img_3}
                            text='Explore the hidden waterfall
                         deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={images.img_2}
                            text='Travel through the islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src={images.img}
                            text='Travel through the islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Cards;