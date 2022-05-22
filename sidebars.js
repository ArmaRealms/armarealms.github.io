/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  docs: [
    {
      type: 'category',
      label: 'Proteção',
      link: {
        type: 'generated-index',
        title: 'Proteção de Cosntruções',
        description: 'Tudo sobre o sistema de proteção do servidor.',
        slug: '/protecao',
        keywords: ['protecao'],
        image: '/img/logo.png',
      },
      items: ['protecao/basica', 'protecao/permissao', 'protecao/gerenciar', 'protecao/avancada', 'protecao/venda', 'protecao/perda'],
    },
  ],
};

module.exports = sidebars;
