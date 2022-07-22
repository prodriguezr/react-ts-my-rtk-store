import MainLayout from 'shared/layouts';
import { ProductsList } from '.';

export const Products = () => {
	return (
		<MainLayout title='Products List'>
			<ProductsList />
		</MainLayout>
	);
};
