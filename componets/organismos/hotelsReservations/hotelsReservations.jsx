"use client";
import { useSelector } from "react-redux";
import { CardHotel } from "../../molecules/card/card";

export const HotelsReservations = () => {
    const listHotelsReservation = useSelector(
        (state) => state.reservation.hotelsReservation
    );
    console.log(listHotelsReservation);
    return (
        <div>
            {listHotelsReservation.map((hotel, index) => (
                <CardHotel key={index} hotel={hotel} />
            ))}
        </div>
    );
};
