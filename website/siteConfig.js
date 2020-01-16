// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Pubops Help Center', // Title for your website.
  tagline: 'Advertising Automation',
  url: 'https://help.pubops.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  cname: 'help.pubops.io',

  // Used for publishing and more
  projectName: 'pubops-docs',
  organizationName: 'pubops',

  headerLinks: [
    { href: 'https://pubops.io/', label: 'Go to Pubops', external: true },
    { search: true },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo-light.png',
  // footerIcon: 'favicon.ico',
  favicon: 'favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#6f49c4',
    secondaryColor: '#6f49c4',
  },

  markdownPlugins: [
    require('remarkable-admonitions')({ icon: 'svg-inline' })
  ],

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Stride Limited`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  // scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  // onPageNav: 'separate',
  
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  enableUpdateBy: false,

  // Show documentation's last update time.
  enableUpdateTime: false,

  algolia: {
    // apiKey: 'my-api-key',
    // indexName: 'my-index-name',
    // algoliaOptions: {} // Optional, if provided by Algolia
  },
};

module.exports = siteConfig;
