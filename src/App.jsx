import { useState } from "react";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import EducationForm from "./components/EducationForm";
import JobForm from "./components/JobForm";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";


function App() {
  const [contact, setContact] = useState({name: "", email: "", phone: ""});
  const [education, setEducation] = useState({school: "", major: "", compDate: ""})
  const [activeJobs, setActiveJobs] = useState([]);

  return (
    <div className="cvApp">
      <div className="formCol">
        <Card cardHeader="Contact Info">
          <ContactForm contact={contact} setContact={setContact} />
        </Card>
        <Card cardHeader="Education">
          <EducationForm education={education} setEducation={setEducation} />
        </Card>
        <Card cardHeader="Jobs">
          <JobForm activeJobs={activeJobs} setActiveJobs={setActiveJobs} />
        </Card>
      </div>
      <div className="preview">
        <CVPreview contact={contact} education={education} activeJobs={activeJobs} />
      </div>
    </div>
  );
}

export default App;
