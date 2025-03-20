import type { Currency } from './currency';
import type { UserRoles } from './enums/userroles';
import type { Language } from './language';
// import type { City } from '~/types/city';
// import type { Country } from '~/types/country';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  birthDate: string;
  gender: string;
  Currency: Currency;
  Language: Language;
  isAuthor: boolean;
  // City: City;
  // Country: Country;
  balance: number;
  authorStats: {
    coinsEarned: number;
    viewsCount: number;
  };
  Subscription: {
    id: string;
    price: number;
    activeEndDate: Date;
    pastDueEndDate: Date;
    status: string;
    renew: boolean;
    Plan: {
      id: string;
      title: string;
      shortTitle: string;
      active: boolean;
    };
  };
  Author: {
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    description: string;
    avatar: {
      path: string;
      fileName: string;
      width: number;
      height: number;
      size: number;
      isOriginal: string;
    };
    bgImage: {
      path: string;
      fileName: string;
      width: number;
      height: number;
      size: number;
      isOriginal: string;
    };
    regalia: string;
    landingUrl: string;
    index: number;
    createdAt: Date;
    Role: {
      id: string;
      name: UserRoles;
      displayName: string;
    };
  };
};
