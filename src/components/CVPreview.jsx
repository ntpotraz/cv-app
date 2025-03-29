import "../styles/CVPreview.css";

const CVPreview = ({ contact, education, activeJobs }) => {
  return (
    <div className="cvPreview">
      {contact.name === "" &&
      contact.email === "" &&
      contact.phone === "" ? null : (
        <div className="contact">
          <h1>{contact.name}</h1>
          <span>
            {contact.email}
            {contact.email !== "" && contact.phone !== "" ? " • " : ""}
            {contact.phone}
            <hr />
          </span>
        </div>
      )}
      {education.school === "" &&
      education.major === "" &&
      education.compDate === "" ? null : (
        <div className="education">
          <h2 className="sectionHeading">Education</h2>
          <div>
            <h3 className="unit">{education.school}</h3>
            <span>Graduation Date:</span>
          </div>
          <div>
            <span className="italic info">{education.major}</span>
            <span>{education.compDate}</span>
          </div>
        </div>
      )}
      {activeJobs.length <= 0 ? null : (
        <div className="jobExperience">
          <h2 className="sectionHeading">Job Experience</h2>
          {activeJobs.map((job) => (
            <div key={job.id}>
              <h3 className="unit">{job.position}</h3>
              <span className="italic info">{job.companyName}<br /></span>
              {job.startDate !== "" && job.endDate !== "" ? (
                <span className="info workDates">
                  From {job.startDate} to {job.endDate}
                </span>
              ) : null}
              <p className="info">{job.responsibilities}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CVPreview;
