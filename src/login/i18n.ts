import { createUseI18n } from "keycloakify/login";

export const { useI18n } = createUseI18n({
  // NOTE: Here you can override the default i18n messages
  // or define new ones that, for example, you would have
  // defined in the Keycloak admin UI for UserProfile
  // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
  en: {
    // Here we overwrite the default english value for the message "doForgotPassword"
    // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
    doRegister: "Sign up",
    dontYetHaveAnAccount: "Don't yet have an account?",
    forgotPassword: "Forgot Password",
    rememberMe: "Remember me on this device",
    resendConfirmationEmail: "Resend confirmation email",
    troubleSigningIn: "Trouble signing in?",
    usernameOrEmail: "Email address",
    emailNotVerified:
      "Your email account has not been verified. Please verify your email before proceeding.",
  },
  "zh-CN": {
    doRegister: "注册",
    dontYetHaveAnAccount: "还没有账户？",
    forgotPassword: "忘记密码",
    rememberMe: "在这台设备上记住我",
    resendConfirmationEmail: "重新发送确认邮件",
    troubleSigningIn: "登录遇到问题？",
    usernameOrEmail: "电子邮箱地址",
    emailNotVerified:
      "您的电子邮件帐户尚未经过验证。 请在继续之前验证您的电子邮件。",
  },
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
