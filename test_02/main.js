class Vector3{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(vector3){
        return new Vector3(this.x + vector3.x, this.y + vector3.y, this.z + vector3.z);
    }
}

let arr_of_vectors = new Array(100);
for(let i = 0; i < arr_of_vectors.length; i++){
    arr_of_vectors[i] = new Vector3(i+1, i+1, i+1);
}
let vector_sum = arr_of_vectors[0];
for(let i = 1; i < arr_of_vectors.length; i++){
    vector_sum = vector_sum.add(arr_of_vectors[i]);
}
console.log(vector_sum);