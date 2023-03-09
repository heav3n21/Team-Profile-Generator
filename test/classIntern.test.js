const Intern = require(`../classes/lib/classIntern`)





describe('Intern Methods', () => {
    it('should return the school they attend', () => {
        const obj = new Intern('matthew')

        expect(obj.getRoleIntern()).toEqual("matthew is a intern")
    })

    it('should return the shool they attend',()=>{
        const obj = new Intern('matthew','1234','@gamil.com','UCLA bootcamp')
        
        
        expect(obj.getschool()).toEqual(`matthew attends UCLA bootcamp`)
    })
})