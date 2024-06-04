import React from 'react';
import {Home, WbSunny, DateRange, PersonSearch, FindInPage, ContactSupport} from "@mui/icons-material";

export const SidebarData = [
    {
      title: 'Home',
      path: "/",
      icon: <Home />,
      cName: 'nav-text'
    },
    {
      title: 'Weather',
      path: '/weather',
      icon: <WbSunny />,
      cName: 'nav-text'
    },
    {
      title: 'Calendar',
      path: '/calendar',
      icon: <DateRange />,
      cName: 'nav-text'
    },
    {
      title: 'Horoscope',
      path: '/horoscope',
      icon: <PersonSearch />,
      cName: 'nav-text'
    },
    {
      title: 'Manual',
      path: '/manual',
      icon: <FindInPage/>,
      cName: 'nav-text'
    },
  ];