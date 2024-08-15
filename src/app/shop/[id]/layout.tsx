import { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren) {
  return (
    <div className="p-4">
      <div className="h-20 bg-slate-200 flex justify-center items-center">Shop page layout</div>
      <div>{children}</div>
    </div>
  )
}