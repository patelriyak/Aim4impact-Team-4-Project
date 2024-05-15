import classes from "./MedicineCard.module.css";

export default function MedicineCard({ medicine }) {
  return (
    <article className={classes["medicine-card-container"]}>
      <img src={medicine.image} />
      <div className={classes["medicine-details"]}>
        <div>
          <h3>{medicine.name}</h3>
          <p>Frequency: {medicine.frequency}</p>
          <p>Schedule: {medicine.schedule}</p>
        </div>
        <div>
          <p>Dosage Strength</p>
          <p>{medicine.dosage}</p>
        </div>
        <div>
          <p>----l</p>
        </div>
      </div>
    </article>
  );
}
