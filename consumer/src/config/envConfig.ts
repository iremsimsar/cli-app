import dotenv from 'dotenv';
dotenv.config();

export default {

    get kafkaBrokers() {
        return process.env.KAFKA_BROKERS;
    },

    get kafkaClientId() {
        return process.env.KAFKA_CLIENT_ID;
    },

    get kafkaGroupId1(): string {
        return process.env.KAFKA_GROUP_ID1 as string;
    },

    get kafkaGroupId2(): string {
        return process.env.KAFKA_GROUP_ID2 as string;
    },

    get kafkaGroupId3(): string {
        return process.env.KAFKA_GROUP_ID3 as string;
    },
}