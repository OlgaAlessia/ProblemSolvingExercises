function freqCount(str) {
    const freqCount = {};

    for (let char of str) {
        freqCount[char] = (freqCount[char] + 1) || 1;
    }
    return freqCount;
}


// add whatever parameters you deem necessary
function constructNote(message, letters) {

    if (message.length > letters) return false;

    const messageChar = freqCount(message);
    const lettersChar = freqCount(letters);

    for (let letter in messageChar) {
        if (messageChar[letter] > lettersChar[letter]) return false;
    }
    return true;
}
