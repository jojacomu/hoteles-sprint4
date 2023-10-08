"use client";
import { useState } from "react";
import { hotelData } from "../../../services/getHotelServices";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilers.module.css";

export const CardsFilter = () => {
    const [selectCountry, setSelectedCountry] = useState("all");

    const filterHotels = () => {
        const filteredHotels = hotelData.filter((hotel) => hotel.rooms===11)
            return filterHotels
    };

    filterHotels();

    return (
        <>
            <Header />
            <div className={styles.cardsContainer}>
                {hotelData.map((hotel, index) => (
                    <CardHotel key={index} hotel={hotel} />
                ))}
            </div>
        </>
    );
};
