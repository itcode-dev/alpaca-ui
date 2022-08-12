import AlpacaProvider from '../src/atom/AlpacaProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <AlpacaProvider value='light'>
      <Story />
    </AlpacaProvider>
  )
]