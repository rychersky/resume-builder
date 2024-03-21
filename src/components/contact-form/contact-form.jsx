/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function ContactForm({ initContact }) {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    initContact(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Information</h2>

      <label>Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={inputs.name || ''}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={inputs.email || ''}
        onChange={handleChange}
      />

      <label>Phone</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        value={inputs.phone || ''}
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={!inputs.name || !inputs.email || !inputs.phone}
      >
        Save
      </button>
    </form>
  );
}
