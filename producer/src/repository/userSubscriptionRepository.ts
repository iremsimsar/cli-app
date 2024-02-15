import db from "../config/dbConfig";

export const findOrCreateUserSubscription = async (data: any) => {
    return await db.userSubscriptions.findOrCreate({
        where: {
            userId: data.userId,
            subscriptionId: data.subscriptionId
        },
        defaults: {
            userId: data.userId,
            subscriptionId: data.subscriptionId
        }
    });
}