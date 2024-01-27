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
  haveTabBar?: boolean;
}

interface Routes {
  [key: string]: RouteItem;
}

export const ROUTE: Routes = {
  HOME_PAGE: {
    path: "/",
    link: "/",
    element: <HomePage />,
    haveTabBar: true,
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
    haveTabBar: true,
  },

  ADD_DIARY_PAGE: {
    path: "/add",
    link: "/add",
    element: <AddDiaryPage />,
    haveTabBar: true,
  },

  CALANDAR_PAGE: {
    path: "/calendar",
    link: "/calandar",
    element: <CalandarPage />,
    haveTabBar: true,
  },

  PROFILE_PAGE: {
    path: "/profile",
    link: "/profile",
    element: <ProfilePage />,
    haveTabBar: true,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
