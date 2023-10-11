"use client";
import React, {useContext,useEffect,useState} from "react";
import { MainButton } from "../../../../componets/atoms/main-button/Main-button";
import styles from "./page.module.css";
import { AppContext } from "@/app/store/CurrentProvider";

const Detail = () => {
    const [selectedHotel, setSelectedHotel] = useState({
        title: "",
        description: "",
        photo: "",
        country: "",
        city: "",
    });

    const { setDetailPage } = useContext(AppContext);

    useEffect(() => {
        const storedHotel = localStorage.getItem("selectedHotel");
        if (storedHotel) {
            setSelectedHotel(JSON.parse(storedHotel));
        }
        setDetailPage()
    }, []);

    const { name, photo, description, country, city } = selectedHotel;

    return (
        <div className={styles.container}>
            <img
                src={photo}
                width={300}
                height={300}
                className={styles.detailImage}
            />
            <h2 className={styles.title}>{name}</h2>
            <p>{description}</p>
            <p>País: {country}</p>
            <p>Ciudad: {city}</p>
            <div className={styles.contentMenu}>
                <MainButton size="small" className={styles.buttonCardHotel}>
                    Reservar
                </MainButton>
                <MainButton size="small" className={styles.buttonSecondary}>
                    Favoritos
                </MainButton>
            </div>
        </div>
    );
};

export default Detail;
