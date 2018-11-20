var algunArray = [9, 2, 5];

// JAVASCRIPT
for (var i = 0; i < algunArray.length; i++) {
    var item = algunArray[i];
    console.log('JAVASCRIPT item 1: ', item);
}

// ECMASCRIPT 6
for (var item of algunArray) {
    console.log('ECMASCRIPT item 2: ', item);
}