import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootProps } from '.';

export default {
  title: 'Components/Input',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Type your e-mail address' />
    ]
  },
  argTypes: {
  }
} as Meta<TextInputRootProps>;


export const Default: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder='Type your e-mail address' />
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    }
  }
}

export const WithIcon: StoryObj<TextInputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    }
  }
}