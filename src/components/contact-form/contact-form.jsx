/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import './contact-form.scss';

export default function ContactForm({
  contactInfo,
  isOpen,
  setContactFormOpen,
  setContactInfo,
}) {
  const [inputs, setInputs] = useState(contactInfo);

  const ref = useRef(null);

  useEffect(() => {
    function handleEsc(e) {
      if (e.code === 'Escape') {
        ref.current.close();
        setContactFormOpen(false);
      }
    }

    window.addEventListener('keydown', handleEsc);

    if (isOpen) {
      ref.current.showModal();
    } else {
      ref.current.close();
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, setContactFormOpen, inputs]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  return (
    <dialog ref={ref}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setContactInfo(inputs);
          setContactFormOpen(false);
          ref.current.close();
        }}
      >
        <h2>Contact Information</h2>

        <label>Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={inputs.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={inputs.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={inputs.phone}
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
          <button
            className="cancel"
            type="button"
            onClick={() => {
              ref.current.close();
              setContactFormOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
}
