/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import './contact-section.scss';

export default function ContactSection() {
  const [contactInfo, setContactInfo] = useState({
    name: 'Test User',
    phone: '212-555-1234',
    email: 'test@user.com',
  });
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="contact-section">
        <h2>{contactInfo.name}</h2>
        <div>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
        </div>
        <button
          className="edit"
          type="button"
          onClick={() => setFormOpen(true)}
        >
          Edit
        </button>
      </section>

      {formOpen && (
        <ContactForm
          data={contactInfo}
          handleClose={() => setFormOpen(false)}
          handleSubmit={(newData) => {
            setContactInfo(newData);
            setFormOpen(false);
          }}
        />
      )}
    </>
  );
}

function ContactForm({ data, handleClose, handleSubmit }) {
  const [inputs, setInputs] = useState(data);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

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
          <Dialog.Title>Edit Contact Info</Dialog.Title>

          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={inputs.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={inputs.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={inputs.phone}
            onChange={handleChange}
          />

          <div>
            <button
              className="modal-save"
              type="submit"
              disabled={!inputs.name || !inputs.email || !inputs.phone}
            >
              Save
            </button>
            <button
              className="modal-cancel"
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
