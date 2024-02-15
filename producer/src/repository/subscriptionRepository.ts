import { Subscription } from "../dto/subscriptionDto";
import db from "../config/dbConfig";

export const createSubscription = async (data: Subscription) => {
    return await db.subscriptions.create(data);
};