import React from "react";
import Image from "next/image";

interface IImage {
  id: string;
  url: string;
}

interface IImageGalleryProps {
  images: IImage[];
  altText: string;
}

const ImageGallery: React.FC<IImageGalleryProps> = ({ images, altText }) => (
  <section className="bg-gray-200 p-4">
    <h2 className="text-2xl text-black font-semibold mb-4">Images</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.length > 0
        ? images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image.url}
                alt={altText}
                width={600}
                height={600}
                className="object-cover w-full h-64 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
            </div>
          ))
        : null}
    </div>
  </section>
);

export default ImageGallery;
