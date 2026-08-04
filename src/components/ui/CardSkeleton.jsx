// Shown briefly while the card payload "loads" — today that's instant local
// data, but this keeps the same loading contract once data comes from an API.
export default function CardSkeleton() {
  return (
    <div className="mx-auto w-full max-w-3xl animate-pulse px-5 pt-12">
      <div className="flex flex-col items-center">
        <div className="mb-5 h-14 w-14 rounded-2xl bg-neutral-200" />
        <div className="h-3 w-40 rounded-full bg-neutral-200" />
        <div className="my-6 h-28 w-28 rounded-full bg-neutral-200" />
        <div className="h-6 w-48 rounded-full bg-neutral-200" />
        <div className="mt-3 h-4 w-56 rounded-full bg-neutral-200" />
        <div className="mt-8 h-14 w-full max-w-xs rounded-full bg-neutral-200" />
      </div>

      <div className="mt-12 grid grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-24 rounded-2xl bg-neutral-200" />
        ))}
      </div>
    </div>
  );
}
