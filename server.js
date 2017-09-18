const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

const schema = require('./schema/schema');

// route
app.use('/graphql', expressGraphQL({
    schema : schema,
    graphiql: true  // If you want to show GraphiQL in the browser, set graphiql: true
}));


app.listen(4000, () => {

})