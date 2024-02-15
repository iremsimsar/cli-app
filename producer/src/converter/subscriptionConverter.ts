import { Subscription, subscriptionDto } from '../dto/subscriptionDto';

export default {

    toDto: (subscription: Subscription): Subscription => {
        return subscriptionDto(subscription);
    },

    toDtoList: (subscriptions: Subscription[]): Subscription[] => {
        return subscriptions.map(subscription => subscriptionDto(subscription));
    }
}