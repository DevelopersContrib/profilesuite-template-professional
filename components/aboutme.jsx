export default function Aboutme({profile}) {
  
    return (
      <>        
        <section className='aboutme-bg py-5'>
        <div className="container">
            <div className="row">
                <div className="col">
                <h2>{profile.name}</h2>
                <p className='lead'>About Me</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <p>
                {profile.introduction}
                </p>
                </div>
            </div>
        </div>
        </section>
      </>
    )  
}
  