let people = [
    {
        name: "Michael Smith",
        family: {
            mother: "Emily Smith",
            father: "John Smith",
            sister: "Mona Smith",
            brother: "Danial Smith"
            },
        age: 35
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Hones",
            brother: "Harry Jones"
        },
        age: 18
    }
];
for (let {name: n, family: {father :f}} of people){
    console.log("Name: " + n + ", Father; "+ f);
}
// Name: Michael Smith, Father; John Smith
// Name: Tom Jones, Father; Richard Hones