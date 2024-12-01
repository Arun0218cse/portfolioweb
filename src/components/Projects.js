import React, { useState } from 'react';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Bus Reservation System',
    description: 'To Manage Bus Ticket Reservation Process',
    imgSrc: './images.jpeg',
    link: '#',
    details: 'This project is designed to manage bus ticket reservations, ensuring passengers can easily book and manage their travel plans.',
    techStack: 'HTML, CSS, JavaScript, Node.js, MongoDB',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A concise summary of the project’s goals and objectives.',
    imgSrc: './images1.png',
    link: '#',
    details: 'This website is my personal portfolio, showcasing various web development projects and providing insight into my skills and experience.',
    techStack: 'React, Bootstrap, HTML, CSS',
  },
  {
    id: 3,
    title: 'Smart Parking System',
    description: 'An efficient solution for parking management.',
    imgSrc: './smart parking.jpeg', // Replace with the actual image path
    link: '#',
    details: 'This project is designed to optimize parking space usage and streamline the parking process using IoT and data-driven techniques. It includes features like real-time space availability, booking, and analytics.',
    techStack: 'Python, Flask, IoT, MongoDB, React',
  },
];

function Projects() {
  // State to handle which project is currently selected for the modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle opening the modal with the selected project
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project) => (
            <div className="col" key={project.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.imgSrc}
                  className="card-img-top"
                  alt={project.title}
                  style={{ borderRadius: '10px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => openModal(project)}
                    style={{
                      fontSize: '16px',
                      padding: '10px 15px',
                      borderRadius: '5px',
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Modal */}
      {selectedProject && (
        <>
          <div
            className="floating-modal"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1050,
              width: '90%',
              maxWidth: '600px',
              backgroundColor: '#fff',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
              padding: '20px',
              animation: 'fadeIn 0.3s ease-out',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px',
              }}
            >
              <h5 style={{ margin: 0 }}>{selectedProject.title}</h5>
              <button
                type="button"
                onClick={closeModal}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                &times;
              </button>
            </div>
            <div style={{ marginTop: '10px' }}>
              <p><strong>Description:</strong> {selectedProject.details}</p>
              <p><strong>Tech Stack:</strong> {selectedProject.techStack}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '10px',
                borderTop: '1px solid #ddd',
                paddingTop: '10px',
              }}
            >
              <button
                className="btn btn-secondary"
                onClick={closeModal}
                style={{ padding: '10px 15px' }}
              >
                Close
              </button>
              <a
                href={selectedProject.link}
                className="btn btn-primary"
                style={{ padding: '10px 15px' }}
              >
                View Project
              </a>
            </div>
          </div>

          {/* Modal Overlay Background */}
          <div
            onClick={closeModal}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1040,
            }}
          ></div>
        </>
      )}
    </section>
  );
}

export default Projects;
