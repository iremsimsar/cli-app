import { UserExternal, userExternalDto } from "../dto/userExternalDto";

export default {

    toDto: (user: UserExternal): UserExternal => {
        return userExternalDto(user);
    },

    toDtoList: (users: UserExternal[]): UserExternal[] => {
        return users.map(user => userExternalDto(user));
    }
}