const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

const schema = require('./schema/schema');

// route
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true  // for dev environment
}));


app.listen(4000, () => {

})