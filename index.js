//creo la mia classe

class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    static confrontoEta(user1, user2) {
      switch (true) {
        case user1.age < user2.age:
          console.log(`${user1.firstName} è più giovane di ${user2.firstName}.`);
          break;
        case user1.age > user2.age:
          console.log(`${user1.firstName} è più anziano di ${user2.firstName}.`);
          break;
        default:
          console.log(`${user1.firstName} ha la stessa età di ${user2.firstName}.`);
          break;
      }
    }
  }
  
  const user1 = new User("alfio", "battiato", 18, "Africa");
  const user2 = new User("marco", "pala", 20, "Nuova America");
  const user3 = new User("giovanni", "capitan", 30, "Nuova America");
  
  User.confrontoEta(user3, user1);
