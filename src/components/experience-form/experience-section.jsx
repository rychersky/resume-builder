/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import './experience-section.scss';

export default function EducationSection() {
  const [experienceInfo, setExperienceInfo] = useState([
    {
      key: Date.now(),
      organization: 'Test Company',
      tenure: '2020 - Present',
      title: 'Software Engineer I',
      notes: [
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias vero sint repellat ab eos veniam assumenda voluptatibus accusamus accusantium consequuntur vel cumque harum, facere ad ea, fuga quidem incidunt nobis?',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias vero sint repellat ab eos veniam assumenda voluptatibus accusamus accusantium consequuntur vel cumque harum, facere ad ea, fuga quidem incidunt nobis?',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias vero sint repellat ab eos veniam assumenda voluptatibus accusamus accusantium consequuntur vel cumque harum, facere ad ea, fuga quidem incidunt nobis?',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias vero sint repellat ab eos veniam assumenda voluptatibus accusamus accusantium consequuntur vel cumque harum, facere ad ea, fuga quidem incidunt nobis?',
      ],
    },
  ]);
  const [inputs, setInputs] = useState({});
  const [formTask, setFormTask] = useState('');
  const [editKey, setEditKey] = useState(0);

  const ref = useRef(null);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = [...experienceInfo];
    const index = newData.findIndex((exp) => exp.key === editKey);
    newData[index] = { ...inputs, key: Date.now() };
    setExperienceInfo(newData);
    closeModal();
  }

  function handleEsc(e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }

  function openModal(action, experience) {
    setInputs(experience);
    setFormTask(action);
    setEditKey(experience.key || 0);
    ref.current.showModal();
    window.addEventListener('keydown', handleEsc);
  }

  function closeModal() {
    ref.current.close();
    window.removeEventListener('keydown', handleEsc);
  }

  return (
    <>
      <section className="experience-section">
        <h2>Experience</h2>
        <ul className="experience-list">
          {experienceInfo.map((experience) => (
            <li className="experience" key={experience.key}>
              <h3>{experience.organization}</h3>
              <p>{experience.tenure}</p>
              <p>{experience.title}</p>
              <ul>
                {experience.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
              <button
                className="edit"
                type="button"
                onClick={() => {
                  openModal('Edit', experience);
                }}
              >
                Edit
              </button>
              <button className="delete" type="button">
                Delete
              </button>
            </li>
          ))}
          <li>
            <button className="add">Add</button>
          </li>
        </ul>
      </section>

      <dialog className="experience-modal" ref={ref}>
        <form onSubmit={handleSubmit}>
          <h2>{formTask} Education Info</h2>

          <label htmlFor="organization">Company or Organization</label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={inputs.organization || ''}
            onChange={handleChange}
          />

          <label htmlFor="tenure">Start and End Years</label>
          <input
            id="tenure"
            name="tenure"
            type="text"
            value={inputs.tenure || ''}
            onChange={handleChange}
          />

          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={inputs.title || ''}
            onChange={handleChange}
          />

          <p>Duties accomplished</p>
          <ul>
            <li>
              <textarea
                rows="1"
                onChange={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
              ></textarea>
              <button className="remove-exp" type="button">
                x
              </button>
            </li>
            <li>
              <button className="add-exp" type="button">
                +
              </button>
            </li>
          </ul>

          <div>
            <button className="save" type="button">
              Save
            </button>
            <button className="cancel" type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
