import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';
import { Text } from '../Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    decorators: [
        (story) => (
            <div className="flex items-center gap-2">
                {story()}

                <Text size="sm">Lembrar-me de mim por 30 dias</Text>
            </div>
        ),
    ],
} as Meta;

export const Default: StoryObj = {};
