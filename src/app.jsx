import { useState } from 'react';
import './app.scss';
import ContactForm from './components/contact-form/contact-form';

export default function App() {
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: 'Test User',
    phone: '212-555-1234',
    email: 'test@user.com',
  });

  return (
    <>
      <div className="app">
        <div className="resume">
          <section className="contact-section">
            <h2>{contactInfo.name}</h2>
            <div>
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
            <button
              className="edit"
              type="button"
              onClick={() => setContactFormOpen(true)}
            >
              Edit
            </button>
          </section>
          <section className="experience-section">
            <h2>Experience</h2>
            <ul className="experience-list">
              <li className="experience">
                <h3>Test Company #1</h3>
                <p>2020 - present</p>
                <p>Software Engineer I</p>
                <ul>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Alias vero sint repellat ab eos veniam assumenda
                    voluptatibus accusamus accusantium consequuntur vel cumque
                    harum, facere ad ea, fuga quidem incidunt nobis?
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Alias vero sint repellat ab eos veniam assumenda
                    voluptatibus accusamus accusantium consequuntur vel cumque
                    harum, facere ad ea, fuga quidem incidunt nobis?
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Alias vero sint repellat ab eos veniam assumenda
                    voluptatibus accusamus accusantium consequuntur vel cumque
                    harum, facere ad ea, fuga quidem incidunt nobis?
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Alias vero sint repellat ab eos veniam assumenda
                    voluptatibus accusamus accusantium consequuntur vel cumque
                    harum, facere ad ea, fuga quidem incidunt nobis?
                  </li>
                </ul>
                <button className="edit" type="button">
                  Edit
                </button>
                <button className="delete" type="button">
                  Delete
                </button>
              </li>
              <li>
                <button className="add">Add</button>
              </li>
            </ul>
          </section>
          <section className="education-section">
            <h2>Education</h2>
            <ul className="education-list">
              <li>
                <h3>Bachelor of Science, Computer Science</h3>
                <div>
                  <p>University</p>
                  <p className="university-name">University of Test</p>
                </div>
                <div>
                  <p>Graduation Year</p>
                  <p className="graduation-year">2024</p>
                </div>
                <div>
                  <p>GPA</p>
                  <p className="gpa">3.91</p>
                </div>
                <div>
                  <p>Notes</p>
                  <p className="notes">Summa Cum Laude, Presidents Club</p>
                </div>

                <button className="edit" type="button">
                  Edit
                </button>
                <button className="delete" type="button">
                  Delete
                </button>
              </li>
              <li>
                <button className="add">Add</button>
              </li>
            </ul>
          </section>
        </div>
        <button className="print" type="button">
          Print
        </button>
      </div>
      <ContactForm
        isOpen={contactFormOpen}
        contactInfo={contactInfo}
        setContactFormOpen={setContactFormOpen}
        setContactInfo={setContactInfo}
      />
    </>
  );
}
