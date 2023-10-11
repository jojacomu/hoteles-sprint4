"use client";
import { useEffect, useState } from "react";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilers.module.css";
import { hotelRooms } from "@/utils/helper";
import AlertHelp from "../../atoms/alert/alerthelp";
import { Alert, Snackbar } from "@mui/material";

export const CardsFilter = ({ getDataHotels }) => {
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedPrice, setSelectedPrice] = useState("all");
    const [selectedSize, setSelectedSize] = useState("all");
    const [dateFrom, setDateFrom] = useState("all");
    const [dateTo, setDateTo] = useState("all");
    const [filterHotels, setFilterHotels] = useState([]);
    const [setshowSnackbar, setShowSnackbar] = useState(false);
    // const [hotelsData, setHotelsData] = useState([]);

    // const fetchHotels = async () => {
    //     try {
    //         const data = await hotelData();
    //         setHotelsData(data);
    //     } catch (error) {
    //         console.error("Error en la API");
    //     }
    // };

    // useEffect(() => {
    //     fetchHotels();
    // }, []);

    useEffect(() => {
        const newDateFrom = new Date(dateFrom);
        const newDateTo = new Date(dateTo);
        const newDateLocalFrom = new Date(
            newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 60000
        );
        const newDateLocalTo = new Date(
            newDateTo.getTime() + newDateTo.getTimezoneOffset() * 60000
        );
        console.log(newDateLocalFrom, newDateLocalTo);
        const newDateFromMs = newDateFrom.getTime();
        const newDateToMs = newDateTo.getTime();
        const today = new Date().setHours(0, 0, 0, 0);

        const filteredHotels = getDataHotels.filter((hotel) => {
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

            return (
                isCountryMatch && isPriceMatch && isSizeMatch && availability
            );
        });
        setFilterHotels(filteredHotels);
    }, [selectedCountry, selectedPrice, selectedSize, dateFrom, dateTo]);

    // const filterHotels = () => {
    //     const newDateTo = new Date(dateTo);
    //     const newDateFrom = new Date(dateFrom);
    //     const newDateLocalFrom = new Date(
    //         newDateFrom.getTime() + newDateFrom.getTimezoneOffset() * 60000
    //     );
    //     const newDateLocalTo = new Date(
    //         newDateTo.getTime() + newDateTo.getTimezoneOffset() * 60000
    //     );
    //     console.log(newDateLocalFrom, newDateLocalTo);
    //     const newDateFromMs = newDateFrom.getTime();
    //     const newDateToMs = newDateTo.getTime();
    //     const today = new Date().setHours(0, 0, 0, 0);

    //     const filteredHotels = getDataHotels.filter((hotel) => {
    //         const availabilityHotels = today + hotel.availabilityFrom;
    //         const availabilityDays = availabilityHotels + hotel.availabilityTo;

    //         const isCountryMatch =
    //             selectedCountry === "all" ||
    //             selectedCountry.toLocaleLowerCase() ===
    //                 hotel.country.toLocaleLowerCase();

    //         const isPriceMatch =
    //             selectedPrice === "all" ||
    //             selectedPrice.toString() == hotel.price.toString();

    //         const isSizeMatch =
    //             selectedSize === "all" ||
    //             selectedSize === hotelRooms(hotel.rooms);

    //         const availability =
    //             (dateTo === "all" && dateFrom === "all") ||
    //             (newDateToMs >= availabilityHotels &&
    //                 newDateFromMs <= availabilityDays);

    //         console.log(selectedSize);

    //         return (
    //             isCountryMatch && isPriceMatch && isSizeMatch && availability
    //         );
    //     });

    //     return filteredHotels;
    // };

    return (
        <>
            <Header
                updateCity={setSelectedCountry}
                updatePrice={setSelectedPrice}
                updateSize={setSelectedSize}
                changeDateTo={setDateTo}
                changeDateFrom={setDateFrom}
            />
            {filterHotels.length > 0 ? (
                <div className={styles.cardsContainer}>
                    {filterHotels.map((hotel, index) => (
                        <CardHotel
                            key={index}
                            hotel={hotel}
                            snackbar={setShowSnackbar}
                        />
                    ))}
                </div>
            ) : (
                <AlertHelp severity="info">
                    <h2>No hay hoteles para las opciones escogidas</h2>
                    <strong>Por favor utilice otros filtros</strong>
                </AlertHelp>
            )}
            <Snackbar
                open={setshowSnackbar}
                autoHideDuration={2000}
                onClose={setShowSnackbar}
            >
                <Alert severity="success" sx={{ width: "100%" }}>
                    Hotel reservado correctamente
                </Alert>
            </Snackbar>
        </>
    );
};
