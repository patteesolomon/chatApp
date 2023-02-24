//resources
/**
 * https://www.youtube.com/watch?v=8mBxpDWEKNw
 */

 // NOW for SPACE COMPLEXITY
// What is it? 
// 
// this is how we calculate it:
/**
 * sum(let x)
 * {
 *  y = 1 + 2;
 *  for(i = 0; i < x; i++)
 * {
 *  someother();
 *  let z = 9;
 *  y++;
 * }
 * return y;
 * }
 * 
 * A + B + C + n(D)
 * Ksub1        Ksub2
 * 
 * Ksub1 + Ksub2
 * 
 * as ksub2 gets bigger we forget Ksub1
 * meaning we have O(n)
 * 
 * 
 */