import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./card.module.css";
import { MainButton } from "../../atoms/main-button/Main-button";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "@/app/store/reservasSlice";

export const CardHotel = ({ hotel, snackbar }) => {
    const dispatch = useDispatch();

    const listHotelsReservation = useSelector(
        (state) => state.reservation.hotelsReservation
    );

    const handleClick = () => {
        localStorage.setItem("selectedHotel", JSON.stringify(hotel));
    };

    const handleReservation = () => {
        const hotelExists = listHotelsReservation.some(
            (hotels) => hotels.name === hotel.name
        );
        if (hotelExists) {
            alert("Hotel ya está reservado");
        } else {
            console.log("Hotel reservado");
            // alert("Hotel reservado");
            dispatch(addReservation(hotel));
            snackbar(true);
        }
    };

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    className={styles.imageHotel}
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={hotel.photo}
                    title={hotel.name}
                />
                <CardContent className={styles.containerInfo}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.titleHotel}
                    >
                        {hotel.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.descriptionHotel}
                    >
                        {hotel.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.price}
                    >
                        Price: ${hotel.price}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.countryCityHotel}
                    >
                        Country: {hotel.country}, City: {hotel.city}
                    </Typography>
                </CardContent>
                <CardActions className={styles.containerButton}>
                    <MainButton
                        size="small"
                        className={styles.buttonCardHotel}
                        onClick={handleClick}
                    >
                        Compartir
                    </MainButton>
                    <Link href={`detail/${hotel.name}`}>
                        <MainButton
                            size="small"
                            className={styles.buttonCardHotel}
                            onClick={handleClick}
                        >
                            Detalles
                        </MainButton>
                    </Link>
                    <MainButton
                        size="small"
                        className={styles.buttonCardHotel}
                        onClick={handleReservation}
                    >
                        Reservas
                    </MainButton>
                </CardActions>
            </Card>
        </>
    );
};
