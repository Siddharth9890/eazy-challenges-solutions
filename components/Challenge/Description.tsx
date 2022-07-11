export function Description({
  mainDescription,
  mainHighlights,
}: {
  mainDescription: string;
  mainHighlights: string[];
}) {
  return (
    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
      <div>
        <h3 className="sr-only">Description</h3>

        <div className="space-y-6">
          <p className="text-base">{mainDescription}</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-medium">Highlights</h3>

        <div className="mt-4">
          <ul role="list" className="pl-4 list-disc text-sm space-y-2">
            {mainHighlights.map((highlight) => (
              <li key={highlight}>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
