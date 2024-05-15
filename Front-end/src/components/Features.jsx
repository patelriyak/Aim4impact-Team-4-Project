import classes from "./Features.module.css";

export default function Features({ feature }) {
  return (
    <div className={classes["feature-container"]}>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
}
