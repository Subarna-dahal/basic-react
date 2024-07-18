const Form = () => {
  const submitFunction = (e) => {
    e.preventDefault();
    const inputData = document.getElementById("name").value;
    const sliderData = document.getElementById("slider").value;
    const birthDate = document.getElementById("borndate").value;

    const drinkOptions = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const drinkValues = Array.from(drinkOptions).map((option) => option.value);
  };

  return (
    <div>
      <form onSubmit={(e) => submitFunction(e)}>
        <label>Name:</label>
        <input type="text" required id="name" />

        <label>How old are you?</label>
        <input type="range" min="0" max="100" step="1" id="slider" />

        <label>What do you like to drink?</label>
        <label>
          Coffee:
          <input type="checkbox" value="Coffee" />
        </label>
        <label>
          Tea:
          <input type="checkbox" value="Tea" />
        </label>
        <label>
          Cold Drink:
          <input type="checkbox" value="Cold Drink" />
        </label>

        <label>What year were you born?</label>
        <input type="date" id="borndate" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
