import { StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from '.';
import { rest } from 'msw';

export default {
    title: 'Components/SignIn',
    component: SignIn,
    parameters: {
        msw: {
            handlers: [rest.post('/sessions', (_, res, ctx) => res(ctx.json({ message: 'Login realizado!' })))],
        },
    },
};

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'igortrentini.2004@gmail.com');
        userEvent.type(canvas.getByPlaceholderText('********'), 'Abc#123');

        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => expect(canvas.getByText('Login realizado!')).toBeInTheDocument());
    },
};
