import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error | undefined;

  return (
    <div className="min-h-screen bg-background px-6 py-20 text-foreground">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="mb-4 font-paragraph text-sm uppercase tracking-[0.3em] text-secondary">
          Something Went Wrong
        </p>
        <h1 className="mb-6 font-heading text-5xl">
          We hit a snag loading this page.
        </h1>
        <p className="mb-8 max-w-xl font-paragraph text-base text-secondary">
          {error?.message ||
            "Please head back home and try again. If the issue keeps happening, call Will Rayners Custom Painting at (601) 260-0061."}
        </p>
        <Link
          to="/"
          className="rounded bg-primary px-6 py-3 font-paragraph font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
