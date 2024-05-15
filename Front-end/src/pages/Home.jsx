import heroImage from "../assets/hero-image.jpg";
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Facilisis egestas placerat ultrices cursus in. Id nullam nec adipiscing senectus. Enim in morbi augue bibendum dolor adipiscing. Sed vel nibh quis risus adipiscing morbi suspendisse.",
  },
  {
    number: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur. Purus viverra eget luctus adipiscing pharetra praesent porttitor. Nisi cursus cras eu purus imperdiet tortor in.",
  },
  {
    number: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur. Quisque rutrum fermentum consequat felis a.",
  },
  {
    number: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur. Vulputate mattis nisi eu volutpat ipsum erat.",
  },
  {
    number: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur. Risus congue ultrices vestibulum turpis nulla turpis nibh condimentum.",
  },
];
export default function HomePage() {
  return (
    <>
      <section className={classes["hero-section"]}>
        <div>
          <h1>Get started with our health care assistant management</h1>
        </div>
        <div>
          <img src={heroImage} width="300" height="300" />{" "}
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
            <Features key="feature.number" feature={feature} />
          ))}
        </div>
      </section>
      
    </>
  );
}
