import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cva, type VariantProps } from 'class-variance-authority';

import { Icon } from '@/components/ui/Icon/Icon';
import type { IconNames } from '@/components/ui/Icon/Icon';
import { cn } from '@/utils/twUtils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-8 whitespace-nowrap rounded-sm text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white-1000 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'bg-blue-700 text-white-100 shadow hover:bg-blue-700/90',
				secondary: 'bg-green-700 text-white-100 shadow hover:bg-green-700/90',
				outlined: 'bg-white-100 text-neutral-600 border border-neutral-600 shadow hover:bg-neutral-100/90',
			},
			size: {
				md: 'h-32 md:h-40 px-10',
				lg: 'h-40 md:h-44 px-14',
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
						size="sm"
					/>
				)}
				<span>{children}</span>
			</button>
		);
	}
);

Button.displayName = 'Button';

export { Button, buttonVariants };
