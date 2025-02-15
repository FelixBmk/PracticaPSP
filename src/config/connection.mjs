import {createClient} from "@libsql/client"


export const conn = createClient({
    url: "file:local.db",
    syncUrl: process.env.DB_URL,
    authToken: process.env.API_TOKEN
});