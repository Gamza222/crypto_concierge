import { AboutusPage } from 'pages/AboutusPage';
import { MainPageAsync } from 'pages/MainPage';
import { NotFoundPageAsync } from 'pages/NotFoundPage';
import { SupportPage } from 'pages/SupportPage';
import Wallet from 'pages/Wallet/ui/Wallet';
import React from 'react';

import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  WALLET = 'wallet',
  OUR_FEATURES = 'our_features',
  BUILD = 'build',
  SUPPORT = 'support',
  ABOUT_US = 'about_us',
  // ABOUT = 'about',
  // PROFILE = 'profile',

  NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.WALLET]: 'wallet',
  [AppRoutes.OUR_FEATURES]: 'our_features',
  [AppRoutes.BUILD]: 'build',
  [AppRoutes.SUPPORT]: 'support',
  [AppRoutes.ABOUT_US]: 'about_us',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPageAsync />,
  },
  [AppRoutes.WALLET]: {
    path: RoutePath.wallet,
    element: <Wallet />,
  },
  [AppRoutes.OUR_FEATURES]: {
    path: RoutePath['our_features'],
    element: <NotFoundPageAsync />,
  },
  [AppRoutes.BUILD]: {
    path: RoutePath.build,
    element: <NotFoundPageAsync />,
  },
  [AppRoutes.SUPPORT]: {
    path: RoutePath.support,
    element: <SupportPage />,
  },
  [AppRoutes.ABOUT_US]: {
    path: RoutePath.about_us,
    element: <AboutusPage />,
  },
};
