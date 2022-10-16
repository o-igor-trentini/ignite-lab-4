import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

type FontSize = 'sm' | 'md' | 'lg';

export interface HeadingProps {
    children: ReactNode;
    size?: FontSize;
    asChild?: boolean;
    className?: string;
}

export const Heading: FC<HeadingProps> = ({ children, size = 'md', asChild = false, className }) => {
    const Component = asChild ? Slot : 'span';

    return (
        <Component
            className={clsx(
                'text-gray-100 font-bold font-sans',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                },
                className,
            )}
        >
            {children}
        </Component>
    );
};
