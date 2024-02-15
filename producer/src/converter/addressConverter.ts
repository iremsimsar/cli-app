import { Address, addressDto } from "../dto/addressDto";

export default {

    toDto: (address: Address): Address => {
        return addressDto(address);
    },

    toDtoList: (addresses: Address[]): Address[] => {
        return addresses.map(address => addressDto(address));
    }
}