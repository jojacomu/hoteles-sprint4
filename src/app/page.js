import { CardsFilterTemplate } from "../../componets/templates/cardsFilter-template/cardsFilterTemplate";
import { hotelData } from "../../services/getHotelServices";

export default async function Home() {
    const getDataHotels = await hotelData();
    console.log(getDataHotels);
    return (
        <>
            <CardsFilterTemplate getDataHotels={getDataHotels}/>
        </>
    );
}
