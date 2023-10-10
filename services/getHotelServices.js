export const hotelData = async() => {
    try {
        const response = await fetch(
            "https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels"
        );
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Error en los hoteles traidos de la API");
    }
};
