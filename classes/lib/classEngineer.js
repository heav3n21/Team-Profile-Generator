const Employee = require('./Employee')


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github)
        this.github = github
    }
    getGitHub() {
        return `https://github.com/${this.github}`
    }
}
const obj = new Engineer('matthew','1234','@gamil.com','heav3n21')
console.log( obj.getGitHub());


module.exports = Engineer