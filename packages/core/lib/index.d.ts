/// <reference types="react" />
import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
    children: ReactNode;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: ({ disabled, onClick, children, ...props }: ButtonProps) => JSX.Element;

export { Button };
