import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed flex items-center px-[5%] py-4 border-b bg-white w-full h-18 border-gray-200 z-1000">
      <h1 className="font-extrabold text-xl tracking-tight">Bento Coffe</h1>
      <nav className="flex gap-6 text-xs font-semibold text-gray-700 mx-auto">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/Menu-Bento">
          Menu
        </Link>
        <a className="hover:underline" href="#">
          Order
        </a>
        <a className="hover:underline" href="#">
          About Us
        </a>
      </nav>
      <div className="w-4">
        <svg
          className="w-6 h-6"
          id="fi_9219671"
          enable-background="new 0 0 64 64"
          height="512"
          viewBox="0 0 64 64"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <path d="m25.308 61.679c-3.514 0-6.373-2.859-6.373-6.373s2.859-6.372 6.373-6.372 6.373 2.858 6.373 6.372-2.859 6.373-6.373 6.373zm0-8.745c-1.308 0-2.373 1.064-2.373 2.372 0 1.309 1.064 2.373 2.373 2.373s2.373-1.064 2.373-2.373c0-1.308-1.064-2.372-2.373-2.372z"></path>
              <path d="m47.462 61.679c-3.514 0-6.372-2.859-6.372-6.373s2.858-6.372 6.372-6.372 6.373 2.858 6.373 6.372-2.86 6.373-6.373 6.373zm0-8.745c-1.308 0-2.372 1.064-2.372 2.372 0 1.309 1.064 2.373 2.372 2.373 1.309 0 2.373-1.064 2.373-2.373 0-1.308-1.065-2.372-2.373-2.372z"></path>
            </g>
            <path d="m52.128 43.994h-31.419c-3.057 0-5.668-2.081-6.35-5.061l-6.521-28.477c-.086-.376-.346-.698-.696-.86l-5.409-2.507c-1.252-.58-1.797-2.066-1.217-3.319.58-1.252 2.067-1.797 3.319-1.217l5.409 2.507c1.743.807 3.04 2.407 3.468 4.28l6.521 28.479c.158.692.765 1.176 1.476 1.176h31.419c.708 0 1.314-.481 1.476-1.171l5.07-21.813c.145-.62-.119-1.071-.288-1.284-.17-.214-.55-.572-1.186-.572h-37c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h37c1.999 0 3.857.897 5.101 2.462s1.696 3.579 1.244 5.526l-5.071 21.814c-.691 2.965-3.3 5.037-6.346 5.037z"></path>
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Header;
