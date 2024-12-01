import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">My Resume</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            {/* Resume Preview */}
            <div className="embed-responsive embed-responsive-16by9 mb-4">
              <iframe
                src="resume1.pdf"
                width="100%"
                height="600px"
                title="Resume"
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                Your browser does not support iframes. Please
                <a href="resume1.pdf" download> download the resume</a>.
              </iframe>
            </div>

            {/* Download Button */}
            <div className="text-center">
              <a
                href="resume1.pdf"
                download
                className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                style={{
                  fontSize: '18px',
                  padding: '12px 20px',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s ease',
                }}
                aria-label="Download Resume as PDF"
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
