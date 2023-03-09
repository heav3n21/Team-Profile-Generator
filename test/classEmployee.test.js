const Employee = require(`../classes/lib/Employee`)





describe('Employee Methods', () => {
    it('should return the name of the employee', () => {
        const obj = new Employee('matthew')

        expect(obj.getName()).toEqual("his name is matthew")
    })

    it('should return the email of the employee',()=>{

        const obj = new Employee('matthew','1234','@gmail.com','heav3n21')
        
        
        expect(obj.getemail()).toEqual(`his email is @gmail.com`)
    })
    it('should return the email of the employee',()=>{
        
        const obj = new Employee('matthew','1234','@gmail.com','heav3n21')
        
        
        expect(obj.getRole()).toEqual(`Employee`)
    })
})