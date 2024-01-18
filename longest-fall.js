// add whatever parameters you deem necessary
function longestFall(nums) {

    if (nums.length <= 1) return nums.length;

    let maxNumDesc = 1; 
    let numDesc = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        
        if(nums[i] > nums[i+1]){
            numDesc++;
        }
        else{
            if(maxNumDesc < numDesc) maxNumDesc = numDesc;
            numDesc=1;
        }
    }

    return Math.max(maxNumDesc, numDesc);
}
