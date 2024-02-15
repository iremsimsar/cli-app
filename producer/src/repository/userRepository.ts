import { UserExternal } from "../dto/userExternalDto";
import db from "../config/dbConfig";

export const createUser = async (data: UserExternal) => {
    return await db.users.create(data);
}