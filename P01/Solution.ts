export function factorial(n: number): number {
    if (n < 0) throw `${n} expected to be a non negative number`
    return n == 0 ? 1 : n * factorial(n - 1);
}

export default function (n: number, k: number): number {
    // if n or k == 0 then there are 0 results.
    if ((n && k) == 0) return 0;
    // if n == 1, there are only k possibilities.
    if (n == 1) return k;

    // I found this equation by doing calculations on my exercise book. I am looking for a much readable solution.
    return (factorial((n + k - 1)) / (factorial(n) * factorial(k - 1)));
}