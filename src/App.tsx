import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from '@components';
import ProductList from '@pages/product-list';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<ProductList />
			</Layout>
		</QueryClientProvider>
	);
}

export default App;
