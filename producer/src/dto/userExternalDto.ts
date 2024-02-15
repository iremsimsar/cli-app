import { Address, addressDto } from "./addressDto"
import { CreditCard, creditCartDto } from "./creditCartDto"
import { Employment, employmentDto } from "./employmentDto"
import { Subscription, subscriptionDto } from "./subscriptionDto"

export interface UserExternal {
    id: number;
    uid: string;
    password: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    avatar: string;
    gender: string;
    phone_number: string;
    social_insurance_number: string;
    date_of_birth: Date;
    address: Address;
    employment: Employment;
    creditCard: CreditCard;
    subscription: Subscription;
}

export const userExternalDto = (userExternal): UserExternal => {
    return {
        id: userExternal.id,
        uid: userExternal.uid,
        password: userExternal.password,
        first_name: userExternal.first_name,
        last_name: userExternal.last_name,
        username: userExternal.username,
        email: userExternal.email,
        avatar: userExternal.avatar,
        gender: userExternal.gender,
        phone_number: userExternal.phone_number,
        social_insurance_number: userExternal.social_insurance_number,
        date_of_birth: userExternal.date_of_birth,
        address: addressDto(userExternal.address),
        employment: employmentDto(userExternal.employment),
        creditCard: creditCartDto(userExternal.credit_card),
        subscription: subscriptionDto(userExternal.subscription)
    };
}
