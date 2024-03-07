import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface NabvarItemType {
  path: string;
  text: string;
}

export const NavbarItemList: NabvarItemType[] = [
  {
    path: RoutePath.wallet,
    text: 'wallet',
  },
  {
    path: RoutePath['our_features'],
    text: 'our features',
  },
  {
    path: RoutePath.support,
    text: 'support',
  },
  {
    path: RoutePath['about_us'],
    text: 'about us',
  },
];
export const NavbarItemListMobile: NabvarItemType[] = [
  {
    path: RoutePath.main,
    text: 'home',
  },
  {
    path: RoutePath.wallet,
    text: 'wallet',
  },
  {
    path: RoutePath['our_features'],
    text: 'our features',
  },
  {
    path: RoutePath.support,
    text: 'support',
  },
  {
    path: RoutePath['about_us'],
    text: 'about us',
  },
];
