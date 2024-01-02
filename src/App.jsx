import React from "react";
import styles from "./style";
import { Navbar, Business, CTA, Footer, Hero, Stats } from "./components";
import { ToastContainer, toast } from "react-toastify";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
