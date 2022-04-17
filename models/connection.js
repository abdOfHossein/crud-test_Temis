const mongoose = require('mongoose');

module.exports = (async function connectionMongoDb() {

    try {
        const connect = mongoose.connect('mongodb://localhost:27017/crudTemis');
        console.log(`server connected to mongodb`);
        return;

    } catch (err) {

        console.log(`can't connect to mongodb err:${err}`);
        return;
    }

})();