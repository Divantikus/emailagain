import { AnimContext } from "src/context/context";
import { useState } from "react";
import { motion } from "framer-motion";
import { Form } from "./form/Form";
import style from "./mainFormComponent.module.scss";

export const MainFormComponent = (): JSX.Element => {
  const [emailIsHidden, setEmailIsHidden] = useState(false);
  return (
    <AnimContext.Provider value={{ setEmailIsHidden, emailIsHidden }}>
      <motion.section
        className={style.allForm}
        animate={emailIsHidden ? { height: 20, paddingTop: 0 } : {}}
      >
        <Form />
      </motion.section>
    </AnimContext.Provider>
  );
};
