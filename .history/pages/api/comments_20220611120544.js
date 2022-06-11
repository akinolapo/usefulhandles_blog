import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default function comments(req, res){
  const graphQLClient = new GraphQLClient(graphqlAPI)
}