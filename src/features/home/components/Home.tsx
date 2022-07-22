import { Typography } from '@mui/material';
import MainLayout from 'shared/layouts';

export const Home = () => {
	return (
		<MainLayout>
			<div className='flex flex-row items-start justify-center w-full h-full px-8 py-4'>
				<div className='flex flex-col items-start justify-center w-full h-full gap-y-6'>
					<Typography variant='h4' className='flex flex-col font-bold'>
						Welcome to My Store
					</Typography>
					<Typography variant='h6'>
						This is a project based on the project...
					</Typography>
					<Typography variant='h6'>
						Developed using React with Typescript and Material UI. In addition,
						the following packages were used as development dependencies:
						eslint, prettier, eslint-config-prettier, husky, tailwindcss,
						postcss and autoprefixer
					</Typography>
				</div>
				<div className='flex flex-col items-end w-full'>
					<img
						src='/store.png'
						alt='A small store'
						className='h-auto max-w-full'
					/>
				</div>
			</div>
		</MainLayout>
	);
};
