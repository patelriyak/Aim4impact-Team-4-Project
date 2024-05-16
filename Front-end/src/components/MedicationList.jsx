import classes from "./MedicationList.module.css";
import MedicineCard from "./MedicineCard";
import bactrimImage from "../assets/Bactrim.jpg";
import colyMycinImage from "../assets/coly-mycin.jpg";
import hydroxyzinImage from "../assets/hydroxyzin.jpg";

const PRESCRIPTION_MEDICINE_LIST = [
  {
    image: bactrimImage,
    name: "Bactrim",
    frequency: "1",
    schedule: "1",
    dosage: "1",
  },
  {
    image: colyMycinImage,
    name: "Coly Mycin",
    frequency: "1",
    schedule: "1",
    dosage: "1",
  },
  {
    image: hydroxyzinImage,
    name: "Hydroxyzin",
    frequency: "1",
    schedule: "1",
    dosage: "1",
  },
];

const OVER_THE_COUNTER_LIST = [
  {
    image: "",
    name: "medcine1",
    frequency: "1",
    schedule: "1",
    dosage: "1",
  },
  {
    image: "",
    name: "medicine2",
    frequency: "1",
    schedule: "1",
    dosage: "1",
  },
  {
    image: "",
    name: "medicine3",
    frequency: "1",
    schedule: "1",
    dosage: "1",
  },
];

export default function MedicationList() {
  return (
    <section className={classes["medication-list-container"]}>
      <div>
        <h2>PRESCRIPTION LIST</h2>
        <div className={classes["medicine-list-container"]}>
          {PRESCRIPTION_MEDICINE_LIST.map((medicine, index) => (
            <MedicineCard
              key={`${medicine.title}${index}`}
              medicine={medicine}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>OVER-THE-COUNTER</h2>
        <div className={classes["medicine-list-container"]}>
          {OVER_THE_COUNTER_LIST.map((medicine, index) => (
            <MedicineCard
              key={`${medicine.title}${index}`}
              medicine={medicine}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
