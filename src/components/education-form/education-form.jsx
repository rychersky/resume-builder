/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function EducationForm({ initEducation }) {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    initEducation(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Education</h2>

      <label>School</label>
      <input
        id="school"
        name="school"
        type="text"
        value={inputs.school || ''}
        onChange={handleChange}
      />

      <label>Degree</label>
      <input
        id="degree"
        name="degree"
        type="text"
        value={inputs.degree || ''}
        onChange={handleChange}
      />

      <label>GPA</label>
      <input
        id="gpa"
        name="gpa"
        type="text"
        value={inputs.gpa || ''}
        onChange={handleChange}
      />

      <label>Graduation Year</label>
      <input
        id="gradYear"
        name="gradYear"
        type="text"
        value={inputs.gradYear || ''}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={
          !inputs.school || !inputs.degree || !inputs.gpa || !inputs.gradYear
        }
      >
        Save
      </button>
    </form>
  );
}
