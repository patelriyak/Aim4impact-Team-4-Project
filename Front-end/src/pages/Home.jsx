import heroImage from "../assets/hero-image.png";
import Features from "../components/Features";
import HowItWorksStep from "../components/HowItWorksStep";
import classes from "./Home.module.css";

const STEPS = [
  {
    number: 1,
    title: "Create Your Profile",
    description:
      "Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.",
  },
  {
    number: 2,
    title: "Choose Your service",
    description:
      "Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.",
  },
  {
    number: 3,
    title: "Try Our Feature",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ornare venenatis feugiat ligula habitant arcu lectus volutpat vulputate. Sodales dolor in vulputate mattis ultrices in odio.",
  },
];

const FEATURES = [
  {
    number: 1,
    title: "Stay on Track",
    description:
      "Manage medications, receive reminders, and track adherence rates.",
  },
  {
    number: 2,
    title: "Gain Knowledge",
    description:
      "Access educational resources and explanations tailored to your needs.",
  },
  {
    number: 3,
    title: "Embrace Inclusivity",
    description:
      "Find recommendations and resources that reflect your unique background and health concerns.",
  },
  {
    number: 4,
    title: "Make Informed Decisions",
    description:
      "Get personalized recommendations for medications, over-the-counter products, and healthy practices.",
  },
  {
    number: 5,
    title: "Simplify Healthcare",
    description:
      "Seamlessly integrate medication management and health resources into your daily routine",
  },
];
export default function HomePage() {
  return (
    <>
      <section className={classes["hero-section"]}>
        <div className={classes["hero-text-container"]}>
          <h1>Get started with our health care assistant management</h1>
          <p>GET CARE NOW</p>
          <div className={classes["buttons-container"]}>
            <button className="primary">Patient</button>
            <button className="secondary">Care Giver</button>
          </div>
        </div>
        <div className={classes["hero-image-container"]}>
          <img src={heroImage} width="300" height="300" />
        </div>
      </section>
      <section className={classes["how-it-works-section"]}>
        <h2>How it works</h2>
        <div className={classes["how-it-works-container"]}>
          {STEPS.map((step) => (
            <HowItWorksStep key={step.number} step={step} />
          ))}
        </div>
      </section>
      <section className={classes["services-section"]}>
        <h2>Top Services We Offer</h2>
        <div className={classes["services-container"]}>
          {FEATURES.map((feature) => (
            <Features key="feature.title" feature={feature} />
          ))}
        </div>
      </section>
      
    </>
  );
}
