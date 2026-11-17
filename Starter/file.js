const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

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






//  Understandig Blocking and Non-Blocking in Node.

// Sync ..
fs.writeFileSync("./blocking.txt", "This is a blocking operation.");


// Async ..
fs.writeFile("./non-blocking.txt", "This is a non-blocking operation.", (err) => {});



// Blocking -- Request

console.log("1");

const the_result = fs.readFileSync("./blocking.txt", "utf-8");
console.log(the_result);

console.log("2");

// Output:
//1
//The Ouput of the file blocking.txt
//2



// Non-Blocking -- Request
// Give Result Through Callback (Asynchronously)
console.log("1");
fs.readFile("./non-blocking.txt", "utf-8", (err, data) => {
    console.log(data);
});

console.log("2");

//output:
//1
//2
//The Output of the file non-blocking.txt


