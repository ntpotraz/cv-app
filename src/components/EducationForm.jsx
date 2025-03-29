import "../styles/Form.css";

const EducationForm = ({ education, setEducation }) => {
  return (
    <form className="cvForm">
      <label className="cvLabel">
        School
        <input
          className="cvInput"
          type="text"
          value={education.school}
          onChange={(e) =>
            setEducation({ ...education, school: e.currentTarget.value })
          }
        />
      </label>
      <div>
        <label className="cvLabel">
          Major
          <input
            className="cvInput"
            type="text"
            value={education.major}
            onChange={(e) =>
              setEducation({ ...education, major: e.currentTarget.value })
            }
          />
        </label>
        <label className="cvLabel">
          Completion Date
          <input
            className="cvInput"
            type="date"
            value={education.compDate}
            onChange={(e) =>
              setEducation({ ...education, compDate: e.currentTarget.value })
            }
          />
        </label>
      </div>
    </form>
  );
};

export default EducationForm;
