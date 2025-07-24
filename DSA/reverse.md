### Problem
Given an integer n, reverse its digits...


### Algorithm
 Initialize `reversed = 0`
 Repeat while `n > 0`:
    `digit = n % 10`
    `reversed = reversed * 10 + digit`
    `n = n / 10`
 Return `reversed`

### Pseudocode
Function reverseNumber(n)
reversed ← 0
While n > 0 do
digit ← n mod 10
reversed ← reversed * 10 + digit
n ← n ÷ 10
End While
Return reversed
