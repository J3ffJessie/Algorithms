Week 8 - Comp Sci with Javascript

------------------

Recursion

The big scary word

------------------

Well Explained Video:

https://www.youtube.com/watch?v=KEEKn7Me-ms&t=103s

Description of "Recursion"?

Let’s say we have a very complex problem
This problem requires a long history, or trail
We can’t solve this problem unless we know this history
So we have to keep going through history
But history itself doesn’t know the answer
Until it does.
Then, the "solvable" history tells it’s next neighbor it’s answer
And then it keeps going back up.
Think of it like dominoes going one way to get the answer.
Once the answer is found, the dominoes fall back the way they came.
Pros:

It’s elegant.
Some (few) problems really need them.
Depending on the situation, it may be the best solution
Cons:

A ton of overhead (constantly looking back at itself)
Could become an unappealing Big O
Code can be very implicit, even hard to understand
Tough to debug
Many problems have closed-form solutions!
Good news:

Not very common at all in front end development
But of course, a good skill (and problem-solving mindset) to have
-------------

Recursion in Code is just a function calling itself over and over again.

The calling function waits for its own return value when it calls itself.

-------------

The form Recursion takes:

Recursion looks back and back until it has an answer
The answer is called the BASE CASE.
BASE CASE is a simple conditional that returns a real value.
If the base case is not found, we move to the...
RECURSIVE CASE
The RECURSIVE CASE is the part that looks at it’s own history.
The RECURSIVE CASE will be called most of the time.
The RECURSIVE CASE will sit and wait for a return value
The call stack is very important in all of this
IMPORTANT

The RECURSIVE CASE MUST NOT CALL THE EXACT THING AS ITSELF
The argument given in the recursive case MUST be altered in some way, heading towards the base case.
-------------

Assignment:

We want to know the sum of the first N integers. ie: n=5, then 5+4+3+2+1 = 15
First, find the closed form solution of this, and code a function.
Then, write the recursive function of this.
Think about the factorial method we went over.
Bonus:

If you truly want a challenge, code the fibonacci sequence (recursively).
There are tons of recursion challenges online - take a crack at them.

```
function basicRecursion(max, current) {
  // BaseCase
  if (current > max) return
  console.log(current)
  basicRecursion(max, current)
}
​
basicRecursion(5,1)
```
​
## Notes
​
- In this function we are saying give me all the numbers up to and including the max number passed to the function
- Call the function with 5 being the max value and 1 being the current value
- The first line of the function is your base case
- The base case is when you stop recursing (if you don't have a base case then you will get stack overflow)
- IMPORTANT: Always have a base case when using recursion
- In this example our base case is when the current value is greater than the max value. So when our current value is greater than 5 then stop recursing
- After checking the base case we log the current value to the console (this would first log 1 then after the function calls itself and adds 1 to the current value, then would log 2 and then 3 and so on to 5(the max value))
- After logging the current value to the console the function calls itself and adds one to the current value bringing us towards the base case so that we eventually finish recursion (So here basicRecursion calls itself)
- When basicRecursion calls itself we pass the max because we want to keep passing the max down (max won't change because thats the number we won't to go to)
​
> The function call would go as follows
​
1. 5,1
2. 5,2
3. 5,3
4. 5,4
5. 5,5
6. 5,6 will try to call with current value of 6 and this is where the base case comes into play
