// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn React Quick',
  tagline: 'Master React.js in No Time',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://colinfran.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/learn-react-quick',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './docs', //This should be the path to your docs folder
          routeBasePath: 'course',  //This should be the word that you want to set
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Learn React Quick',
        logo: {
          alt: 'Learn React Quick Logo',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Course',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
          target: '_self',
          width: 75,
          height: 75,
        },
        copyright: "<div>Author: <a class='footer__link-item' href='https://colinfran.com/?utm_source=LearnReactQuick-Website&utm_medium=LearnReactQuick-Website-footer&utm_campaign=LearnReactQuick-Website'>Colin Franceschini</a></div>",
        links: [
          {
            label: 'Home',
            to: '/',
          },
          {
            label: 'Course',
            to: '/course/intro',
          },
          {
            label: 'GitHub',
            to: 'https://github.com/colinfran/learn-react-quick/',
          }

        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
