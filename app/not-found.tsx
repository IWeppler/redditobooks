import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0c0f] text-white">
      <h1 className="font-switzer text-9xl font-bold text-brand-main">404</h1>
      <h2 className="mt-4 text-2xl font-medium">Page not found</h2>
      <p className="mt-2 text-gray-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="mt-8 rounded bg-brand-main px-6 py-3 text-sm font-medium text-white hover:bg-brand-secondary transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
