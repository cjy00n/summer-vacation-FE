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
  AddDiaryConfirmPage,
  AddDiaryChoicePage,
  AddDiaryPreviewPage,
  AddDiaryBeforePage,
  AddDiaryDrawingSelectPage,
  AddDiaryCompletePage,
  StartPage,
  ProfileMorePage,
  NotFoundPage,
  OnBoardingPage,
} from "../pages";
import IntroPage from "../pages/IntroPage";

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
    path: "/",
    link: "/",
    element: <HomePage />,
    haveBottomAppBar: true,
  },

  LOGIN_PAGE: {
    path: "/auth",
    link: "/auth",
    element: <AuthPage />,
    authRequired: false,
  },

  INTRO_PAGE: {
    path: "/intro",
    link: "/intro",
    element: <IntroPage />,
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
    path: "/add-diary",
    link: "/add-diary",
    element: <AddDiaryPage />,
  },

  ADD_DIARY_EDIT_PAGE: {
    path: "/add-diary/:diary_id",
    link: "/add-diary",
    element: <AddDiaryPage />,
  },

  ADD_DIARY_TRANSLATE_PAGE: {
    path: "/add-diary/translate",
    link: "/add-diary/translate",
    element: <AddDiaryTranslatePage />,
  },

  ADD_DIARY_CONFIRM_PAGE: {
    path: "/add-diary/confirm",
    link: "/add-diary/confirm",
    element: <AddDiaryConfirmPage />,
  },

  ADD_DIARY_CHOICE_PAGE: {
    path: "/add-diary/choice",
    link: "/add-diary/choice",
    element: <AddDiaryChoicePage />,
  },

  ADD_DIARY_BEFORE_PAGE: {
    path: "/add-diary/before",
    link: "/add-diary/before",
    element: <AddDiaryBeforePage />,
  },

  ADD_DIARY_PREVIEW_PAGE: {
    path: "/add-diary/preview",
    link: "/add-diary/preview",
    element: <AddDiaryPreviewPage />,
  },

  ADD_DIARY_DRAWING_SELECT_PAGE: {
    path: "/add-diary/select",
    link: "/add-diary/select",
    element: <AddDiaryDrawingSelectPage />,
  },

  ADD_DIARY_COMPLETE_PAGE: {
    path: "/add-diary/complete",
    link: "/add-diary/complete",
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
    haveBottomAppBar: true,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
