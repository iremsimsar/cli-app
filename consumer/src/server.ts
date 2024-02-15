import envConfig from "./config/envConfig";
import kafkaConfig from "./config/kafkaConfig";
import Enum from "./helper/enum";

const consumer = kafkaConfig.consumer({ groupId: envConfig.kafkaGroupId1 });
const consumer1Run = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: Enum.kafka.topic.active, fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log({
                value: message.value?.toString(),
            });
        },
    });
};

const consumer2 = kafkaConfig.consumer({ groupId: envConfig.kafkaGroupId2});
const consumer2Run = async () => {
    await consumer2.connect();
    await consumer2.subscribe({ topic: Enum.kafka.topic.pending, fromBeginning: true });

    await consumer2.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log({
                value: message.value?.toString(),
            });
        },
    });
}



const topics = Object.values(Enum.kafka.topic);

const consumer3 = kafkaConfig.consumer({ groupId: envConfig.kafkaGroupId3});
const consumer3Run = async () => {
    await consumer3.connect();
    await Promise.all(topics.map(topic => consumer.subscribe({ topic, fromBeginning: true })));
    await consumer3.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log({
                value: message.value?.toString(),
            });
        },
    });
}

consumer2Run().catch(e => console.error(`Error:: ${e.message}`, e));
consumer1Run().catch(e => console.error(`Error:: ${e.message}`, e));
consumer3Run().catch(e => console.error(`Error:: ${e.message}`, e));
