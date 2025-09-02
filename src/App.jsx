import { ProductProvider } from './context/ProductContext';
import Banner from './components/layout/Banner';
import ProductForm from './features/products/components/ProductForm';
import SectionList from './features/sections/components/SectionList';

function App() {
  return (
    <ProductProvider>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Banner />
        <ProductForm />
        <SectionList />
      </div>
    </ProductProvider>
  );
}

export default App;
