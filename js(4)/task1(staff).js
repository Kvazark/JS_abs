class Person{
    constructor(name){
        this.name = name;
        this.id = name.length;
    }
    print(){
        return `Name: ${this.name} - Personal Number: ${this.id}`;
    }
}
function conversion(staff){
    let persons = [];
    staff.forEach(element => {
        let person = new Person(element);
        persons.push(person);
    });
    
    persons.forEach(e => console.log(e.print()));
    
}
conversion(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);