import { CreditCard } from "../dto/creditCartDto";
import db from "../config/dbConfig";

export const createCreditCard = async (data: CreditCard) => {
    return await db.creditCards.create(data);
};