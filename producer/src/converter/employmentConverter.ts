import { Employment, employmentDto } from "../dto/employmentDto";

export default {

    toDto: (employment: Employment): Employment => {
        return employmentDto(employment);
    },

    toDtoList: (employments: Employment[]): Employment[] => {
        return employments.map(employment => employmentDto(employment));
    }
}