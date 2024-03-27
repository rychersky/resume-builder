/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import './contact-section.scss';

export default function ContactSection() {
  const [contactInfo, setContactInfo] = useState({
    name: 'Test User',
    phone: '212-555-1234',
    email: 'test@user.com',
  });
  const [inputs, setInputs] = useState({});

  const ref = useRef(null);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleEsc(e) {
    if (e.code === 'Escape') {
      closeModal();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setContactInfo(inputs);
    closeModal();
  }

  function openModal() {
    ref.current.showModal();
    setInputs(contactInfo);
    window.addEventListener('keydown', handleEsc);
  }

  function closeModal() {
    ref.current.close();
    window.removeEventListener('keydown', handleEsc);
  }

  return (
    <>
      <section className="contact-section">
        <h2>{contactInfo.name}</h2>
        <div>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
        </div>
        <button className="edit" type="button" onClick={openModal}>
          Edit
        </button>
      </section>

      <dialog className="contact-modal" ref={ref}>
        <form onSubmit={handleSubmit}>
          <h2>Contact Information</h2>

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={inputs.name || ''}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={inputs.email || ''}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={inputs.phone || ''}
            onChange={handleChange}
          />

          <div>
            <button
              className="save"
              type="submit"
              disabled={!inputs.name || !inputs.email || !inputs.phone}
            >
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
