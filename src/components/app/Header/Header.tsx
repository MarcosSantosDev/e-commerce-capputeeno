import { Input } from '@/components/ui';
import { Icon } from '@/components/ui/Icon/Icon';

const Header = () => {
	return (
		<header className="h-header w-full bg-white-100">
			<div className="mx-auto flex h-full w-container items-center justify-between">
				<h2 className="font-sairaStencilOne text-xl text-gray-500">capputeeno</h2>

				<div className="flex items-center justify-end gap-40">
					<Input
						className="w-280"
						placeholder="Profurando por algo específico?"
					/>

					<button
						type="button"
						className="group relative flex size-24 items-center justify-center text-gray-400 outline-none"
					>
						<Icon
							size="xl"
							name="shopping-bag"
							className="group-hover:fill-white-400 group-focus:fill-white-400"
						/>
						<span className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-red-500 text-xs text-white-100">
							0
						</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
