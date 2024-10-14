import Image from 'next/image';

export default function Hero({ domain }) {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="container container-padding">
        <div className="row align-items-center gy-6 gy-xl-0">
          <div className="col-md-12">
            <h1 className="mb-4 text">Rise Above, Conquer Beyond!</h1>
          </div>
          <div className="col-md-5 text-center d-none">
            <div className="shape-wrapper">
              <div className="background-shape"></div>
              <Image 
                src="https://images.pexels.com/photos/13048407/pexels-photo-13048407.jpeg" 
                alt="Descriptive Alt Text" 
                width={500} 
                height={500} 
                className="responsive-image"
                priority 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
