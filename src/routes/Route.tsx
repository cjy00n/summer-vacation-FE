import {
  AddDiaryPage,
  CalandarPage,
  FeedPage,
  HomePage,
  LoginPage,
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
    haveBottomAppBar: true,
  },

  CALANDAR_PAGE: {
    path: "/calandar",
    link: "/calandar",
    element: <CalandarPage />,
    haveBottomAppBar: true,
  },

  PROFILE_PAGE: {
    path: "/profile",
    link: "/profile",
    element: <ProfilePage />,
    haveBottomAppBar: true,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
