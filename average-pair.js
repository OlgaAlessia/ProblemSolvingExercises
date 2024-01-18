// add whatever parameters you deem necessary
function averagePair(nums, avarVal) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const avarCal = (nums[left] + nums[right]) /  2;
        if (avarCal === avarVal) {
            return true;
        } else if (avarCal > avarVal) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}
