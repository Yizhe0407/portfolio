import Link from "next/link";
import type { Metadata } from "next";
import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <main className="relative pt-28">
        <PageDivider />
        <SectionContainer className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-6xl font-semibold text-zinc-900">404</h1>
          <p className="text-base text-zinc-500">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900"
          >
            Back to Home
          </Link>
        </SectionContainer>
      </main>
    </div>
  );
}
