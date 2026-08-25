import Link from 'next/link';
import type { ReactNode } from 'react';

type LegalSnapshotNoticeProps = {
  title: string;
  children: ReactNode;
};

export function LegalSnapshotNotice({
  title,
  children,
}: LegalSnapshotNoticeProps) {
  return (
    <main className="min-h-screen bg-[#f8f7f5] px-6 py-20 text-neutral-900">
      <article className="mx-auto max-w-2xl border border-neutral-200 bg-white p-8 shadow-[0_18px_50px_rgba(17,24,39,0.06)] sm:p-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-amber-700">
          Public engineering snapshot
        </p>
        <h1 className="mb-6 font-syne text-3xl leading-tight sm:text-4xl">
          {title}
        </h1>
        <div className="space-y-4 text-base leading-7 text-neutral-600">
          {children}
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex border border-neutral-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-900 hover:text-white"
        >
          Back to PeakTalk
        </Link>
      </article>
    </main>
  );
}
