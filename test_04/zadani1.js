function sortDesc(array) {

}

function test() {
    let data = new Array(100000);
    for (let i = 0; i < data.length; i++) {
        data[i] = Math.round(Math.random() * data.length);
    }
    let time = performance.now();
    sortDesc(data);
    time = performance.now() - time;
    for (let i = 1; i < data.length; i++) {
        if (data[i - 1] < data[i]) {
            alert("Pole je seřazené špatně.");
            return;
        }
    }
    if (time > 1000) {
        alert("Algoritmus řazení je příliš pomalý. Čas seřazení: " + time + "ms");
    } else {
        alert("Vše v pořádku. Čas seřazení: " + time + "ms");
    }
}