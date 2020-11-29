import { Student } from "./student.js"
import {studentCollection} from "./studentCollection.js"

const StudentCollection = new studentCollection()
const std1 = new Student('https://i.pinimg.com/564x/6d/97/93/6d97939a57a5f458ee0fe4aa4a435797.jpg', 'th1','nam',20,'ha noi')
const std2 =new Student('https://i.pinimg.com/564x/6d/97/93/6d97939a57a5f458ee0fe4aa4a435797.jpgf','th1','nam',20,'ha noi')
const std3 =new Student('https://i.pinimg.com/564x/6d/97/93/6d97939a57a5f458ee0fe4aa4a435797.jpg','th1','nam',20,'ha noi')
const std4 =new Student('https://i.pinimg.com/564x/6d/97/93/6d97939a57a5f458ee0fe4aa4a435797.jpg','th1','nam',20,'ha noi')

const studentArr = [std1,std2,std3,std4];
studentArr.map((student) => StudentCollection.addStudent(student))
StudentCollection.show()
console.log(studentCollection)
