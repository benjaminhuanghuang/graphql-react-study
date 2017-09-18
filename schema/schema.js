const graphql = require('graphql');
const axios = require('axios');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: GraphQLString
        },
        firstName: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { // query arguments
                id: {
                    type: GraphQLString
                }
            },
            resolve(parentValue, args) {
                // resolve function will fetch data from database
                let prm = axios.get(`http://localhost:3000/users/${args.id}`)
                .then(res => res.data);
                return prm;
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
})