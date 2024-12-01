import React from 'react';

function Home() {
  return (
    <div>
      {/* Home Section */}
      <section
        id="home"
        className="d-flex align-items-center justify-content-center text-white vh-100 text-center"
        style={{
          backgroundImage: './src/img.jpg', // Adjust the path if necessary
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
        }}
      >
        {/* Optional Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
            zIndex: 1,
          }}
        ></div>

        <div style={{ animation: 'fadeIn 2s', zIndex: 2 }}>
          <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
          <p className="lead mb-4">
            I'm <span className="text-primary">[Your Name]</span>, a passionate Web Developer
          </p>
          <a
            href="#projects"
            className="btn btn-primary btn-lg"
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '18px',
            }}
            aria-label="View my work in the Projects section"
          >
            View My Work
          </a>
        </div>

        {/* Inline Animation */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

    
    </div>
  );
}

export default Home;
