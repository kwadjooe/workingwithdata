myObj = { "People": [
    {
        "id": 1,
        "FirstName": "Joe",
        "LastName": "Ed.",
        "Email": "krystophee@aol.com",
        "Active": true
    },
    {
        "id": 2,
        "FirstName": "Joseph",
        "LastName": "Klugh",
        "Email": "jklugh@aol.com",
        "Active": false
    },
    {
        "id": 3,
        "FirstName": "Rachel",
        "LastName": "Graham",
        "Email": "rgraham@gmail.com",
        "Active": false
    },
    {
        "id": 4,
        "FirstName": "Henry",
        "LastName": "Ford",
        "Email": "henryford@yahoo.com",
        "Active": true
    }
]}

console.log(myObj.People[0]);
console.log(myObj.People[0].LastName);
console.log(typeof myObj.People[0].LastName);
console.log(typeof myObj.People[0].id);
console.log(typeof myObj.People[0].Active);

