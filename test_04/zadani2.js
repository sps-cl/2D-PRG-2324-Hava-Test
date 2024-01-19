function sortDesc(arr) {
    let counts = new Array(Max(arr)+1).fill(0);
    for(let i = 0; i < arr.length; i++) {
        counts[arr[i].value]++;
    }
    for(let i = 1; i < counts.length; i++) {
        counts[i] += counts[i-1];
    }
    let arr2 = new Array(arr.length);
    for(let i = arr.length-1; i >= 0; i--) {
        counts[arr[i].value]--;
        arr2[counts[arr[i].value]] = arr[i];
    }
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr2[i];
    }
    console.log(arr);
}
function Max(arr) {
    let max = arr[0].value;
    for(let i = 1; i < arr.length; i++) {
        if(max < arr[i].value) max = arr[i].value;
    }
    return max;
}
function test() {
    let data = new Array(333);
    for (let i = 0; i < data.length; i++) {
        data[i] = {value: Math.round(Math.random() * data.length), initIndex: i};
    }
    sortDesc(data);
    for (let i = 1; i < data.length; i++) {
        if (data[i - 1].value < data[i].value || data[i - 1].initIndex === data[i].initIndex) {
            alert("Pole je seřazené špatně.");
            return;
        }
    }
    alert("Vše v pořádku.");
}