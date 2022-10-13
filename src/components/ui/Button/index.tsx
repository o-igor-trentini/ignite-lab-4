import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, asChild = false }) => {
    const Component = asChild ? Slot : 'button';

    return (
        <Component
            className={clsx(
                'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
                {},
            )}
        >
            {children}
        </Component>
    );
};
