# Coding Problems


This repository holds the Problems (whicha are hard for me) and Solutions in TypeScript.

**<span style="color: #F32013;">CAUTION</span> I will be using [Deno](https://www.deno.land).**

## Folder Structure

```bash
|-- P{problem_no}
    |-- Solution.ts
    |-- Solution.test.ts
|-- P{problem_no}
    |-- Solution.ts
    |-- Solution.test.ts
```

## Problems

|Problem No|Problem Description|
|:--------:|-------------------|
|1| A group of students attempts an exam (on **subjectCount=9 subjects**). For every subject, the score will be an English letter (one of the following, **resultLetters=[A, B, C, S, W]**, resultLetterCount=**resultLetters.length**). So the result will be a list of every subject's score (for example, A, A, B, C, W, S, A, B, A). But as it is hard to remember, the result will get shorten up like "4A2B1C1S1W" and decided as the final result. Write a function to find out how many different results are available for a specific ***subjectCount*** and ***resultLetterCount***.|