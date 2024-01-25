import Link from "next/link";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="navbar py-5 px-10">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">Curso de Next</h1>
      </Link>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/store"}>Store</Link>
        </li>
        <li>
          <Link href={"/profile"}>Perfil</Link>
        </li>
        <li>
          <Link href={"/post"}>Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
