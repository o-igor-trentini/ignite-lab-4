import { Slot } from '@radix-ui/react-slot';
import { FC, InputHTMLAttributes, ReactNode } from 'react';

export interface InputRootProps {
    children: ReactNode;
}

const InputRoot: FC<InputRootProps> = ({ children }) => {
    return (
        <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
            {children}
        </div>
    );
};

export type InputDefaultProps = InputHTMLAttributes<HTMLInputElement>;

const InputDefault: FC<InputDefaultProps> = (props) => {
    return (
        <input
            {...props}
            className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
        />
    );
};

export interface InputIconProps {
    children: ReactNode;
}

const InputIcon: FC<InputIconProps> = ({ children }) => {
    return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

export const Input = {
    Root: InputRoot,
    Input: InputDefault,
    Icon: InputIcon,
};
