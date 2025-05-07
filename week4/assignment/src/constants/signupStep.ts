export const SIGN_UP_STEP = {
  CREATE_ID: 1,
  CREATE_PASSWD: 2,
  CREATE_NICKNAME: 3,
} as const;

export type SignUpStep = (typeof SIGN_UP_STEP)[keyof typeof SIGN_UP_STEP];
