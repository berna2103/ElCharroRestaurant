
const client = require('contentful').createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  })
  
  const getContentfulItems = (entry) => client.getEntries({content_type: entry, include:2}).then(response => response.items)
  
  const getContentfulSingleItem = (slug, entry) =>
    client
      .getEntries({
        'fields.slug': slug,
        content_type: entry
      })
      .then(response => response.items)
  
  export { getContentfulItems, getContentfulSingleItem }