export interface Subscription {
    plan: string;
    status: string;
    user_id?: number;
    payment_method: string;
    term: string;
}

export const subscriptionDto = (subscription): Subscription => {
    return {
        plan: subscription.plan,
        user_id: subscription.user_id,
        status: subscription.status,
        payment_method: subscription.payment_method,
        term: subscription.term
    };
}