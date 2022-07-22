import { Divider, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Header } from 'shared/components';

interface MainLayoutProps {
	children?: ReactNode;
	title?: string;
}

export const MainLayout = ({ children, title = '' }: MainLayoutProps) => {
	return (
		<div className='container w-screen h-screen bg-gray-200'>
			<div className='flex flex-row items-center mx-4 my-4'>
				<Header bgColor='bg-green-900' />
			</div>
			<Divider />
			<div className='flex h-[800] m-4 px-4 pb-4 bg-white flex-col gap-1 rounded-lg'>
				<Typography variant='h5' className='pt-3 font-bold text-blue-900'>
					{title}
				</Typography>
				{children}
			</div>
			Y
		</div>
	);
};
