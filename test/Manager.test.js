const { objectPattern } = require('@babel/types');
const Manager = require('../classes/lib/classManager');


describe('Manager Methods', () => {
    it('should return the the role is a manager', () => {
        const obj = new Manager()

        expect('name' in obj).toEqual(true)
    })

    it('should return this {name} is a manager',()=>{
       obj = new Manager()
       obj = obj.getRole('matthew')

        expect(obj).toEqual(`matthew is a manager`)
    })
})