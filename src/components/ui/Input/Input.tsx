import * as React from 'react';

import { cn } from '@/utils/twUtils';

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-40 w-full rounded-sm border-none bg-white-300 px-3 py-1 text-sm text-gray-500 transition-colors md:text-md',
					'placeholder:text-gray-400',
					'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500',
					'disabled:cursor-not-allowed disabled:opacity-50',
					className
				)}
				ref={ref}
				role="textbox"
				{...props}
			/>
		);
	}
);

Input.displayName = 'Input';
