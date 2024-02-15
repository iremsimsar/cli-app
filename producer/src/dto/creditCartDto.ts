export interface CreditCard {
    cc_number: string;
    user_id?: number;
}

export const creditCartDto = (creditCard): CreditCard => {
    return {
        cc_number: creditCard.cc_number,
        user_id: creditCard.user_id
    };
}