import {
  AddDiaryPage,
  AddDiaryTranslatePage,
  CalendarPage,
  FeedPage,
  HomePage,
  LoginPage,
  NotificationPage,
  ProfilePage,
} from "../pages";

interface RouteItem {
  path: string;
  link: string;
  element: JSX.Element;
  haveBottomAppBar?: boolean;
}

interface Routes {
  [key: string]: RouteItem;
}

export const ROUTE: Routes = {
  HOME_PAGE: {
    path: "/",
    link: "/",
    element: <HomePage />,
    haveBottomAppBar: true,
  },

  LOGIN_PAGE: {
    path: "/login",
    link: "/login",
    element: <LoginPage />,
  },

  FEED_PAGE: {
    path: "/feed",
    link: "/feed",
    element: <FeedPage />,
    haveBottomAppBar: true,
  },

  ADD_DIARY_PAGE: {
    path: "/add",
    link: "/add",
    element: <AddDiaryPage />,
  },

  ADD_DIARY_TRANSLATE_PAGE: {
    path: "/add/translate",
    link: "/add/translate",
    element: <AddDiaryTranslatePage />,
  },

  CALENDAR_PAGE: {
    path: "/calendar",
    link: "/calendar",
    element: <CalendarPage />,
    haveBottomAppBar: true,
  },

  PROFILE_PAGE: {
    path: "/profile",
    link: "/profile",
    element: <ProfilePage />,
    haveBottomAppBar: true,
  },

  NOTIFICATION_PAGE: {
    path: "/notification",
    link: "/notification",
    element: <NotificationPage />,
    haveBottomAppBar: false,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
