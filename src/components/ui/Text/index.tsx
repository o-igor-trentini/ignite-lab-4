import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

type FontSize = 'sm' | 'md' | 'lg';

export interface TextProps {
    children: ReactNode;
    size?: FontSize;
    asChild?: boolean;
    className?: string;
}

export const Text: FC<TextProps> = ({ children, size = 'md', asChild = false, className }) => {
    const Component = asChild ? Slot : 'span';

    return (
        <Component
            className={clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                },
                className,
            )}
        >
            {children}
        </Component>
    );
};
