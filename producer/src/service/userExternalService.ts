import axios from 'axios';
import { UserExternal } from '../dto/userExternalDto';
import userExternalConverter from '../converter/userExternalConverter';
import envConfig from '../config/envConfig';

const usersUri = '/api/v2/users'

export default {

    async getUsers(): Promise<UserExternal> {

        return axios.get(envConfig.userApiBaseUri + usersUri).then((response) => {
            console.log(response.data);
            return userExternalConverter.toDto(response.data);
        }).catch((error) => {
            console.error(error);
            //TODO: ADD ERROR HANDLING
            throw error;
        });
    }

}