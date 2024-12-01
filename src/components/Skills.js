import React from 'react';
import { FaCode, FaTools, FaUsers, FaLaptopCode } from 'react-icons/fa'; // Icons for visual enhancements
import { useInView } from 'react-intersection-observer'; // To trigger animations when elements are in view

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    icon: <FaCode />,
  },
  {
    category: 'Frameworks',
    skills: ['Bootstrap', 'React', 'Node.js'],
    icon: <FaLaptopCode />,
  },
  {
    category: 'Tools',
    skills: ['Git', 'VS Code'],
    icon: <FaTools />,
  },
  {
    category: 'Other Skills',
    skills: ['Problem-solving', 'Team Collaboration'],
    icon: <FaUsers />,
  },
];

function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="skills"
      className="py-5 bg-light"
      style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s ease' }}
      ref={ref}
    >
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>

        {/* Skills Card Layout with Hover Effects */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
          {skillsData.map((skillCategory, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 border-primary shadow-sm hover-shadow"
                style={{
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <div
                  className="card-header bg-primary text-white d-flex align-items-center"
                  style={{ transition: 'background-color 0.3s ease' }}
                >
                  <span className="me-2">{skillCategory.icon}</span>
                  <h5 className="mb-0">{skillCategory.category}</h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="mb-2 skill-item"
                        style={{ opacity: inView ? 1 : 0, transition: 'opacity 1s ease' }}
                      >
                        <span
                          className="badge bg-secondary me-2"
                          style={{
                            transform: inView ? 'scale(1)' : 'scale(0.8)',
                            transition: 'transform 0.3s ease',
                          }}
                        >
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
