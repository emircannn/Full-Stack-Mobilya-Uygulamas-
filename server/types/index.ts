export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type LoginAndSignupType = {
  message: string;
  error: boolean;
  data?: Tokens;
};

export type MessageType = {
  message: string;
  error: boolean;
};
