import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./FooterNav.module.scss";
import { useTranslation } from "react-i18next";

interface FooterNavProps {
  className?: string;
}

const FooterNav = ({ className }: FooterNavProps) => {
  const { t } = useTranslation("footer");
  return (
    <div className={classNames(cls.FooterNav, {}, [className])}>
      <div className={cls.Element}>
        <h5 className={cls.Element__title}>{t("Wallet")}</h5>
        <div className={cls.Element__items}>
          <a
            href="https://app.crypto-concierge.com/auth"
            target="_blank"
            className={cls.Element__items__link}
          >
            {t("Mobile App")}
          </a>
          <a
            href="https://app.crypto-concierge.com/auth"
            target="_blank"
            className={cls.Element__items__link}
          >
            {t("Web version")}
          </a>
        </div>
      </div>
      <div className={cls.Element}>
        <h5 className={cls.Element__title}>{t("About")}</h5>
        <div className={cls.Element__items}>
          <a href="/about_us" className={cls.Element__items__link}>
            {t("About us")}
          </a>
          <a
            href="https://crypto-concierge.com/privacy-policy"
            className={cls.Element__items__link}
          >
            {t("Privacy Policy")}
          </a>
          {/* <a href="#" className={cls.Element__items__link}>
            {t("Blog")}
          </a> */}
        </div>
      </div>
      {/* <div className={cls.Element}>
        <h5 className={cls.Element__title}>{t('Support')}</h5>
        <div className={cls.Element__items}>
          <a href='#' className={cls.Element__items__link}>
            {t('Contact Us')}
          </a>
          <a href='#' className={cls.Element__items__link}>
            {t('FAQ')}
          </a>
        </div>
      </div> */}
      {/* <div className={cls.Element}>
        <h5 className={cls.Element__title}>{t("Coins")}</h5>
        <div className={cls.Element__items}>
          <a href="#" className={cls.Element__items__link}>
            {t("Ethereum (ETH)")}
          </a>
          <a href="#" className={cls.Element__items__link}>
            {t("Smart Chain (BSC)")}
          </a>
          <a href="#" className={cls.Element__items__link}>
            {t("Tether (USDT)")}
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default FooterNav;
