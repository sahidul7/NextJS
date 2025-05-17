import Link from "next/link";

export default function Home () {
  return (
    <div>
      <h1>Route Demo for Home Page</h1>
      <p > <h2>Welcome from home page !</h2></p>
      <p>
        <Link href="/products">Products List</Link>
      </p>
    </div>
  );
}