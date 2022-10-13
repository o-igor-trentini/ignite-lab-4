import { Meta, StoryObj } from '@storybook/react';
import { ButtonProps, Button } from '.';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create Account',
    },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
