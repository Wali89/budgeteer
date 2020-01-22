var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    allPersons(last: Int): [Person!]!
  }

  type Mutation {
    createPerson(name: String!, age: Int!): Person!
  }

  type Subscription {
    newPerson: Person!
  }

  type Person {
    name: String!
    age: Int!
    posts: [Post!]!
  }

  type Post {
    title: String!
    author: Person!
  }
`);



// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ bye }', root).then((response) => {
  console.log(response);
});