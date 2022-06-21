import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4o730ld0wum01xi19hmek53/master",
    cache: new InMemoryCache()
})