import Solution, { factorial } from './Solution.ts';

const TESTS: { input: { subjectCount: number, resultLetterCount: number }, output: number }[] = [
    { input: { subjectCount: 0, resultLetterCount: 0}, output: 0 },
    { input: { subjectCount: 1, resultLetterCount: 0}, output: 0 },
    { input: { subjectCount: 0, resultLetterCount: 1}, output: 0 },

    { input: { subjectCount: 1, resultLetterCount: 1}, output: 1 },
    { input: { subjectCount: 1, resultLetterCount: 2}, output: 2 },
    { input: { subjectCount: 1, resultLetterCount: 3}, output: 3 },
    { input: { subjectCount: 1, resultLetterCount: 4}, output: 4 },
    
    { input: { subjectCount: 2, resultLetterCount: 1 }, output: 1 },
    { input: { subjectCount: 2, resultLetterCount: 2}, output: 3 },
    // Original Question
    { input: { subjectCount: 9, resultLetterCount: 5}, output: 715 }
]

const FACTORIAL_TESTING: { input: number, output: number }[] = [
    { input: 0, output: 1 },
    { input: 1, output: 1 },
    { input: 2, output: 2 },
    { input: 3, output: 6 },
    { input: 4, output: 24 },
    { input: 5, output: 120 }
]
// Testing factorial function
for (let test of FACTORIAL_TESTING) {
    Deno.test(`Testing input ${test.input}`, () => {
        let output = factorial(test.input);
        if (output != test.output) {
            throw `factorial(${test.input}) expected to be ${test.output} not ${output}`
        }
    })
}

// Testing Solution
for (let test of TESTS) {
    Deno.test(`Testing inputs ${Object.values(test.input).join(',')}`, () => {
        const { subjectCount, resultLetterCount } = test.input;
        let output = Solution(subjectCount, resultLetterCount);
        if (output != test.output) {
            throw `Solution(${Object.values(test.input).join(',')}) expected to be ${test.output} not ${output}`
        }
    })
}