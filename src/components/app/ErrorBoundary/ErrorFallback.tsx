import { FallbackProps } from 'react-error-boundary';

import { Button } from '@/components/ui';

export const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
	const contactSupport = () => {
		//
	};

	return (
		<div
			role="alert"
			className="flex h-screen w-full flex-col items-center justify-center gap-8 p-8 md:flex-row"
		>
			<img
				src="/assets/images/feedbacks/server-error.svg"
				alt=""
				className="w-160"
			/>

			<div className="mx-64 flex flex-col justify-end md:mx-0">
				<h1 className="text-xxl text-gray-600">Oops!</h1>
				<h1 className="text-xxl text-gray-500">Algo deu errado.</h1>
				<p className="text-xl text-neutral-400">Não se preocupe, nosso time está aqui para te ajudar</p>
				<div className="mt-24 flex justify-end gap-12">
					<Button
						onClick={resetErrorBoundary}
						variant="primary"
						icon="rotate-cw"
					>
						Tentar novamente
					</Button>
					<Button
						onClick={contactSupport}
						variant="outlined"
						icon="life-buoy"
					>
						Suporte
					</Button>
				</div>
			</div>
		</div>
	);
};
