import { CreditCard, creditCartDto } from '../dto/creditCartDto';

export default {

    toDto: (creditCard: CreditCard): CreditCard => {
        return creditCartDto(creditCard);
    },

    toDtoList: (creditCarts: CreditCard[]): CreditCard[] => {
        return creditCarts.map(creditCard => creditCartDto(creditCard));
    }
}