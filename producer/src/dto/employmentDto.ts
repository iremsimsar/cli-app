export interface Employment {
    title: string;
    key_skill: string;
    user_id?: number;
}

export const employmentDto = (employment): Employment => {
    return {
        user_id: employment.user_id,
        title: employment.title,
        key_skill: employment.key_skill
    };
}