const Engineer = require(`../classes/lib/classEngineer`)





describe('Engineer Methods', () => {
    it('should return the the role is a manager', () => {
        const obj = new Engineer('matthew')

        expect(obj.name).toEqual("matthew")
    })

    it('should return the github of the engineer',()=>{
        const obj = new Engineer('matthew','1234','@gamil.com','heav3n21')
        
        
        expect(obj.getGitHub()).toEqual(`https://github.com/heav3n21`)
    })
})