import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center p-10">
      <h2 className="font-semibold">Page not found</h2>
      <p className="mb-2">We can't find the page you're looking for.</p>
      <Link href='/' className={buttonVariants({})}>Go to home page</Link>
    </div>
  );
}
