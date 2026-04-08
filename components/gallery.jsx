import Image from 'next/image';

export default function Gallery({ gallery }) {
  return (
    <section id="gallery" className="gallery-section-modern fade-in-section">
      <div className="container">
        <p className="section-label">My Work</p>
        <h2 className="section-heading">Gallery</h2>
        <div className="gallery-grid mt-4">
          {gallery.map((item, index) => (
            <div key={index} className="gallery-card">
              <div className="gallery-card-inner">
                <Image
                  src={`https://www.profilesuite.com/uploads/gallery/${item.filename}`}
                  alt={item.title || `Gallery image ${index + 1}`}
                  width={400}
                  height={260}
                  className="gallery-card-image"
                  priority={index === 0}
                />
              </div>
              <div className="gallery-card-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
