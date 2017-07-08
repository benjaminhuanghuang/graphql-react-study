const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true  // for dev environment
}));
app.listen(4000, () => {

})