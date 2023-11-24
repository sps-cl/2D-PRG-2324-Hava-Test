class Home {
    constructor(house_area, land_area, number_of_rooms) {
        this.house_area = house_area;
        this.land_area = land_area;
        this.number_of_rooms = number_of_rooms;
    }
    print_attributes() {
        console.log(this);
    }
}

let houses = new Array(10);
for (let i = 0; i < houses.length; i++) {
    houses[i] = new Home(Math.round(Math.random() * 100), Math.round(Math.random() * 150), Math.round(Math.random() * 10));
}

console.log(houses);
houses.forEach((house) => {
    house.print_attributes();
});