import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cva, type VariantProps } from 'class-variance-authority';

import { Icon } from '@/components/ui/Icon/Icon';
import type { IconNames } from '@/components/ui/Icon/Icon';
import { cn } from '@/utils/twUtils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-8 whitespace-nowrap rounded-sm text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				primary: 'bg-blue-700 text-white-100 hover:bg-blue-700/90',
				secondary: 'bg-green-700 text-white-100 hover:bg-green-700/90',
				outline:
					'bg-white-300 text-orange-100 border border-orange-100 hover:bg-white-100 focus-visible:ring-1 focus-visible:ring-orange-100/50',
				ghost: 'bg-white-500 text-gray-400 border border-white-500 hover:bg-white-100',
			},
			size: {
				sm: 'h-36 px-8 text-sm',
				md: 'h-40 px-10',
				lg: 'h-44 px-14',
				icon: 'h-32 w-32',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'lg',
		},
	}
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		icon?: IconNames;
	};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, children, icon, ...props }, ref) => {
		if (asChild) {
			return (
				<Slot
					className={cn(buttonVariants({ variant, size, className }))}
					ref={ref}
					{...props}
				>
					{children}
				</Slot>
			);
		}

		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{icon && (
					<Icon
						name={icon}
						size="md"
					/>
				)}
				{children && <span>{children}</span>}
			</button>
		);
	}
);

Button.displayName = 'Button';

export { Button, buttonVariants };
