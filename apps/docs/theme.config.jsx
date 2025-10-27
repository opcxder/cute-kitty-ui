export default {
  logo: <span style={{ fontWeight: 'bold' }}>🐱 Cute-Kitty-UI</span>,
  project: {
    link: 'https://github.com/opcxder/cute-kitty-ui',
  },
  docsRepositoryBase: 'https://github.com/opcxder/cute-kitty-ui/tree/main/apps/docs',
  footer: {
    text: `© ${new Date().getFullYear()} Cute-Kitty-UI. All rights reserved.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Cute-Kitty-UI'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Cute-Kitty-UI: Adorable cat-themed React components" />
      <meta name="og:title" content="Cute-Kitty-UI: Adorable cat-themed React components" />
    </>
  ),
}