module.exports = {
  context: {
    faker: 'faker',
  },
  sections: [
    {
      name: 'Tokens',
      sections: [
        {
          content: './pubsweet/packages/ui/docs/colors.md',
          name: 'Colors',
        },
        {
          content: './pubsweet/packages/ui/docs/fonts.md',
          name: 'Fonts',
        },
      ],
    },
    {
      name: 'Atoms',
      components: './pubsweet/packages/ui/src/atoms/*.js',
    },
    {
      name: 'Molecules',
      components: './pubsweet/packages/ui/src/molecules/*.js',
    },
    {
      name: 'PREreview-components/**/**/*.{jsx,js}',
      components: '../components/**/**/*.{jsx,js}',
    },
    {
      name: 'Core-components',
      components:
        './pubsweet/packages/components/!(xpub-*|model-*)/**/*.{jsx,js}',
    },
    {
      name: 'Xpub-components',
      components: './pubsweet/packages/components/xpub-*/**/*.{jsx,js}',
    },
  ],
  ignore: [
    '**/components/Manage/**',
    '**/components/**/*.config.js',
    '**/components/*-server/**',
    '**/components/MediumDraft/CustomImageSideButton.jsx',
    '**/node_modules/**',
    '**/*.test.{js,jsx}',
  ],
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    StyleGuideRenderer: './components/StyleGuideRenderer',
    Wrapper: '/src/components/Wrapper',
  },
  title: 'PubSweet Styleguide',
  compilerConfig: {
    transforms: { dangerousTaggedTemplateString: true },
  },
  pagePerSection: true,
}
