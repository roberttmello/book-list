import './Newsletter.css';

const Newsletter = () => {
  const handleEmailInput = (e) => {
    console.log('handle form input');
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleButtonClick = () => {
    alert('email registered successfully');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
    
  }

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Newsletter</h2>
        <input
          type="email"
          name="email"
          onChange={handleEmailInput}
          placeholder="Email"
        />
        <button type='submit'>submit form</button>
      </form>
      <button onClick={handleButtonClick}>Send</button>
    </section>
  );
};
export default Newsletter;
