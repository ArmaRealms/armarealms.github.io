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
    localeConfigs: {
      en: {
        label: 'Português do Brasil',
        direction: 'ltr',
        htmlLang: 'pt-BR',
        calendar: 'gregory',
      }
    }
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
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: '5e7a6f28e2d32983fbe2900e1ead4239',
        indexName: 'wiki',
        appId: '9T80JXEJKC', // Optional, if you run the DocSearch crawler on your own
        algoliaOptions: {} // Optional, if provided by Algolia
      },
    }),
};

module.exports = config;
