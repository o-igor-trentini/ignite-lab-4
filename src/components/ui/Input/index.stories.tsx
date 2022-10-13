import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { Input, InputRootProps } from '.';

export default {
    title: 'Components/Input',
    component: Input.Root,
    args: {
        children: [
            <Input.Icon key={1}>
                <Envelope size={24} />
            </Input.Icon>,
            <Input.Input key={2} placeholder="Type your e-mail address" type="email" />,
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {};

export const WithoutIcon: StoryObj<InputRootProps> = {
    args: {
        children: <Input.Input key={2} placeholder="Type your e-mail address" type="email" />,
    },
};
