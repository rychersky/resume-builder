import './app.scss';
import ContactSection from './components/contact-form/contact-section';
import EducationSection from './components/experience-form/experience-section';

export default function App() {
  return (
    <>
      <div className="app">
        <div className="resume">
          <ContactSection />
          <EducationSection />
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
    </>
  );
}
