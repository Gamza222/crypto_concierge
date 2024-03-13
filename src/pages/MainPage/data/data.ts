import { PicBoxData } from 'entities/PicBox';
import { TextBoxData } from 'shared/ui/TextBox/TextBox';

import swap from 'shared/assets/icons/swap.png';
import buy from 'shared/assets/icons/buy.png';
import staking from 'shared/assets/icons/staking.png';
import delivery from 'shared/assets/icons/delivery.png';

import security from 'shared/assets/icons/security-min.png';
import portfolio from 'shared/assets/icons/portfolio-min.png';
import storingData from 'shared/assets/icons/storingdata-min.png';
import doWhatYouWant from 'shared/assets/icons/dowhatyouwant-min.png';
import fiatForEveryone from 'shared/assets/icons/fiatforeveryone-min.png';
import ai from 'shared/assets/icons/ai-min.png';

export const optionsData: PicBoxData[] = [
  {
    Pic: swap,
    PicWidth: '160px',
    title: 'Swap',
    description: 'fast exchange of tokens in different networks',
  },
  {
    Pic: buy,
    PicWidth: '180px',
    title: 'Buy',
    description: 'Buy any token with fiat in crypto-concierge app ',
  },
  {
    Pic: staking,
    PicWidth: '200px',
    title: 'Staking',
    description: 'Stake your token and earn maximum percentage apr/apy',
  },
  {
    Pic: delivery,
    PicWidth: '180px',
    title: 'Cash Delivery',
    description: 'Exchange crypto for cash and vice versa using our couriers',
  },
];

// to change go to public/locales/en/learnData
export const learnData: TextBoxData[] = [
  {
    title: 'title1',
    descr: 'descr1',
    pic: security,
  },
  {
    title: 'title2',
    descr: 'descr2',
    pic: portfolio,
  },
  {
    title: 'title3',
    descr: 'descr3',
    pic: storingData,
  },
  {
    title: 'title4',
    descr: 'descr4',
    pic: doWhatYouWant,
  },
  {
    title: 'title5',
    descr: 'descr5',
    pic: fiatForEveryone,
  },
  {
    title: 'title6',
    descr: 'descr6',
    pic: ai,
  },
];
