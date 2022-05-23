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
        },
        items: [
          {
            type: 'html',
            position: 'left',
            className: 'button button--outline button--info',
            value: '<a href="https://discord.gg/yEUhqn8"><button>Discord</button></a>',
          },
          {
            type: 'html',
            position: 'left',
            className: 'button button--outline button--info',
            value: '<a href="https://forum.armamc.com/"><button>Fórum</button></a>',
          },
          {
            type: 'html',
            position: 'left',
            className: 'button button--outline button--info',
            value: '<a href="https://rgb.armamc.com/"><button>Criador RGB</button></a>',
          },
          {
            type: 'html',
            position: 'left',
            className: 'button button--outline button--info',
            value: '<a href="https://wiki.armamc.com/vote"><button>Vote</button></a>',
          },
          {
            type: 'html',
            position: 'left',
            className: 'button button--outline button--info',
            value: '<a href="https://wiki.armamc.com/regras"><button>Regras</button></a>',
          },
          {
            type: 'html',
            position: 'left',
            className: 'button button--outline button--info',
            value: '<a href="https://wiki.armamc.com/formulario"><button>Seja Ajudante!</button></a>',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
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