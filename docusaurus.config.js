// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki Armageddon',
  tagline: 'Wiki Armageddon Server',
  url: 'https://wiki.armamc.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ArmageddonMC', // Usually your GitHub org/user name.
  projectName: 'armageddonmc.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
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
      navbar: {
        title: 'Wiki Armageddon',
        logo: {
          alt: 'armamc icon',
          src: 'img/logo.png',
          width: 50,
          height: 50,
        },
        items: [
          {
            href: 'https://loja.armamc.com/',
            label: 'Loja',
            position: 'left',
          },
          {
            href: 'https://discord.gg/yEUhqn8',
            label: 'Discord',
            position: 'left',
          },
          {
            href: 'https://forum.armamc.com/',
            label: 'Fórum',
            position: 'left',
          },
          {
            href: 'https://rgb.armamc.com/',
            label: 'Criador RGB',
            position: 'left',
          },
          {
            to: 'docs/vote',
            label: 'Vote',
            position: 'left',
            target: '_blank',
          },
          {
            to: 'docs/regras',
            label: 'Regras',
            position: 'left',
            target: '_blank',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        apiKey: '02fd6b5998c6f36763798105f37c5259',
        indexName: 'wiki',
        appId: '9T80JXEJKC', // Optional, if you run the DocSearch crawler on your own
        contextualSearch: false,
        algoliaOptions: {} // Optional, if provided by Algolia
      },
    }),
};

module.exports = config;