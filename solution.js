// Given a list of numbers nums and a number k, return whether any two numbers from the list add up to k. 
// You may not use the same element twice.
// Note: Numbers can be negative or 0.

// Constraints
// n ≤ 100,000 where n is the length of nums

class Solution {
  solve(nums, k) {
      let hashMap = {}
      
      for (let element of nums) {
          if (hashMap[element]) { 
              return true 
          } else { 
              hashMap[k - element] = true 
          }
      }
      return false
  }
}
