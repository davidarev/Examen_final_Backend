export const resolvers = {
    Query: {
        test: async (): Promise<string> => {
            const test = "esto es una prueba JAJAJAJAJAJA"
            return test
        }
    }
}
