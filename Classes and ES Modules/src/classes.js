class Human {
    constructor() {
      document.write('Human Constructor');
      console.log('Human Constructor');
  
      this.name = '';
      this.job = '';
      this.languages = 'Arabic, English';
    }
  
    getAge() {
      return 28;
    }                      
  }
  export default class Person extends Human {
    constructor() {
      super();
      document.write('Person Constructor');
      console.log('Person Constructor');
  
      this.name = 'John Doe';
      this.job = 'Sofware Engineer';
    }
  
    getJob() {
      return this.job;
    }
  
    get getName() {
      return this.name;
    }
  
    set setName(personName) {
      this.name = personName;
    }
  
    static getHeight() {
      return 173;
    }
  
    static getWeight() {
      return 83;
    }
  }