import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'w-fit rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-white text-black',
      },
      size: {
        default: 'py-3 px-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

// TODO: remove eslint disable line from error: https://github.com/jsx-eslint/eslint-plugin-react/issues/3284
// eslint-disable-next-line react/prop-types
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
