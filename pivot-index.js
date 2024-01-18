// add whatever parameters you deem necessary
function pivotIndex(nums) {

    let rightSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        
        leftSum += nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        rightSum -= nums[i];
    }

    return -1;
}
