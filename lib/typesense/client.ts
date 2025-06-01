import Typesense from "typesense";

export const typeSenseClient = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST!, // For Typesense Cloud use xxx.a1.typesense.net
      port: Number(process.env.TYPESENSE_PORT!), // For Typesense Cloud use 443
      protocol: process.env.TYPESENSE_PROTOCOL || "http", // For Typesense Cloud use https
      path: process.env.TYPESENSE_PATH || "/typesense",
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY!,
  connectionTimeoutSeconds: 2,
});
