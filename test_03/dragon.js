class Dragon extends Enemy{
    constructor(name) {
        super(name);
    }
    Attack() {
        return super.Attack() + "with fire";
    }
}