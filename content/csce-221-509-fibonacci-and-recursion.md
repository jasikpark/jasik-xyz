+++
date = "2018-11-11T19:36:54-06:00"
draft = false
isMath = "true"
title = "CSCE 221.509 | Fibonacci and Recursion"
type = "post"

+++

Natural numbers apparently don’t necessarily involve the number zero

```pseudocode
Definition of Natural Numbers
	Base case: n=0
		n=0 is a natural number
	Successive case: n_{i+1} = n_i + 1
		if n_i is a natural number, then n_i + 1 is a natural number.
```

## Fibonacci sequence

There was the rabbit Fibonacci sequence analogy

```pseudocode
F(0) = 1
F(1) = 1
F(2) = F(1) + F(0)
F(3) = F(2) + F(1)
F(4) = F(3) + F(2)
F(n) = F(n-1) + F(n-2), for n > 1
```

```pseudocode
Algorithm Fib(n)
	Input: n //rank of fib. number
	Output: actual fib. number

	if n < 2 then
		return 1;
	end if
	return F(n-1) + Fib(n-2)
```

`Fib(5) = (Fib(4) + Fib(3)) = ((Fib(3) + Fib(2)) + (Fib(2) + Fib(1)))`

Do the analysis to speed it up.

```
T(n)
T(0) = 1
T(1) = 1
T(n-1) + T(n-2)
So T(n) = T(n-1) + T(n-2) + 1
T(n) = 2F(n) - 1
```

Note: `T(n-2) < T(n-1), for n >= 3`

`T(n) < T(n-1) + T(n-1) +1`

`T(n) < 2T(n-1) + 1`

Note: `T(n-1) < 2T(n-2) + 1`

`T(n) < 2^2 T(n-2) + 2 + 1`

Note: `T(n-2) < 2T(n-3) + 1`

`T(n) < 2^3T(n-3) + 2^2 + 2 + 1`

…

\\(T(n) \lt 2^k(n-k) + (2^{k-1} + \dots + 2^2 + 2 + 1)\\)

Side note: how to solve

\\(S(k) = (2^{k-1} + \dots + 2^2 + 2 + 1)\\)

\\(2 \ast S(k) = (2^k + \dots + 2^3 + 2^2 + 2)\\)

\\(2 \ast S(k) - S(k) = 2^k + 2^{k-1} - 2^{k-1} + … + 2^2 - 2^2 + 2 - 2 + 1\\)

So \\(S(k) = 2^k + 1\\)

Therefore

\\(T(n) \lt 2^k \ast T(n-k) + (2^k + 1)\\)

\\(T(n) \lt 2^{n-1} \ast T(1) + (2^{n-1} - 1)\\)

\\(T(n) \lt 2^{n-1} + 2^{n-1} - 1\\)

\\(T(n) \lt 2^n - 1\\)

## Fibonacci 2

1. Start with \\(F(0)\\) and \\(F(1)\\)
2. Always keep the last two value, \\(F(i-1)\\) and \\(F(i-2)\\)
3. Compute until \\(F(i=n)\\)

In this case, \\(T(n) = n\\)

This is called dynamic programming, when we save data that is frequently used.

How can we do better?

## Closed form of \\(F(n)\\)

\\\(F(n) = \frac{(golden\ ratio)^n - (golden\ ratio\ conjugate)^n}{\sqrt{5}}\\\)

\\\(T(n) = 2\*(the\ cost\ of\ the\ power\ function)\\\)

The actual \\(T(n)\\) for the recursive function is \\(O((golden\ ratio)^n)\\)

\\\(a^n = a \ast a \ast a \ast a \ast a \ast \dots \ast a\\\)

Which would be O(n) and worse than the dynamic programming version

\\\(a^n = a^{n/2} \ast a^{n/2}\ \\text{if n is even}\\\)

\\\(a^n = a^{n/2} \ast a^{n/2} \ast a\ \\text{if n is odd}\\\)

Next: Solve the power function analysis
