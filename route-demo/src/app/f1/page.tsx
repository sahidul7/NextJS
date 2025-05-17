import Link from "next/link";
export default function F1() {
  return (
    <div>
      <h1>F1</h1>
      <p>This is the F1 page.</p>
        <Link href={"/f1/f2"}> f2</Link>
        
    </div>
  );
}