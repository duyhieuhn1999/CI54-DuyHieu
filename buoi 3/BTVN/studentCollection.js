import  './cardStudent.js'

export class studentCollection{
    listStudent;
 
    constructor(){
        this.listStudent = [];
        
    }
    addStudent(student){
       this.listStudent.push(student)
       console.log(this.listStudent)
       
    }
    show(){
        document.querySelector(`#container`).innerHTML = this.listStudent.map((student) => student.toHTML())//loi ở day ko co () nhe
    }
}
