export interface CoursemologyUrls {
  homeUrl: string;
  signUpUrl: string;
  forgotPasswordUrl: string;
  resendConfirmationEmailUrl: string;
}

const DEFAULT_ORIGIN = import.meta.env.DEV
  ? "http://lvh.me/8080"
  : "https://coursemology.org";

const generateCoursemologyUrls = (redirectOrigin: string): CoursemologyUrls => {
  return {
    homeUrl: redirectOrigin,
    signUpUrl: `${redirectOrigin}/users/sign_up`,
    forgotPasswordUrl: `${redirectOrigin}/users/password/new`,
    resendConfirmationEmailUrl: `${redirectOrigin}/users/confirmation/new`,
  };
};

export const useCoursemologyUrls = (baseUrl?: string): CoursemologyUrls => {
  const redirectURIParam = new URL(window.location.href).searchParams.get(
    "redirect_uri",
  );

  let redirectionUrl = baseUrl ?? DEFAULT_ORIGIN;
  if (redirectURIParam !== null) {
    const decodedRedirectURL = new URL(decodeURIComponent(redirectURIParam));
    const redirectOrigin = decodedRedirectURL["origin"];

    redirectionUrl = redirectOrigin;
  }
  return generateCoursemologyUrls(redirectionUrl);
};
