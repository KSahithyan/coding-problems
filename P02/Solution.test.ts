import { factorizePolynomial } from "./Solution.ts";
import { Test } from "./../TEST.ts";

const TESTS: Test[] = [
    { input: 'x{2}-2x−8', output: '(x-4)(x-2)' },
    { input: 'x{2}-10x+21', output: '(x-7)(x-3)' }
]

for (let test of TESTS) {
    Deno.test(`Testing for ${test.input}`, () => {
        let output = factorizePolynomial(test.input);
        if (output != test.output) {
            throw `Solution(${test.input}) expected to be ${test.output} not ${output}`;
        }
    })
}