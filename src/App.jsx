import Header from "./components/Header";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <Header />
      <div className="p-3 grid grid-cols-4">
        <Product />
      </div>
    </>
  );
};

export default App;
