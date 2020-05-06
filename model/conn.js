const options = {
    host: 'drona.db.elephantsql.com',
    user: 'gmsgwuyr',
    password: 'tqRVvnOXPMjwqpTk5yD6yPuImSs6NfYh',
    database: 'gmsgwuyr'
}

const pgp = require('pg-promise')({
    query: function(e){
        console.log('query: ', e.query);
    }
})

const db = pgp(options);

module.exports = db;