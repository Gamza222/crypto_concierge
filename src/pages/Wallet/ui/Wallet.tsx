import React, { useContext } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Wallet.module.scss';
import { AnimationBox } from 'entities/AnimationBox';
import Title from 'shared/ui/Title/Title';
import { useTranslation } from 'react-i18next';
import { DownloadGoldenButtons } from 'entities/DownloadGoldenButtons';
import DescriptionText from 'shared/ui/DescriptionText/DescriptionText';
import { Footer } from 'widgets/Footer';
import { DimensionsContext } from 'app/providers/DimensionProvider/DimensionsProvider';
import FooterMobile from 'widgets/Footer/ui/FooterMobile/FooterMobile';
import WalletContent from './WalletContent/WalletContent';

interface WalletProps {
  className?: string;
}

const Wallet = ({ className }: WalletProps) => {
  const { t } = useTranslation('wallet');
  const { width, height } = useContext(DimensionsContext);

  return (
    <div className={classNames(cls.Wallet, {}, [className])}>
      <WalletContent className={cls.WalletContent} />
      {width > 1200 ? <Footer /> : <FooterMobile />}
    </div>
  );
};

export default Wallet;
