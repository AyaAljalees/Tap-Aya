function findMissingNumber(nums) {
    const n = nums.length;
    const total = (n * (n + 1)) / 2; 
    const sumOfNums = nums.reduce((a, b) => a + b, 0); 

    return total - sumOfNums;
}
