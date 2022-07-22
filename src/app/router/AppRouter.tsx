import { Route, Routes } from 'react-router-dom';
import Cart from 'features/cart';
import Home from 'features/home';
import Products from 'features/products';
import Manage from 'features/manage';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='products/*' element={<Products />} />
			<Route path='admin/*' element={<Manage />} />
			<Route path='cart/*' element={<Cart />} />
			<Route path='/*' element={<Home />} />
		</Routes>
	);
};
