export interface Address {
    user_id?: number;
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

export const addressDto = (address): Address => {
    return {
        city: address.city,
        street_name: address.street_name,
        street_address: address.street_address,
        zip_code: address.zip_code,
        state: address.state,
        country: address.country,
        coordinates: {
            lat: address.coordinates.lat,
            lng: address.coordinates.lng
        }
    };
}