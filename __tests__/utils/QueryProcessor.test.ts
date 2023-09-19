import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My Andrew ID is lanyuntw."
          ));
    });

    test('what is your name', () => {
        const query = "your name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Luna"
          ));
    });

    test('prime', () => {
        const query = "Which of the following numbers are primes: 75, 2, 45, 70, 55?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "2"
          ));
    });

    test('prime2', () => {
        const query = "Which of the following numbers are primes: 48, 32, 82, 13, 17?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "13, 17"
          ));
    });


});