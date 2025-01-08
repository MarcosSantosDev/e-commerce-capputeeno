import * as React from 'react';

import { cn } from '@/utils/twUtils';

import { Button, ButtonProps } from './Button/Button';
import { Icon } from './Icon/Icon';

export const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
	<nav
		role="navigation"
		aria-label="pagination"
		className={cn('flex max-w-full justify-center', className)}
		{...props}
	/>
);
Pagination.displayName = 'Pagination';

export const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
	({ className, ...props }, ref) => (
		<ul
			ref={ref}
			className={cn('flex flex-row items-center gap-4', className)}
			{...props}
		/>
	)
);
PaginationContent.displayName = 'PaginationContent';

export const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
	({ className, ...props }, ref) => (
		<li
			ref={ref}
			className={cn('', className)}
			{...props}
		/>
	)
);
PaginationItem.displayName = 'PaginationItem';

type PaginationButtonProps = {
	isActive?: boolean;
	children?: React.ReactNode;
} & ButtonProps;

export const PaginationButton = ({ children, isActive, ...props }: PaginationButtonProps) => (
	<Button
		aria-current={isActive ? 'page' : undefined}
		variant={isActive ? 'outline' : 'ghost'}
		size="icon"
		{...props}
	>
		{children}
	</Button>
);
PaginationButton.displayName = 'PaginationButton';

export const PaginationPrevious = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
	<PaginationButton
		aria-label="Go to previous page"
		size="icon"
		icon="chevron-left"
		name="previous"
		{...props}
	/>
);
PaginationPrevious.displayName = 'PaginationPrevious';

export const PaginationNext = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
	<PaginationButton
		aria-label="Go to next page"
		size="icon"
		icon="chevron-right"
		name="next"
		{...props}
	/>
);
PaginationNext.displayName = 'PaginationNext';

export const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
	<span
		aria-hidden
		className={cn('flex h-9 w-9 items-center justify-center', className)}
		{...props}
	>
		<Icon
			size="md"
			name="ellipsis"
		/>
		<span className="sr-only">Mais paginas</span>
	</span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';
