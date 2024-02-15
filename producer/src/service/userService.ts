import userExternalService from "./userExternalService"
import { createUser } from "../repository/userRepository"
import { createSubscription } from "../repository/subscriptionRepository";
import { createEmployment } from "../repository/employmentRepository";
import { createCreditCard } from "../repository/creditCardRepository";
import { sendMessage } from "./kafkaService";
import { createAddress } from "../repository/addressRepository";
import { Address } from "../dto/addressDto";
import { Subscription } from "../dto/subscriptionDto";
import { Employment } from "../dto/employmentDto";
import { CreditCard } from "../dto/creditCartDto";

export const create = async () => {

    const userData = await userExternalService.getUsers();
    const subscription: Subscription = { ...userData.subscription, user_id: userData.id };
    const address: Address = { ...userData.address, user_id: userData.id };
    const employment: Employment = { ...userData.employment, user_id: userData.id };
    const creditCard: CreditCard = { ...userData.creditCard, user_id: userData.id };

    await createUser(userData);
    const promiseList = [
        createAddress(address),
        createSubscription(subscription),
        createEmployment(employment),
        createCreditCard(creditCard),
        sendMessage(subscription.status, userData)
    ]

    await Promise.all(promiseList);

    return userData;
}