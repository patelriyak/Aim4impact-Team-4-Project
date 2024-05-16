import { useState } from "react";
import classes from "./AddMedication.module.css";
import { useForm } from "react-hook-form";

export default function AddMedication() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showAddMedicationForm = () => {
    setIsFormVisible((prevState) => {
      return !prevState;
    });
  };
  const form = useForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = form;

  const onSubmit = (data) => {
    console.log(data);
    isSubmitSuccessful && reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };

  const handleReset = () => {
    reset();
  };
  return (
    <section className={classes["add-medication-section-container"]}>
      <div className={classes["add-button-container"]}>
        {!isFormVisible && (
          <button onClick={showAddMedicationForm} className="primary">
            + Add Medication
          </button>
        )}
      </div>
      {isFormVisible && (
        <div className={classes["add-medication-container"]}>
          <div className={classes["close-button-container"]}>
            {isFormVisible && (
              <button
                onClick={showAddMedicationForm}
                className={classes["close-button"]}
              >
                X
              </button>
            )}
          </div>
          <h2>Add New Medication</h2>

          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div
              className={`${classes["input-control"]} ${
                !isSubmitSuccessful && errors["select-medication"]
                  ? classes["form-input-error"]
                  : undefined
              }`}
            >
              <p className={classes["form-error-message"]}>
                {!isSubmitSuccessful && errors["select-medication"]?.message}
              </p>
              <label htmlFor="select-medication">Medication Name</label>
              <input
                type="text"
                id="medication-name"
                {...register("select-medication", {
                  required: {
                    value: true,
                    message: "Please enter medication name",
                  },
                })}
              />
            </div>
            <div className={classes["input-sub-container"]}>
              <div
                className={`${classes["input-control"]} ${
                  !isSubmitSuccessful && errors.frequency
                    ? classes["form-input-error"]
                    : undefined
                }`}
              >
                <p className={classes["form-error-message"]}>
                  {!isSubmitSuccessful && errors.frequency?.message}
                </p>
                <label>Frequency</label>
                <select
                  id="frequency"
                  {...register("frequency", {
                    required: {
                      value: true,
                      message: "Please select frequency",
                    },
                  })}
                >
                  <option value="" selected disabled hidden>
                    Select Frequency
                  </option>
                  <option value="Once-d">Once daily</option>
                  <option value="Twice-d">Twice daily</option>
                  <option value="Three-times-d">Three times daily</option>
                  <option value="Four-times-d">Four times daily</option>
                  <option value="As-needed">As needed</option>
                </select>
              </div>
              <div
                className={`${classes["input-control"]} ${
                  !isSubmitSuccessful && errors.doses
                    ? classes["form-input-error"]
                    : undefined
                }`}
              >
                <p className={classes["form-error-message"]}>
                  {!isSubmitSuccessful && errors.doses?.message}
                </p>
                <label>Number of doses</label>
                <select
                  id="doses"
                  {...register("doses", {
                    required: {
                      value: true,
                      message: "Please select dose value",
                    },
                  })}
                >
                  <option value="" selected disabled hidden>
                    Select Dose
                  </option>
                  <option value="dose 1">1 Tablet</option>
                  <option value="dose 1">2 Tablet</option>
                  <option value="dose 1">1/2 Tablet</option>
                </select>
              </div>
            </div>
            <div
              className={`${classes["input-control"]} ${
                !isSubmitSuccessful && errors["medication-type"]
                  ? classes["form-input-error"]
                  : undefined
              }`}
            >
              <p className={classes["form-error-message"]}>
                {!isSubmitSuccessful && errors["medication-type"]?.message}
              </p>
              <label>Medication Type</label>
              <select
                id="medication-type"
                {...register("medication-type", {
                  required: {
                    value: true,
                    message: "Please select medication type",
                  },
                })}
              >
                <option value="" selected disabled hidden>
                  Select Medication Type
                </option>
                <option value="Prescription">Prescription</option>
                <option value="Over the counter">Over the counter</option>
              </select>
            </div>
            <div className={classes["input-control"]}>
              <p className={classes["input-reminder-heading"]}>
                Reminder Location
              </p>
              <div className={classes["input-reminder-options"]}>
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
              <textarea
                id="medication-notes"
                {...register("medication-notes")}
                rows="5"
                cols="10"
              />
            </div>

            <div className={classes["form-buttons-container"]}>
              <input
                type="reset"
                onClick={handleReset}
                value="Resest"
                className="secondary"
              />
              <input
                type="submit"
                id="submit"
                value="Submit"
                className="primary"
              />
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
