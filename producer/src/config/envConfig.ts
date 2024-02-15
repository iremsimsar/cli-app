import dotenv from 'dotenv';
dotenv.config();

export default {

    get port() {
        return process.env.PORT;
    },

    get userApiBaseUri() {
        console.log(process.env.USER_API_BASE_URI);
        return process.env.USER_API_BASE_URI;
    },

    get kafkaBrokers() {
        return process.env.KAFKA_BROKERS;
    },

    get kafkaClientId() {
        return process.env.KAFKA_CLIENT_ID;
    },

    get dbName() {
        return process.env.DB_NAME;
    },

    get dbUsername() {
        console.log(process.env.DB_USERNAME);
        return process.env.DB_USERNAME;
    },

    get dbPassword() {
        return process.env.DB_PASSWORD;
    },

    get dbHost() {
        return "db2"
    },

    get dbDialect() {
        return process.env.DB_DIALECT;
    }
}