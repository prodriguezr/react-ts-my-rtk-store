import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

export const Menu = () => {
	return (
		<div className='flex flex-col items-end text-white'>
			<div>
				<Link component={RouterLink} color='inherit' to='/products'>
					Products
				</Link>
			</div>
			<div>
				<Link component={RouterLink} color='inherit' to='/admin'>
					Admin
				</Link>
			</div>
			<div>
				<Link component={RouterLink} color='inherit' to='/cart'>
					Cart
				</Link>
			</div>
			<div></div>
		</div>
	);
};
