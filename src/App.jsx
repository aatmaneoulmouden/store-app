import Category from "./components/Category";
import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <Header />
      <Category />
      <div className="p-3 grid grid-cols-2 gap-6">
        <Product />
        <Product />
      </div>
    </>
  );
};

export default App;
