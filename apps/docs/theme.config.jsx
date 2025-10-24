export default {
  logo: <span style={{ fontWeight: 'bold' }}>🐱 Kitty-UI</span>,
  project: {
    link: 'https://github.com/kitty-ui/kitty-ui',
  },
  docsRepositoryBase: 'https://github.com/kitty-ui/kitty-ui/tree/main/apps/docs',
  footer: {
    text: `© ${new Date().getFullYear()} Kitty-UI. All rights reserved.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Kitty-UI'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Kitty-UI: Adorable cat-themed React components" />
      <meta name="og:title" content="Kitty-UI: Adorable cat-themed React components" />
    </>
  ),
}