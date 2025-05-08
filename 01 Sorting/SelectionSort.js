class Solution {
  selectionSort(nums) {
      let n = nums.length;
      for(let i = 0; i < n-1; i++){
          let min = nums[i];
          let minIndex = i;
          for(let j = i; j < n; j++){
              if(min > nums[j]){
                  min = nums[j];
                  minIndex = j;
              }
          }
          if(minIndex != i){
              [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
          }
      }
      return nums;
  }
}