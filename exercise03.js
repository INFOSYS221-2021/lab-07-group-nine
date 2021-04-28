// Example object and print statements

// Create your JavaScript objects
let classRoster = {
   className: "infosys 221",
   students:[
      {
         name: "Bob Ross",
         id: "0123456789",
         username: "xxBob_Rossxx",
         courses: [
            {
            title: "learning stuff",
            category: "infosys",
            categoryNumber: "222",
            shortDescription: "its about learning stuff"
            },
            {
            title: "learning stuff v2",
            category: "infosys",
            categoryNumber: "321",
            shortDescription: "its about learning stuff as well"
            }
         ],
         majors: [BCOM],
         degrees: [BCOM]
      }, 
      {
         name: "SpongeBob Squarepants",
         id: "0123456789",
         username: "xxSpongeBob_Squarepantsxx",
         courses: [
            {
            title: "learning stuff",
            category: "infosys",
            categoryNumber: "222",
            shortDescription: "its about learning stuff"
            },
            {
            title: "learning stuff v2",
            category: "infosys",
            categoryNumber: "321",
            shortDescription: "its about learning stuff as well"
            }
         ],
         majors: [BCOM],
         degrees: [BCOM]
      } 
   ]
} 

// print different properties of your objects
console.log("First name of student: " + classRoster.students[0].name);
for (i in classRoster.students) {
    console.log("username: " + classRoster.students[i].username);
}
