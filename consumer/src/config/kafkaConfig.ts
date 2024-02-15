import EnvConfig from "./envConfig";
import { Kafka } from 'kafkajs'

export default new Kafka({
    clientId: EnvConfig.kafkaClientId || "0",
    brokers: EnvConfig.kafkaBrokers?.split(",") || [],
    ssl: false
})
