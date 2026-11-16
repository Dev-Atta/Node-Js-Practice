const fs = require("fs");

// Syncronous file creation
// fs.writeFileSync("./read.txt", "This is a file created by Node.js");

// //Asynchronous file creation
// fs.writeFile("./write.txt", "This is a file created by Node.js asynchronously", (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//     }
// });



// .readfile is Use to get the content of the file and it is Asynchronous function
// Utf is Encoding and We are using it to read the file in a human-readable format

const result = fs.readFileSync("./contact.txt", "utf-8");


console.log(result); // This will log the file content since readFileSync is synchronous


fs.readFileSync("./contact.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});


fs.appendFileSync("./contact.txt", "\nThis is an appended line.");


console.log(fs.statSync("./contact.txt" ));
// Giving Details of file (Stats)


