// add whatever parameters you deem necessary
function countPairs(nums, val) {

    nums.sort((a, b) => a - b);

    let numPairs = 0;

    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === val) {
            numPairs++;
            left++;
            right--;
        } else if (sum > val) {
            right--;
        } else {
            left++;
        }

    }

    return numPairs;
}
