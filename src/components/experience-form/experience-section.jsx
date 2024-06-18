/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
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
  const [formOpen, setFormOpen] = useState(false);
  const [task, setTask] = useState('');
  const [experienceToEdit, setExperienceToEdit] = useState({});

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
                  setFormOpen(true);
                  setTask('Edit');
                  setExperienceToEdit(experience);
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

      {formOpen && (
        <ExperienceForm
          data={experienceToEdit}
          task={task}
          handleClose={() => setFormOpen(false)}
          handleSubmit={(newData) => {
            setExperienceInfo(newData);
            setFormOpen(false);
          }}
        />
      )}
    </>
  );
}

function ExperienceForm({ data, handleClose, handleSubmit, task }) {
  const [inputs, setInputs] = useState(data);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  console.log(inputs);

  return (
    <Dialog className="modal-container" open={true} onClose={handleClose}>
      <div className="modal-backdrop" aria-hidden="true" />

      <Dialog.Panel className="modal-modal">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(inputs);
          }}
        >
          <Dialog.Title>{task} Experience Info</Dialog.Title>

          <label htmlFor="organization">Company or Organization</label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={inputs.organization}
            onChange={handleChange}
          />

          <label htmlFor="tenure">Start and End Years</label>
          <input
            id="tenure"
            name="tenure"
            type="text"
            value={inputs.tenure}
            onChange={handleChange}
          />

          <label htmlFor="title">Job Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={inputs.title}
            onChange={handleChange}
          />

          <fieldset>
            <legend>Job Duties</legend>
            {inputs.notes.map((note, i) => (
              <textarea
                key={i}
                id={`note-${i}`}
                name={`note-${i}`}
                onChange={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                  handleChange(e);
                  console.log(inputs);
                }}
              >
                {note}
              </textarea>
            ))}
          </fieldset>

          <div>
            <button className="modal-save" type="submit">
              Save
            </button>
            <button
              className="modal--cancel"
              type="button"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}
