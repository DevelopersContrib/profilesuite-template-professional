import Image from "next/image";

export default function Home2Gallery({ gallery }) {
  return (
    <section id="work" className="home2-section home2-work-bg fade-in-section">
      <div className="home2-section-inner">
        <span className="home2-sec-num" aria-hidden>
          03
        </span>
        <p className="home2-sec-label">Selected</p>
        <h2 className="home2-sec-heading">Work</h2>
        <div className="home2-work-grid">
          {gallery.map((item, index) => (
            <article key={index} className="home2-work-item">
              <div className="home2-work-img-wrap">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/${item.filename}`}
                  alt={item.title || `Gallery ${index + 1}`}
                  fill
                  sizes="(max-width: 991px) 100vw, 45vw"
                  className="home2-work-img"
                  priority={index === 0}
                />
              </div>
              {item.title && (
                <div className="home2-work-cap">{item.title}</div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
