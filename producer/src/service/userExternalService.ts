import axios from 'axios';
import { UserExternal } from '../dto/userExternalDto';
import userExternalConverter from '../converter/userExternalConverter';
import envConfig from '../config/envConfig';
import loggerService from './loggerService';

const usersUri = '/api/v2/users'

export default {

    async getUsers(): Promise<UserExternal> {

        return axios.get(envConfig.userApiBaseUri + usersUri).then((response) => {
            return userExternalConverter.toDto(response.data);
        }).catch((error) => {
            loggerService.error('Error getting users from external service', error);
            throw error;
        });
    }

}