import { getRandomNumberFactService } from "services/numbers";

export const getRandomNumberFact = async () => {
    const random_number_fact = await getRandomNumberFactService();
    return random_number_fact;
}