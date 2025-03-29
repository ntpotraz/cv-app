import { useState } from "react";
import "../styles/Form.css";
import "../styles/JobForm.css";

const JobForm = ( {activeJobs, setActiveJobs }) => {
  const [jobs, setJobs] = useState([]);
  const [createJob, setCreateJob] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [id, setId] = useState(0);



  const addJob = () => {
    const job = {
      companyName: companyName,
      position: position,
      responsibilities: responsibilities,
      startDate: startDate,
      endDate: endDate,
      id: id
    };

    setJobs([...jobs, job]);
    setActiveJobs([...activeJobs, job]);

    setCompanyName("");
    setPosition("");
    setResponsibilities("");
    setStartDate("");
    setEndDate("");
    setCreateJob(false);
    setId(id + 1);
  };

  return createJob ? (
    <div key="jobform" className="newJobForm appearAnimation">
      <form className="cvForm">
        <label className="cvLabel">
          Company Name
          <input
            className="cvInput"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <label className="cvLabel">
          Position
          <input
            className="cvInput"
            type="email"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </label>
        <label className="cvLabel">
          Main Responsibilities
          <textarea
            className="responsibilities"
            value={responsibilities}
            rows="10"
            onChange={(e) => setResponsibilities(e.target.value)}
          ></textarea>
        </label>
        <div>
          <label className="cvLabel">
            Start Date
            <input
              className="cvInput"
              value={startDate}
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label className="cvLabel">
            End Date
            <input
              className="cvInput"
              value={endDate}
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
      </form>
      <div className="formBtnDiv">
        <button className="formBtn addJob" onClick={() => addJob()}>
          Add
        </button>
        <button
          className="formBtn cancelJob"
          onClick={() => setCreateJob(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div key="addedjobs" className="jobs appearAnimation">
      {jobs.map((job) => (
        <div 
            key={job.id} 
            className={activeJobs.includes(job) ? "job" : "job disableJob"}
            onClick={(e) => {
              e.currentTarget.classList.toggle("disableJob")
              if (e.currentTarget.classList.contains("disableJob")) {
                const updatedJobs = activeJobs.filter((cur) => cur.id !== job.id)
                setActiveJobs(updatedJobs);
              } else {
                const updatedJobs = [...activeJobs, job];
                setActiveJobs(updatedJobs);
              }
            }}
          >
          <span className="pos">{job.position}</span>
          <span className="compName">{job.companyName}</span>
        </div>
      ))}
      <button className="newJobBtn" onClick={() => setCreateJob(true)}>
        Create Job Experience
      </button>
    </div>
  );
};

export default JobForm;
