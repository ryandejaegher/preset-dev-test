import { html } from 'lit'

import './@@componentClass'

export default {
  title: 'Components/@@componentClass',
  component: '@@componentTag',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
}

export const Default = {
  name: '@@componentClass',
  args: {
    email: 'laura.aboyan@temple.edu',
    officeLocation: 'Alter Hall 360a',
    directPhone: '215-204-1080',
    details: true,
  },
  render: (args) => html`
    <@@componentTag></@@componentTag>
  `,
}
