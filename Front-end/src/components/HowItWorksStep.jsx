import classes from "./HowItWorksStep.module.css";

export default function HowItWorksStep({ step }) {
  return (
    <div className={classes["step-container"]}>
      <p className={classes["step-number"]}>{step.number}</p>
      <div className={classes["step-details"]}>
        <h3>{step.title}</h3>
        <p className={classes["step-desc"]}>{step.description}</p>
      </div>
    </div>
  );
}
