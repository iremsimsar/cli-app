import { Address } from "src/dto/addressDto";
import db from "../config/dbConfig";

export const createAddress = async (data: Address) => {
    return await db.addresses.create(data)
};