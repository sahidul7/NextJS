import Link from "next/link";

export default function Notifications() {
  return (
    <div>
      <h1>Notifications</h1>
      <p>This is the notifications page.</p>
      <Link href={"/complex-dashboard/archived"}>
        <h2>Archived</h2>   
        </Link>
    </div>
  );
}