import classes from "./AddMedication.module.css";

export default function AddMedication() {
  return (
    <section className={classes["add-medication-section-container"]}>
      <div className={classes["add-medication-container"]}>
        <h2>Add New Medication</h2>
        <form>
          <div className={classes["input-control"]}>
            <label htmlFor="select-medication">Select Medication</label>
            <select id="select-medication" name="select-medication">
              <option value="Medicine 1">Medicine 1</option>
              <option value="Medicine 2">Medicine 2</option>
              <option value="Medicine 3">Medicine 3</option>
              <option value="Medicine 4">Medicine 4</option>
            </select>
            <div className={classes["input-sub-container"]}>
              <div className={classes["input-control"]}>
                <label>Frequency</label>
                <select id="frequency" name="frequency">
                  <option value="freq 1">freq 1</option>
                  <option value="freq 2">freq 2</option>
                  <option value="freq 3">freq 3</option>
                  <option value="freq 4">Medicine 4</option>
                </select>
              </div>
              <div className={classes["input-control"]}>
                <label>Number of doses</label>
                <select id="doses" name="doses">
                  <option value="dose 1">dose 1</option>
                  <option value="dose 2">dose 2</option>
                  <option value="dose 3">dose 3</option>
                  <option value="dose 4">dose 4</option>
                </select>
              </div>
            </div>
            <div className={classes["input-control"]}>
              <label>Medication Type</label>
              <select id="medication-type" name="medication-type">
                <option value="Prescription">Prescription</option>
                <option value="Over the counter">Over the counter</option>
              </select>
            </div>
            <div className={classes["input-control"]}>
              <p>Reminder Location</p>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="phone"
                    name="phone"
                    value="phone"
                  />
                  <label htmlFor="phone">Phone</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="tablet"
                    name="tablet"
                    value="Tablet"
                  />
                  <label htmlFor="tablet">Tablet</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="smart-watch"
                    name="smart-watch"
                    value="Smart watch"
                  />
                  <label htmlFor="smart-watch">Smart watch</label>
                </div>
              </div>
            </div>
            <div className={classes["input-control"]}>
              <label>Select Date & Time</label>
            </div>
            <div className={classes["input-control"]}>
              <label>Enter notes about medication</label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
