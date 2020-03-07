const sqlite3 = require("async-sqlite3");

const sql = new sqlite3();

async function example() {
    
    try { 
        await sql.open("./data.db");
        console.log("Database opened");
    } catch(err) {
        console.log(err);
    }

    

    try {
        await sql.run("CREATE TABLE IF NOT EXISTS example(exampleID TEXT, exampleText TEXT)");
        console.log("Created table successfully");
    } catch(err) {
        console.log(err);
    }

    // Remove the comment to run this.
    //await insertData();

    try {
        let rows = await sql.all("SELECT * FROM example");
        rows.forEach(row => {
            console.log(row);
        });
    } catch(err) {
        console.log(err);
    }

    try {
        let row = await sql.get("SELECT exampleID, exampleText FROM example WHERE exampleID = ?", [1]);
        console.log(row);
    } catch(err) {
        console.log(err);
    }

    try {
        await sql.run("UPDATE example SET exampleID = ? WHERE exampleID = ?", [30, 2]);
        console.log("Updated an entry in the database");
    } catch(err) {
        console.log(err);
    }

    try {
        await sql.close();
        console.log("Closed database.");
    } catch(err) {
        console.log("Unable to close database.");
    }

    

}

async function insertData() {
    for(let x = 0; x < 30; x++) {
        try {
            await sql.run("INSERT into example(exampleID, exampleText) VALUES(?, ?)", [x, randomString()]);
            console.log("Value inserted");
        } catch(err) {
            console.log(err);
        }
    }
}

function randomString() {
    return Math.random().toString(35).substring(2, 15) + Math.random().toString(35).substring(2, 15);
}



