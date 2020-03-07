
const sqlite3 = require("sqlite3").verbose();

class AsyncSQL {

    /**
     * Function to oepn a new database connection.
     * @param {string} path Path to the database file 
     */
    open(path) {
        return new Promise((resolve, reject) => {
            this.db = new sqlite3.Database(path, err => {
                if(err) return reject(`Error with opening database: ${err}`);

                resolve(true);
            });
        });
    }

    /**
     * Function to run a query on a sqlite database.
     * @param {string} query Query to execute. 
     * @param {[]} params An array containing the parameters to be sanatized and passed to the query
     */
    run(query, params) {
        return new Promise((resolve, reject) => {
            if(params == undefined) params = [];
            this.db.run(query, params, err => {
                if(err) return reject(err);

                resolve(true);
            });
        });
    }

    /**
     * Function to run a query that selects specific sets of data from a sqlite database.
     * @param {string} query Query to execute.
     * @param {[]} params An array containing the parameters to be sanitized and passed to the query.
     */
    get(query, params) {

        return new Promise((resolve, reject) => {
            this.db.get(query, params, (err, row) => {
                if(err) return reject(err);

                resolve(row);
            });
        });

    }

    /**
     * Function to run a query that pulls every row of data from a sqlite database.
     * @param {string} query Query to execute.
     * @param {[]} params An array containing the parameters to be sanitized and passed to the query. 
     */
    all(query, params) {
        return new Promise((resolve, reject) => {

            if(params == undefined) params = [];

            this.db.all(query, params, (err, rows) => {
                if(err) return reject(err);

                resolve(rows);
            });

        });
    }

    close() {
        return new Promise((resolve, reject) =>{
            this.db.close();
            resolve(true);
        });
    }



}

module.exports = AsyncSQL;