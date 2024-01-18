// add whatever parameters you deem necessary
function separatePositive(nums) {

    start = 0;
    end = nums.length - 1;

    while(start < end) {

        if(nums[start] > 0){
            start++; 
        }
        else { //nums[start] < 0
            let temp = nums[end];
            nums[end] = nums[start];
            nums[start] = temp;
            end--; 
        }
    }
    
    return nums;
}
