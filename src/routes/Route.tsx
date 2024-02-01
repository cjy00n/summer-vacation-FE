import {
  AddDiaryPage,
  AddDiaryTranslatePage,
  CalendarPage,
  FeedPage,
  FeedDetailPage,
  HomePage,
  AuthPage,
  NotificationPage,
  ProfilePage,
  OnBoardingPage,
  AddDiaryConfirmPage,
  AddDiaryChoicePage,
  AddDiaryPreviewPage,
  AddDiaryFinishPage,
  AddDiaryBeforePage,
  AddDiaryDrawingSelectPage,
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
    path: "/auth",
    link: "/auth",
    element: <AuthPage />,
  },

  ONBOARDING_PAGE: {
    path: "/onBoarding",
    link: "/onBoarding",
    element: <OnBoardingPage />,
  },

  FEED_PAGE: {
    path: "/feed",
    link: "/feed",
    element: <FeedPage />,
    haveBottomAppBar: true,
  },

  FEED_DETAIL_PAGE: {
    path: "/feed/:diary_id",
    link: "/feed",
    element: <FeedDetailPage />,
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

  ADD_DIARY_CONFIRM_PAGE: {
    path: "/add/confirm",
    link: "/add/confirm",
    element: <AddDiaryConfirmPage />,
  },

  ADD_DIARY_CHOICE_PAGE: {
    path: "/add/choice",
    link: "/add/choice",
    element: <AddDiaryChoicePage />,
  },

  ADD_DIARY_BEFORE_PAGE: {
    path: "/add/before",
    link: "/add/before",
    element: <AddDiaryBeforePage />,
  },

  ADD_DIARY_PREVIEW_PAGE: {
    path: "/add/preview",
    link: "/add/preview",
    element: <AddDiaryPreviewPage />,
  },

  ADD_DIARY_DRAWING_SELECT_PAGE: {
    path: "/add/select",
    link: "/add/select",
    element: <AddDiaryDrawingSelectPage />,
  },

  ADD_DIARY_FINISH_PAGE: {
    path: "/add/finish",
    link: "/add/finish",
    element: <AddDiaryFinishPage />,
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
