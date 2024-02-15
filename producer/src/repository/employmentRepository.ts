import { Employment } from "../dto/employmentDto";
import db from "../config/dbConfig";

export const createEmployment = async (data: Employment) => {
    return await db.employments.create(data);
};