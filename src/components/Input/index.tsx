import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }


export type TextInputRootProps = {
  children: ReactNode,
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className=
      'flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 focus-within: ring-2 ring-cyan-300'
    >
      {children}
    </div>
  )
}


type TextInputIconProps = {
  children: ReactNode
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  )
}


const Input = (props: InputProps) => {
  return (

    <input
      className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:bg-gray-400'
      {...props}
    />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: Input,
  Icon: TextInputIcon
}