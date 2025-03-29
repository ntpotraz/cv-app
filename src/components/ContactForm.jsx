import "../styles/Form.css";

const ContactForm = ({contact, setContact}) => {

  return (
    <form className="cvForm">
      <label className="cvLabel">
        Name
        <input 
          className="cvInput" 
          type="text" 
          value={contact.name}
          onChange={(e) => setContact({...contact, name: e.currentTarget.value})}
        />
      </label>
      <label className="cvLabel">
        Email
        <input 
          className="cvInput" 
          type="email" 
          value={contact.email}
          onChange={(e) => setContact({...contact, email: e.currentTarget.value})}
        />
      </label>
      <label className="cvLabel">
        Phone Number
        <input 
          className="cvInput" 
          type="tel" 
          value={contact.phone}
          onChange={(e) => setContact({...contact, phone: e.currentTarget.value})}
        />
      </label>
    </form>
  );
};

export default ContactForm;
