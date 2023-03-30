import { getRandomNumberFact } from "number_facts_app"
import { getRandomNumberFactService } from "services/numbers"

// Hago un mock de todos los métodos del módulo
jest.mock("./services/numbers")
// llevo una de las funciones a un Objeto tipo Mock para tener todas las funciones de testeo
const mock_function = getRandomNumberFactService as jest.Mock

// logica del testeo
test('should return a number fact', async () => {
    mock_function.mockReturnValueOnce({text:""})
    const number_fact = await getRandomNumberFact()
    expect(number_fact.text).toBe("")
})