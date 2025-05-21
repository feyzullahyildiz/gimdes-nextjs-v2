import Typesense from 'typesense'

export const typeSenseClient = new Typesense.Client({
  'nodes': [{
    'host': '91.99.100.59', // For Typesense Cloud use xxx.a1.typesense.net
    'port': 80,      // For Typesense Cloud use 443
    'protocol': 'http',   // For Typesense Cloud use https
    path: "/typesense",
  }],
  'apiKey': 'xyzFmR0LqnddtlN8z9NyaU58pbK3d8FAR4',
  'connectionTimeoutSeconds': 2,
  
})
