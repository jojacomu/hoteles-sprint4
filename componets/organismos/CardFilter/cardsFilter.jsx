"use client";
import { useState } from "react";
import { hotelData } from "../../../services/getHotelServices";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilers.module.css";
import { hotelRooms } from "@/app/utils/helper";
import AlertHelp from "../../atoms/alert/alerthelp";

export const CardsFilter = () => {
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedPrice, setSelectedPrice] = useState("all");
    const [selectedSize, setSelectedSize] = useState("all");
    const [dateFrom, setDateFrom] = useState("all");
    const [dateTo, setDateTo] = useState("all");

    const filterHotels = (hotels) => {
        const newDateTo = new Date(dateTo);
        const newDateFrom = new Date(dateFrom);
        // const newDateLocalFrom = new Date(
        //     newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 60000
        // );
        // const newDateLocalTo = new Date(
        //     newDateTo.getTime() + newDateTo.getTimezoneOffset() * 60000
        // );
        // console.log(newDateLocalFrom, newDateLocalTo);
        const newDateFromMs = newDateFrom.getTime();
        const newDateToMs = newDateTo.getTime();
        const today = new Date().setHours(0, 0, 0, 0);

        const filteredHotels = hotels.filter((hotel) => {
            const availabilityHotels = today + hotel.availabilityFrom;
            const availabilityDays = availabilityHotels + hotel.availabilityTo;

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

            const availability =
                (dateTo === "all" && dateFrom === "all") ||
                (newDateToMs >= availabilityHotels &&
                    newDateFromMs <= availabilityDays);

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
                    <AlertHelp severity="info">
                        <h2>No hay hoteles para las opciones escogidas</h2>
                        <strong>Por favor utilice otros filtros</strong>
                    </AlertHelp>
                )}
            </div>
        </>
    );
};
