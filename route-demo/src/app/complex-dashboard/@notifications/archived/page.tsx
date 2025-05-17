
import Link from "next/link";
import { text } from "stream/consumers";
export default function Archived() {
  return (
    <div>
     <p > Default routing to Archived</p>
   <Link href={"/complex-dashboard"}>
        
        <h2>Defaults</h2>
         </Link>     
    </div>
  );
}