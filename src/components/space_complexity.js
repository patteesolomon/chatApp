//space complexity in basic programs

/*https://www.geeksforgeeks.org/g-fact-86/
Space Complexity: 

The term Space Complexity is misused for Auxiliary Space at many places. 
Following are the correct definitions of Auxiliary Space and Space Complexity. 

Auxiliary Space is the extra space or temporary space used by an algorithm.

The space Complexity of an algorithm is the total space taken by the 
algorithm with respect to the input size. Space complexity includes 
both Auxiliary space and space used by input. 

For example, if we want to compare standard sorting algorithms on the basis of space, 
then Auxiliary Space would be a better criterion than Space Complexity. 
Merge Sort uses O(n) auxiliary space, Insertion sort, 
and Heap Sort use O(1) auxiliary space. The space c
omplexity of all these sorting algorithms is O(n) though. 

Space complexity is a parallel concept to time complexity. 
If we need to create an array of size n, this will require O(n) space. 
If we create a two-dimensional array of size n*n, this will require O(n2) space.

In recursive calls stack space also counts. 

Example : 

function add (int n){
    if (n <= 0){
        return 0;
    }
    return n + add (n-1);
}

Here each call add a level to the stack :

1.  add(4)
2.    -> add(3)
3.      -> add(2)
4.        -> add(1)
5.          -> add(0)

Each of these calls is added to call stack and takes up actual memory.
So it takes O(n) space.
However, just because you have n calls total doesn’t mean it takes O(n) space.

Look at the below function :

addSequence = (n) =>{
    var sum = 0;
    for (let i = 0; i < n; i++){
        sum += pairSum(i, i+1);
    }
    return sum;
}

pairSum = (x, y) => {
    return x + y;
}

There will be roughly O(n) calls to pairSum. However, those 
calls do not exist simultaneously on the call stack,
so you only need O(1) space.
Note: It’s necessary to mention that space complexity 
depends on a variety of things such as the programming language, 
the compiler, or even the machine running the algorithm.
*/

/*** https://btholt.github.io/complete-intro-to-computer-science/spatial-complexity
 * Linear 
Let's say we have an algorithm that for every item in the array,
 it needs to create another array in the process of sorting it. 
 So for an array of length 10, our algorithm will create 10 arrays.
 For an array of 100, it'd create 100 extra arrays 
 (or something close, remember these are broad strokes, not exact.)
  This would be O(n) in terms of its spatial complexity.
   We'll do some sorts that do this.

Logrithmic https://www.expii.com/t/what-are-logarithmic-scales-4432
What about another for every item in the array, 
it needed to create a diminishing amount of extra arrays.
For example: for an array of length 10, it'd create 7 arrays. For an array of 100, 
it'd create 12 arrays. For an array of 1000, it'd created 20 arrays.
 This would be O(log n). https://www.indeed.com/career-advice/career-development/logarithmic-scale
y = logbx <= formula 
more info = > https://www.youtube.com/watch?v=fnhFneOz6n8

Constant
What if we didn't create any extra arrays when we did our algorithm? 
We just used the same space we were given when we first started. 
Or if we created just 10 arrays, no matter how long the array is? 
This would be O(1) since it's constant no matter what. 
Its spatial need don't increase with longer arrays.

Quadratic
Lastly, what if we had an app that calculates the distances between zip / postal codes?

A zip code in the United States is a five digit number that represents a fairly small area of land.
98109 is in the middle of Seattle, Washington while 10001 is in the middle of New York City, NY.

If a user asks what's the distance between 98109 and 10001,
 we'd spit out something like 2,800 miles or 4,500 km.
  Now, let's say for every zip code we add to our system,
  we calculate the distance between every other zip code in our system and store it. 
  If there were only 10 zip codes, sure, that'd be easy,
   but there are nearly 42,000 zip codes in the United States with more being added. 
   The spatial complexity on this would be O(n²) because for every new zip code we add,
    we'd have to add 42,000 new items as well.

Is this a good idea? It depends! A company I used to work at did exactly 
this because calling the API to get this data was really expensive so they 
did all the computational work once to find out and just stored it. 
It was a huge database but that ended up being way cheaper than the API.

I will say O(n²) in spatial complexity is pretty rare and a big red flag.

Okay, sure, but why
As before, this is just a tool to make sure your design fits your needs. One isn't necessarily better than the other. And very frequently you need to make the trade off of computational complexity vs spatial. Some algoriths eat a lot of memory but go fast and there are lots that eat zero memory but go slow. It just depends on what your needs are.

Here's an example: let's say you're writing code that's going to be run a PlayStation 3 and it needs to sort 1000 TV shows according to what show you think the customer is going to want to see. PS3s have a decent processor but very little memory available to apps. In this case, we'd want to trade off in favor of spatial complexity and trade off against computational complexity: the processor can do more work so we can save memory.

Okay, now same problem but we have 1,000,000 videos and a big, beefy server in the cloud to do the work for us. In this case we're not resource constrained by either memory or compute so we can feel free to trade off in favor of computational since we want to respond to the user as soon as we can.
 */

/*https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity
/**
 * 
 * The idea behind big O notation
Big O notation is the language we use for talking about how long an algorithm takes to run. It's how we compare the efficiency of different approaches to a problem.

It's like math except it's an awesome, not-boring kind of math where you get to wave your hands through the details and just focus on what's basically happening.

With big O notation we express the runtime in terms of—brace yourself—how quickly it grows relative to the input, as the input gets arbitrarily large.

Let's break that down:

how quickly the runtime grows—It's hard to pin down the exact runtime of an algorithm. It depends on the speed of the processor, what else the computer is running, etc. So instead of talking about the runtime directly, we use big O notation to talk about how quickly the runtime grows.
relative to the input—If we were measuring our runtime directly, we could express our speed in seconds. Since we're measuring how quickly our runtime grows, we need to express our speed in terms of...something else. With Big O notation, we use the size of the input, which we call "
�
n." So we can say things like the runtime grows "on the order of the size of the input" (
�
(
�
)
O(n)) or "on the order of the square of the size of the input" (
�
(
�
2
)
O(n 
2
 )).
as the input gets arbitrarily large—Our algorithm may have steps that seem expensive when 
�
n is small but are eclipsed eventually by other steps as 
�
n gets huge. For big O analysis, we care most about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as 
�
n gets very large. (If you know what an asymptote is, you might see why "big O analysis" is sometimes called "asymptotic analysis.")
If this seems abstract so far, that's because it is. Let's look at some examples.

Some examples
  function printFirstItem(items) {
  console.log(items[0]);
}

JavaScript
This function runs in 
�
(
1
)
O(1) time (or "constant time") relative to its input. The input array could be 1 item or 1,000 items, but this function would still just require one "step."

  function printAllItems(items) {
  items.forEach(item => {
    console.log(item);
  });
}

JavaScript
This function runs in 
�
(
�
)
O(n) time (or "linear time"), where 
�
n is the number of items in the array. If the array has 10 items, we have to print 10 times. If it has 1,000 items, we have to print 1,000 times.

  function printAllPossibleOrderedPairs(items) {
  items.forEach(firstItem => {
    items.forEach(secondItem => {
      console.log(firstItem, secondItem);
    });
  });
}

JavaScript
Here we're nesting two loops. If our array has 
�
n items, our outer loop runs 
�
n times and our inner loop runs 
�
n times for each iteration of the outer loop, giving us 
�
2
n 
2
  total prints. Thus this function runs in 
�
(
�
2
)
O(n 
2
 ) time (or "quadratic time"). If the array has 10 items, we have to print 100 times. If it has 1,000 items, we have to print 1,000,000 times.

N could be the actual input, or the size of the input
Both of these functions have 
�
(
�
)
O(n) runtime, even though one takes an integer as its input and the other takes an array:

  function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi');
  }
}

function printAllItems(items) {
  items.forEach(item => {
    console.log(item);
  });
}

JavaScript
So sometimes 
�
n is an actual number that's an input to our function, and other times 
�
n is the number of items in an input array (or an input map, or an input object, etc.).

Drop the constants
This is why big O notation rules. When you're calculating the big O complexity of something, you just throw out the constants. So like:

  function printAllItemsTwice(items) {
  items.forEach(item => {
    console.log(item);
  });

  // Once more, with feeling
  items.forEach(item => {
    console.log(item);
  });
}

JavaScript
This is 
�
(
2
�
)
O(2n), which we just call 
�
(
�
)
O(n).

  function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log('hi');
  }
}

JavaScript
This is 
�
(
1
+
�
/
2
+
100
)
O(1+n/2+100), which we just call 
�
(
�
)
O(n).

Why can we get away with this? Remember, for big O notation we're looking at what happens as 
�
n gets arbitrarily large. As 
�
n gets really big, adding 100 or dividing by 2 has a decreasingly significant effect.

Keep up the momentum! Sign up to get a data structures and algorithms practice question sent to you every week.

me@gmail.com
No spam, ever. Easy unsubscribe.

Drop the less significant terms
For example:

  function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');
  numbers.forEach(number => {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => {
      console.log(firstNumber + secondNumber);
    });
  });
}

JavaScript
Here our runtime is 
�
(
�
+
�
2
)
O(n+n 
2
 ), which we just call 
�
(
�
2
)
O(n 
2
 ). Even if it was 
�
(
�
2
/
2
+
100
�
)
O(n 
2
 /2+100n), it would still be 
�
(
�
2
)
O(n 
2
 ).

Similarly:

�
(
�
3
+
50
�
2
+
10000
)
O(n 
3
 +50n 
2
 +10000) is 
�
(
�
3
)
O(n 
3
 )
�
(
(
�
+
30
)
∗
(
�
+
5
)
)
O((n+30)∗(n+5)) is 
�
(
�
2
)
O(n 
2
 )
Again, we can get away with this because the less significant terms quickly become, well, less significant as 
�
n gets big.

We're usually talking about the "worst case"
Often this "worst case" stipulation is implied. But sometimes you can impress your interviewer by saying it explicitly.

Sometimes the worst case runtime is significantly worse than the best case runtime:

  function contains(haystack, needle) {

  // Does the haystack contain the needle?
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}

JavaScript
Here we might have 100 items in our haystack, but the first item might be the needle, in which case we would return in just 1 iteration of our loop.

In general we'd say this is 
�
(
�
)
O(n) runtime and the "worst case" part would be implied. But to be more specific we could say this is worst case 
�
(
�
)
O(n) and best case 
�
(
1
)
O(1) runtime. For some algorithms we can also make rigorous statements about the "average case" runtime.

Space complexity: the final frontier
Sometimes we want to optimize for using less memory instead of (or in addition to) using less time. Talking about memory cost (or "space complexity") is very similar to talking about time cost. We simply look at the total size (relative to the size of the input) of any new variables we're allocating.

This function takes 
�
(
1
)
O(1) space (we use a fixed number of variables):

  function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi');
  }
}

JavaScript
This function takes 
�
(
�
)
O(n) space (the size of hiArray scales with the size of the input):

  function arrayOfHiNTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

JavaScript
Usually when we talk about space complexity, we're talking about additional space, so we don't include space taken up by the inputs. For example, this function takes constant space even though the input has 
�
n items:

  function getLargestItem(items) {
  let largest = -Number.MAX_VALUE;
  items.forEach(item => {
    if (item > largest) {
      largest = item;
    }
  });
  return largest;
}

JavaScript
Sometimes there's a tradeoff between saving time and saving space, so you have to decide which one you're optimizing for.

Big O analysis is awesome except when it's not
You should make a habit of thinking about the time and space complexity of algorithms as you design them. Before long this'll become second nature, allowing you to see optimizations and potential performance issues right away.

Asymptotic analysis is a powerful tool, but wield it wisely.

Big O ignores constants, but sometimes the constants matter. If we have a script that takes 5 hours to run, an optimization that divides the runtime by 5 might not affect big O, but it still saves you 4 hours of waiting.

Beware of premature optimization. Sometimes optimizing time or space negatively impacts readability or coding time. For a young startup it might be more important to write code that's easy to ship quickly or easy to understand later, even if this means it's less time and space efficient than it could be.

But that doesn't mean startups don't care about big O analysis. A great engineer (startup or otherwise) knows how to strike the right balance between runtime, space, implementation time, maintainability, and readability.

You should develop the skill to see time and space optimizations, as well as the wisdom to judge if those optimizations are worthwhile.
 */