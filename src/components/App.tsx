import { Envelope, Lock } from 'phosphor-react';
import { FC } from 'react';
import { Logo } from '../layout/Logo';
import '../styles/main.css';
import { Checkbox } from './ui/Checkbox';
import { Heading } from './ui/Heading';
import { Input } from './ui/Input';
import { Text } from './ui/Text';

export const App: FC = () => {
    return (
        <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
            <header className="flex flex-col items-center">
                <Logo />

                <Heading size="lg" className="mt-4">
                    Ignite Lab
                </Heading>

                <Text size="lg" className="text-gray-400 mt-1">
                    Faça login comece a usar!
                </Text>
            </header>

            <form className="flex flex-col items-stretch w-full max-w-sm gap-4">
                <label htmlFor="email" className="flex flex-col gap-3">
                    <Text className="font-semibold">Endereço de e-mail</Text>
                    <Input.Root>
                        <Input.Icon>
                            <Envelope />
                        </Input.Icon>

                        <Input.Input id="email" type="email" placeholder="Digite seu e-mail" />
                    </Input.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-3">
                    <Text className="font-semibold">Sua senha</Text>
                    <Input.Root>
                        <Input.Icon>
                            <Lock />
                        </Input.Icon>

                        <Input.Input id="password" type="password" placeholder="********" />
                    </Input.Root>
                </label>

                <label htmlFor="remember" className="flex items-center gap-2">
                    <Checkbox />
                    <Text size="sm" className="text-gray-200"></Text>
                </label>
            </form>
        </div>
    );
};
