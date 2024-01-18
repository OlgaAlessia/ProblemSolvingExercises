// add whatever parameters you deem necessary


function isSubsequence(subStr, str) {
    if(subStr.length > str.length) return false;

    let idx1 = 0;
    let idx2 = 0;
    while(idx1 < subStr.length && idx2 < str.length){
        if(subStr[idx1] === str[idx2]){
            idx1++;
            idx2++;
        }
        else {
            idx2++;
        }     
    }

    if(idx1 === subStr.length) return true;

    return false;
}
