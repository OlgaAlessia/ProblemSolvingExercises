// add whatever parameters you deem necessary

function freqCount(str) {
    const freqCount = {};

    for (let c of str) {
        freqCount[c] = (freqCount[c] + 1) || 1;
    }
    return freqCount;
}

function sameFrequency(num1, num2) {
    if(num1.len !== num2.len) return false;

    const num1Freq = freqCount(num1.toString());
    const num2Freq = freqCount(num2.toString());

    for(let num in num1Freq){
        if(num1Freq[num] !== num2Freq[num]) return false;
    }

    return true;
}
