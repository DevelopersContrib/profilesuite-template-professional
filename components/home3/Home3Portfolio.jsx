import Image from "next/image";

export default function Home3Portfolio({ gallery }) {
  return (
    <section id="portfolio" className="home3-section home3-section--alt fade-in-section">
      <div className="home3-container">
        <h2 className="home3-section-title">Portfolio</h2>
        <div className="home3-portfolio-grid">
          {gallery.map((item, index) => (
            <figure key={index} className="home3-portfolio-item">
              <div className="home3-portfolio-img-wrap">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.filename}`}
                  alt={item.title || `Work ${index + 1}`}
                  fill
                  sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                  className="home3-portfolio-img"
                />
              </div>
              {item.title && (
                <figcaption className="home3-portfolio-cap">{item.title}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
