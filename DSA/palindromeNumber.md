# Palindrome Number

#  Algorithm
 Store the original number in a variable
 Reverse the number using modulo and division
 Compare reversed number with the original
 If equal, return true (palindrome); else false


# Pseudocode
While n > 0 do
    digit ← n mod 10
    reversed ← reversed * 10 + digit
    n ← n ÷ 10

If original == reversed then
    return true
Else
    return false