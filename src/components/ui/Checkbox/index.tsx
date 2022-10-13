import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { FC } from 'react';

export const Checkbox: FC = () => {
    return (
        <RadixCheckbox.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
            <RadixCheckbox.Indicator asChild>
                <Check width="bold" className="w-5 h-5 text-cyan-500" />
            </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
    );
};
