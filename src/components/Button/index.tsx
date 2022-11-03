import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
export type ButtonProps = {
  children: ReactNode,
  asChild?: boolean;
}


export const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp className={clsx(
      "py-4 px-3 bg-cyan-500 font-semibold font-sans rounded transition-colors text-black text-sm w-full hover: bg-cyan-300 focus:ring-2 ring-white"
    )
    }>{children}</Comp >
  )
}