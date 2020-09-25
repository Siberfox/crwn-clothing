import UserActionTypes from "./user.types";
import {
  setCurrentUser,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailure,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";

const mockUser = {
  name: "John",
};

const mockError = "error";

describe("setCurrentUser action", () => {
  it("should create setCurrentUser action", () => {
    const action = setCurrentUser(mockUser);
    expect(action.type).toEqual(UserActionTypes.SET_CURRENT_USER);
    expect(action.payload).toEqual(mockUser);
  });
});

describe("googleSignInStart action", () => {
  it("should create googleSignInStart action", () => {
    expect(googleSignInStart().type).toEqual(
      UserActionTypes.GOOGLE_SIGN_IN_START
    );
  });
});

describe("emailSignInStart action", () => {
  it("should create emailSignInStart action", () => {
    const mockData = "emailAndPassword";
    const action = emailSignInStart(mockData);
    expect(action.type).toEqual(UserActionTypes.EMAIL_SIGN_IN_START);
    expect(action.payload).toEqual(mockData);
  });
});

describe("signInSuccess action", () => {
  it("should create signInSuccess action", () => {
    const action = signInSuccess(mockUser);
    expect(action.type).toEqual(UserActionTypes.SIGN_IN_SUCCESS);
    expect(action.payload).toEqual(mockUser);
  });
});

describe("signInFailure action", () => {
  it("should create signInFailure action", () => {
    const action = signInFailure(mockError);
    expect(action.type).toEqual(UserActionTypes.SIGN_IN_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});

describe("checkUserSession action", () => {
  it("should create checkUserSession action", () => {
    expect(checkUserSession().type).toEqual(UserActionTypes.CHECK_USER_SESSION);
  });
});

describe("signOutStart action", () => {
  it("should create signOutStart action", () => {
    expect(signOutStart().type).toEqual(UserActionTypes.SIGN_OUT_START);
  });
});

describe("signOutSuccess action", () => {
  it("should create signOutSuccess action", () => {
    expect(signOutSuccess().type).toEqual(UserActionTypes.SIGN_OUT_SUCCESS);
  });
});

describe("signOutFailure action", () => {
  it("should create signOutFailure action", () => {
    const action = signOutFailure(mockError);
    expect(action.type).toEqual(UserActionTypes.SIGN_OUT_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});

describe("signUpStart action", () => {
  it("should create signUpStart action", () => {
    const action = signUpStart(mockUser);
    expect(action.type).toEqual(UserActionTypes.SIGN_UP_START);
    expect(action.payload).toEqual(mockUser);
  });
});

describe("signUpSuccess action", () => {
  it("should create signUpSuccess action", () => {
    const mockUserData = { user: mockUser, additionalData: "data" };
    const action = signUpSuccess(mockUserData);
    expect(action.type).toEqual(UserActionTypes.SIGN_UP_SUCCESS);
    expect(action.payload).toEqual(mockUserData);
  });
});

describe("signUpFailure action", () => {
  it("should create signUpFailure action", () => {
    const action = signUpFailure(mockError);
    expect(action.type).toEqual(UserActionTypes.SIGN_UP_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});
