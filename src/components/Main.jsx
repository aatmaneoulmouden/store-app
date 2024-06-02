import Category from "./Category";

const Main = () => {
  return (
    <main className="py-6">
      <div className="container">
        <div className="categories-wrapper grid grid-cols-1 gap-y-6">
          <Category />
          <Category />
        </div>
      </div>
    </main>
  );
};

export default Main;
