import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen grid-cols-[auto_auto] content-center justify-center justify-items-center gap-y-4 px-6 py-16">
      <Image
        src="/404.svg"
        alt=""
        width={909}
        height={973}
        priority
        className="w-36 self-center md:row-span-2 md:w-72"
      />
      <div className="flex items-center gap-3 self-center">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold leading-none tracking-tight text-zinc-900 md:text-8xl">
              404
            </h1>
            <p className="text-2xl font-bold uppercase tracking-widest text-zinc-700 md:text-4xl">
              Error
            </p>
          </div>
          <span
            aria-hidden
            className="text-[6rem] font-bold leading-none text-zinc-900 md:text-[9rem]"
          >
            !
          </span>
      </div>
      <div className="col-span-2 flex flex-col items-center gap-4 text-center md:col-span-1 md:col-start-2">
        <p className="text-base text-zinc-500">
          Sorry, the page  not found
        </p>
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
