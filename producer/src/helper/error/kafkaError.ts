import loggerService from "../../service/loggerService";

export default class KafkaError extends Error {

    constructor(error: Error, topicName: string, data: Object) {
        loggerService.error('Kafka producer Error ', error + ' topicName: ' + topicName + ' data: ' + JSON.stringify(data));
        super(error.message);
        this.name = 'KafkaError';
    }
}
