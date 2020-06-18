import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import { addReadme } from 'storybook-readme'
import pkg from '../package.json'

addDecorator(withKnobs)
addDecorator(addReadme)

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: pkg.name,
      brandUrl: pkg.repository.url
    }),
    panelPosition: 'right'
  }
})

configure(require.context('../src', true, /\.stories\.js$/), module)
