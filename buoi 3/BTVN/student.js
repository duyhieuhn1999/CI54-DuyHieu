
export class Student{
    Class;
    name;
    age;
    address;
    img;
    constructor(img,Class,name,age,address){
        this.Class = Class
        this.name = name
        this.age = age 
        this.address = address
        this.img = img 

    }

    toHTML(){
        return `
        <card-container imgSrc = "${this.img}" name = "${this.name}" age = "${this.age}" address = "${this.address}"</card-container>
        `
    }
    
}