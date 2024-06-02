import categories from "../data/categories";

const Header = () => {
  const displayCategories = categories.map((category, index) => (
    <li key={index}>
      <a href="" className="capitalize">{category}</a>
    </li>
  ));

  return (
    <header className="bg-primary-green">
      <div className="container">
        <nav className="h-24 flex justify-between items-center text-neutral-white">
          <a href="">Store App</a>
          <ul className="nav-list flex gap-5">{displayCategories}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
