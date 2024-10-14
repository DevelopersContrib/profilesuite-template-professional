import Image from 'next/image';

export default function Gallery({ domain }) {
  const imageUrls = [
    "https://images.pexels.com/photos/19086785/pexels-photo-19086785.jpeg",
    "https://images.pexels.com/photos/3837259/pexels-photo-3837259.jpeg",
    "https://images.pexels.com/photos/13768851/pexels-photo-13768851.jpeg",
    "https://images.pexels.com/photos/7760754/pexels-photo-7760754.jpeg",
    "https://images.pexels.com/photos/13768643/pexels-photo-13768643.jpeg",
    "https://images.pexels.com/photos/6553731/pexels-photo-6553731.jpeg"
  ];

  return (
    <section className="gallery-section py-5 text-white">
      <div className="container container-padding">
        <h2>I love what I do</h2>
        <p className='lead'>Gallery</p>
        <div className="gallery-container">
          {imageUrls.map((url, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={url}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className="gallery-image"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
