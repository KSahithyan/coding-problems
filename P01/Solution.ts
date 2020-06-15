export function factorial(n: number): number {
    if (n < 0) throw `${n} expected to be a non negative number`
    return n == 0 ? 1 : n * factorial(n - 1);
}

export default function (subjectCount: number, resultLetterCount: number): number {
    // if subjectCount or resultLetterCount == 0 then there are 0 results.
    if ((subjectCount && resultLetterCount) == 0) return 0;
    // if only 1 subject, there are possibility for every resultLetter
    if (subjectCount == 1) return resultLetterCount;

    // I found this equation by doing calculations on my exercise book. I am looking for a much readable solution.
    return (factorial((subjectCount + resultLetterCount - 1)) / (factorial(subjectCount) * factorial(resultLetterCount - 1)));
}