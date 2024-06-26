console.log("=============================================");
console.log("Ejercicio 5");
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

for (let i = 0; i < people.length; i++) {
    if (people[i] === "Dani") {
        let spliced = people.splice(i, 1);
        console.log("Elemento eliminado: " + spliced);
        console.log("Elementos restantes: " + people);
    }
}
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Juan") {
        let spliced = people.splice(i, 1);
        console.log("Elemento eliminado: " + spliced);
        console.log("Elementos restantes: " + people);
    }
}
for (let i = 0; i < people.length; i++) {
    if (people[i] === "Luis") {
        let spliced = people.splice(i, 1);
    }
}

people.unshift("Luis");
console.log("Agregar Luis al principio: " + people);
people.push("Emma");
console.log("Agregar mi nombre al final: " + people);
console.log("Loop Iteración");
for (let i = 0; i < people.length; i++) {
    
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    };
};

console.log("Ubicación de Maria: " + people.indexOf("Maria"));

console.log(people);

