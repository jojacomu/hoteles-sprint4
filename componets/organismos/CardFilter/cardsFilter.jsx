"use client";
import { useState } from "react";
import { hotelData } from "../../../services/getHotelServices";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilers.module.css";
import { hotelRooms } from "@/app/utils/helper";

export const CardsFilter = () => {
    
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedPrice, setSelectedPrice] = useState("all");
    const [selectedSize, setSelectedSize] = useState ("all")

    console.log({selectedSize});

    const filterHotels = (hotels) => {

        const filteredHotels = hotels.filter((hotel) => {
            const isCountryMatch = selectedCountry ==='all' || selectedCountry.toLocaleLowerCase() === hotel.country.toLocaleLowerCase()

            const isPriceMatch = selectedPrice === 'all' || selectedPrice.toString() == hotel.price.toString()

            const isSizeMatch = selectedSize === 'all' || selectedSize === hotelRooms(hotel.rooms)

            console.log(selectedSize);

            return isCountryMatch && isPriceMatch && isSizeMatch
        })

        return filteredHotels
    };

    return (
        <>
            <Header 
                updateCity= {setSelectedCountry}
                updatePrice= {setSelectedPrice}
                updateSize= {setSelectedSize}
                />
            <div className={styles.cardsContainer}>
                {filterHotels(hotelData).map((hotel, index) => (
                    <CardHotel key={index} hotel={hotel} />
                ))}
            </div>
        </>
    );
};
