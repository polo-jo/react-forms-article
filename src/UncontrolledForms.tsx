import * as React from 'react';

export function UncontrolledForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Array.from(formData.entries()));
  }

  return (
    <section>
      <h2>React Controlled Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input type="text" name="name" id="name" className="text-field" required />
        </div>

        <div className="form-field">
          <label htmlFor="age" className="label">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            className="number-field"
            min={0}
            max={150}
            step={1}
            required
          />
        </div>
        <input type="submit" value="Submit!" style={{ width: '5rem' }} />
      </form>
    </section>
  );
}

export function UncontrolledFormWithRefs(): JSX.Element {
  const nameField = React.useRef<null | HTMLInputElement>(null);
  const ageField = React.useRef<null | HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`submitting
      name: ${nameField.current?.value}
      age: ${ageField.current?.value}`);
  }

  return (
    <section>
      <h2>React Controlled Form with Refs</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="text-field"
            required
            ref={nameField}
          />
        </div>

        <div className="form-field">
          <label htmlFor="age" className="label">
            Age
          </label>
          <input
            ref={ageField}
            type="number"
            name="age"
            id="age"
            className="number-field"
            min={0}
            max={150}
            step={1}
            required
          />
        </div>
        <input type="submit" value="Submit!" style={{ width: '5rem' }} />
      </form>
    </section>
  );
}
