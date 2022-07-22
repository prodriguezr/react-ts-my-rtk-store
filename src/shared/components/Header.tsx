import { AppTitle } from './AppTitle';
import { Menu } from './Menu';

interface HeaderProps {
	bgColor?: string;
}

export const Header = ({ bgColor = 'bg-transparent' }: HeaderProps) => {
	return (
		<div
			className={`flex flex-row justify-between w-full px-6 h-auto ${bgColor} rounded-3xl`}
		>
			<div className='flex flex-row bg-transparent'>
				<AppTitle />
			</div>
			<div className='flex flex-col items-end justify-center w-auto gap-2'>
				<Menu />
			</div>
		</div>
	);
};
