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
  AddDiaryBeforePage,
  AddDiaryDrawingSelectPage,
  AddDiaryCompletePage,
  StartPage,
  ProfileMorePage,
  NotFoundPage,
} from "../pages";

interface RouteItem {
  path: string;
  link: string;
  element: JSX.Element;
  authRequired?: boolean;
  haveBottomAppBar?: boolean;
}

interface Routes {
  [key: string]: RouteItem;
}

export const ROUTE: Routes = {
  HOME_PAGE: {
    path: "/home",
    link: "/home",
    element: <HomePage />,
    haveBottomAppBar: true,
  },

  LOGIN_PAGE: {
    path: "/auth",
    link: "/auth",
    element: <AuthPage />,
    authRequired: false,
  },

  ONBOARDING_PAGE: {
    path: "/onBoarding",
    link: "/onBoarding",
    element: <OnBoardingPage />,
  },

  START_PAGE: {
    path: "/start",
    link: "/start",
    element: <StartPage />,
  },

  FEED_PAGE: {
    path: "/feed",
    link: "/feed",
    element: <FeedPage />,
    haveBottomAppBar: true,
  },

  FEED_DETAIL_PAGE: {
    path: "/feed/:id",
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

  ADD_DIARY_COMPLETE_PAGE: {
    path: "/add/complete",
    link: "/add/complete",
    element: <AddDiaryCompletePage />,
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

  PROFILE_MORE_PAGE: {
    path: "/profile/more",
    link: "/profile/more",
    element: <ProfileMorePage />,
  },

  NOTIFICATION_PAGE: {
    path: "/notification",
    link: "/notification",
    element: <NotificationPage />,
    haveBottomAppBar: false,
  },

  NOT_FOUND_PAGE: {
    path: "*",
    link: "*",
    element: <NotFoundPage />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
