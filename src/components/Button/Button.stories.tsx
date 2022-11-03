import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adip',
  },
  argTypes: {
  }
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <span>Button</span>
    )
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    }
  }
}