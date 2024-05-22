import React, { useCallback, useContext, useState } from "react";

import cls from "./AboutusPage.module.scss";
import FooterMobile from "widgets/Footer/ui/FooterMobile/FooterMobile";
import AboutusSection1 from "./AboutusSection1/AboutusSection1";
import AboutusSection2 from "./AboutusSection2/AboutusSection2";

import { classNames } from "shared/lib/classNames/classNames";
import { Footer } from "widgets/Footer";
import { DimensionsContext } from "app/providers/DimensionProvider/DimensionsProvider";
import { AnimationBox } from "entities/AnimationBox";

interface AboutusPageProps {
  className?: string;
}

const AboutusPage = ({ className }: AboutusPageProps) => {
  const { width, height } = useContext(DimensionsContext);
  const [exitAnimation, setExitAnimation] = useState(false);

  const animationSection1Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const setterExitAnimation = useCallback((value: boolean) => {
    setExitAnimation(value);
  }, []);
  return (
    <div className={classNames(cls.AboutusPage, {}, [className])}>
      <div className={cls.AboutusPage__content}>
        <AnimationBox
          visiblePart={400}
          variants={animationSection1Variants}
          exitAnimation={false}
          // setExit={setterExitAnimation}
          style={{ width: "100%" }}
        >
          <AboutusSection2 />
        </AnimationBox>
        <AnimationBox
          visiblePart={200}
          variants={animationSection1Variants}
          exitAnimation={exitAnimation}
          setExit={setterExitAnimation}
        >
          <AboutusSection1 />
        </AnimationBox>
      </div>
      {width > 1200 ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default AboutusPage;
