
'use client'

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="w-full flex flex-col items-center p-10">
      <h2 className="font-semibold">Something went wrong</h2>
      <p className="mb-2">This error is only shown in the shop page</p>
      <Link href='/' className={buttonVariants({})}>Go to home page</Link>
    </div>
  );
}