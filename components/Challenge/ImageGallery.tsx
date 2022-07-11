export function ImageGallery({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) {
  return (
    <>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Preview Images
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          {images.map((image) => (
            <div
              key={image.src}
              className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-center object-cover group-hover:opacity-75"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
