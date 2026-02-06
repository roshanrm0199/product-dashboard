import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App(){
  return(
    <div className="container py-4">
      <h2 className="text-center mb-4">Product Management Dashboard</h2>
      <ProductForm/>
      <ProductList/>
    </div>
  );
}

export default App;
