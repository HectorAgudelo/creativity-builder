const removeDuplicates = (nums: number[]) => {
nums.sort((a,b)=>a-b);

  let write = 0;
  for (let read = 1; read < nums.length; read++) {
    if(nums[read] !== nums[write]){
        write++;
        nums[write] = nums[read];
            
    }
   
  }
  nums.length = write + 1;
  return nums;
};
const nums = [0, 0, 1, 1, 1, 4, 2, 3, 3, 4, 7, 0, 6, 300000000];

console.log(removeDuplicates(nums));
