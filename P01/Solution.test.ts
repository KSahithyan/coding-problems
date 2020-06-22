import Solution, { factorial } from './Solution.ts';

const TESTS: { input: { n: number, k: number }, output: number }[] = [
    { input: { n: 0, k: 0}, output: 0 },
    { input: { n: 1, k: 0}, output: 0 },
    { input: { n: 0, k: 1}, output: 0 },

    { input: { n: 2, k: 2 }, output: 3 },
    { input: { n: 2, k: 3 }, output: 6 },

    { input: { n: 1, k: 1}, output: 1 },
    { input: { n: 1, k: 2}, output: 2 },
    { input: { n: 1, k: 3}, output: 3 },
    { input: { n: 1, k: 4}, output: 4 },
    
    { input: { n: 2, k: 1 }, output: 1 },
    { input: { n: 2, k: 2}, output: 3 },
    // Original Question
    { input: { n: 9, k: 5}, output: 715 }
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
        const { n, k } = test.input;
        let output = Solution(n, k);
        if (output != test.output) {
            throw `Solution(${Object.values(test.input).join(',')}) expected to be ${test.output} not ${output}`
        }
    })
}