import { Checkbox } from '../components/ui/Checkbox';
import { Envelope, Lock } from 'phosphor-react';
import { FC, FormEvent, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Heading } from '../components/ui/Heading';
import { Input } from '../components/ui/Input';
import { Text } from '../components/ui/Text';
import { Logo } from '../layout/Logo';
import axios from 'axios';

export const SignIn: FC = () => {
    const [isUserSignIn, setIsUserSignIn] = useState<boolean>(false);

    const onSubmit = (evt: FormEvent) => {
        evt?.preventDefault();

        axios.post('/sessions', {
            email: 'example@email.com',
            password: 'senha',
        });

        setIsUserSignIn(true);
    };

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

            <form onSubmit={onSubmit} className="flex flex-col items-stretch w-full max-w-sm gap-4 mt-10">
                {isUserSignIn && <Text>Login realizado!</Text>}

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
                    <Checkbox id="remember" />

                    <Text size="sm" className="text-gray-200">
                        Lembrar de mim por 30 dias
                    </Text>
                </label>

                <Button type="submit" className="mt-4">
                    Entrar na plataforma
                </Button>
            </form>

            <footer className="flex flex-col items-center gap-4 mt-8">
                <Text size="sm" asChild>
                    <a href="#recovery-password" className="text-gray-400 underline hover:text-gray-200">
                        Esqueceu sua senha?
                    </a>
                </Text>

                <Text size="sm" asChild>
                    <a href="#create-account" className="text-gray-400 underline hover:text-gray-200">
                        Não possui conta? Crie uma agora!
                    </a>
                </Text>
            </footer>
        </div>
    );
};
