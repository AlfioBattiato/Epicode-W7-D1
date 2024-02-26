class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static confrontoEta(user1, user2) {
    if (user1.age < user2.age) {
      console.log(`${user1.firstName} è più giovane di ${user2.firstName}.`);
    } else if (user1.age > user2.age) {
      console.log(`${user1.firstName} è più anziano di ${user2.firstName}.`);
    } else {
      console.log(`${user1.firstName} ha la stessa età di ${user2.firstName}.`);
    }
  }
}

const user1 = new User("alfio", "battiato", 18, "Africa");
const user2 = new User("marco", "pala", 20, "Nuova America");

//   User.confrontoEta(user1, user2);

/////////////////////////////////////////////////////

const formNode = document.querySelector("form");
const fname=document.getElementById("fname")
const lname=document.getElementById("lname")
const species=document.getElementById("species")
const breed=document.getElementById("breed")

class Animal {
  constructor(nome, proprietario, specie, razza) {
    this.nome = nome;
    this.proprietario = proprietario;
    this.specie = specie;
    this.razza = razza;
  }
}

const animali = [];

formNode.onsubmit = function (e) {
  e.preventDefault();
  const animale = new Animal(fname.value, lname.value, species.value, breed.value);

  animali.push(animale);
  fname.value="";
  lname.value="";
  species.value="";
  breed.value="";

  console.log(animali)
};
