module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Joe Tower', // Navigation and Site Title
  titleAlt: 'Joe Tower', // Title for JSONLD
  description: 'Designer, frontend engineer, photographer, traveller.',
  url: 'https://joetower.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://joetower.netlify.com/', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'GatsbyTut', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Joe Tower', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@joeydollaz', // Twitter Username
};
