import { useState } from 'react';
import './app.scss';
import ContactForm from './components/contact-form/contact-form';
import EducationForm from './components/education-form/education-form';
import Resume from './components/resume/resume';

export default function App() {
  const [contactInfo, setContactInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);

  const [fakeRouter, setFakeRouter] = useState('init contact');

  return (
    <div className="app">
      <Resume />
    </div>
  );

  // function initContact(info) {
  //   setContactInfo(info);
  //   setFakeRouter('init education');
  // }

  // function initEducation(info) {
  //   setEducationInfo([info]);
  //   setFakeRouter('init experience');
  // }

  // if (fakeRouter === 'init contact') {
  //   return (
  //     <div className="app">
  //       <ContactForm initContact={initContact} />

  //       <button
  //         className="print-state"
  //         type="button"
  //         onClick={() => {
  //           console.log(contactInfo);
  //           console.log(educationInfo);
  //         }}
  //       >
  //         Print state
  //       </button>
  //     </div>
  //   );
  // } else if (fakeRouter === 'init education') {
  //   return (
  //     <div className="app">
  //       <EducationForm initEducation={initEducation} />

  //       <button
  //         className="print-state"
  //         type="button"
  //         onClick={() => {
  //           console.log(contactInfo);
  //           console.log(educationInfo);
  //         }}
  //       >
  //         Print state
  //       </button>
  //     </div>
  //   );
  // }
}
