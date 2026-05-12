import Image from "next/image";
import { resolveMediaSrc } from "../../lib/mediaUrl";

/** Cycled tile shapes for masonry rhythm (tall / wide / square). */
const TILE_SHAPES = ["tall", "wide", "square", "wide", "tall", "square"];

export default function Home2Gallery({ gallery }) {
  return (
    <section id="work" className="home2-section home2-work-bg fade-in-section">
      <div className="home2-section-inner">
        <p className="home2-sec-label">Selected</p>
        <h2 className="home2-sec-heading">Work</h2>
        <ul className="home2-work-masonry">
          {gallery.map((item, index) => {
            const shape = TILE_SHAPES[index % TILE_SHAPES.length];
            return (
              <li
                key={index}
                className={`home2-work-item home2-work-item--${shape}`}
              >
                <div className="home2-work-img-wrap">
                  <Image
                    src={resolveMediaSrc(item.filename)}
                    alt={item.title || `Gallery ${index + 1}`}
                    fill
                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                    className="home2-work-img"
                    priority={index === 0}
                  />
                </div>
                {item.title && (
                  <div className="home2-work-cap">{item.title}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
