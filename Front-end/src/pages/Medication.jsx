import classes from "./Medication.module.css";
import AddMedication from "../components/AddMedication";
import MedicationList from "../components/MedicationList";
import SideBar from "../components/SideBar";

export default function MedicationPage() {
  return (
    <section className={classes["medication-page-container"]}>
      <SideBar className={classes["side-bar-section"]} />
      <MedicationList />
      <AddMedication />
    </section>
  );
}
