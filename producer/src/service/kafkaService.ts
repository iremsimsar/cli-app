import kafka from "../config/kafkaConfig"
import KafkaError from "../helper/error/kafkaError";

const producer = kafka.producer();

export const sendMessage = async (topic: string, data: Object) => {

    await producer.connect().catch((error) => {
        console.log(`Error connecting to Kafka: ${error}`)
        throw new KafkaError(error, topic, data)
    });

    const messages: { value: string; }[] = [
        {
            value: JSON.stringify(data)
        }
    ];

    await producer.send({ topic, messages }).then(console.log).catch(console.error);

    await producer.disconnect().catch((error) => {
        console.log(`Error disconnecting from Kafka: ${error}`)
        throw new KafkaError(error, topic, data)
    });
};
