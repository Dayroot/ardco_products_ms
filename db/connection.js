const db = require('mongoose');
db.promise = global.Promise;

async function connectionDB(MONGO_URI){
    await db.connect( MONGO_URI, { useNewUrlParser: true } )
    .then(() => {
        console.log('[db connection] Database connected');
    })
    .catch( error =>{
        console.error('[db connection] Connection failed', error.message);
    });
}

module.exports = { connectionDB };