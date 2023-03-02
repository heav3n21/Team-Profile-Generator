
const employee = require('./employeeClass')


class Manager extends employee{
    

    constructor(id,officeNumber,name){
        super(name,id,"email")
        
        this.officeNumber = officeNumber
    }
    getRole(){}
};


const manager = new  Manager('1223',1234,"matthew")
console.log(manager)






class intern extends employee{
    constructor(shcool){
        super() 
this.school = this.school

    }

    getschool(){}
}








class engineer extends employee{
  
    constructor(github){
        super()
        this.github = github

    }
}