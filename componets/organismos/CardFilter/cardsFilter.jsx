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
    const [selectedSize, setSelectedSize] = useState("all");
    const [dateTo, setDateTo] = useState("all");
    const [dateFrom, setDateFrom] = useState("all");

    const filterHotels = (hotels) => {
        const newDateTo = new Date(dateTo);
        const newDateFrom = new Date(dateFrom);
        console.log(newDateTo, newDateFrom);

        const filteredHotels = hotels.filter((hotel) => {
            const isCountryMatch =
                selectedCountry === "all" ||
                selectedCountry.toLocaleLowerCase() ===
                    hotel.country.toLocaleLowerCase();

            const isPriceMatch =
                selectedPrice === "all" ||
                selectedPrice.toString() == hotel.price.toString();

            const isSizeMatch =
                selectedSize === "all" ||
                selectedSize === hotelRooms(hotel.rooms);

            console.log(selectedSize);

            return isCountryMatch && isPriceMatch && isSizeMatch;
        });

        return filteredHotels;
    };

    return (
        <>
            <Header
                updateCity={setSelectedCountry}
                updatePrice={setSelectedPrice}
                updateSize={setSelectedSize}
                changeDateTo={setDateTo}
                changeDateFrom={setDateFrom}
            />
            <div className={styles.cardsContainer}>
                {filterHotels(hotelData).length > 0 ? (
                    filterHotels(hotelData).map((hotel, index) => (
                        <CardHotel key={index} hotel={hotel} />
                    ))
                ) : (
                    <h2>No hay hoteles para las opciones escogidas</h2>
                )}
            </div>
        </>
    );
};
