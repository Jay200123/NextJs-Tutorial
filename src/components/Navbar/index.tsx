import Link from "next/link";

export default function () {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
