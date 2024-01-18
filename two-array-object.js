// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {

    const arrObject = {};
    
    for(let i= 0; i < keys.length; i++){
        arrObject[keys[i]] = values[i] || null;
    }

    return arrObject;
}
