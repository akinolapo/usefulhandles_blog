import { graphql } from 'graphql'
import {request, gql} from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_

export const getPosts = async () => {
    const query = gql `
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                id
                name
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
      `
    const results = await request(graphqlAPI, query)   
}