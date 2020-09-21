import UserActionTypes from "./user.types";
import userReducer from "./user.reducer";

const initialState = {
  currentUser: null,
  error: null,
};

describe("userReducer", () => {
  it("should return initial value", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should set currentUser to payload on signInSuccess action", () => {
    const mockUser = { id: 1, displayName: "Yihua" };

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: mockUser,
      }).currentUser
    ).toEqual(mockUser);
  });

  it("should set currentUser to null on signOutSuccess", () => {
    expect(
      userReducer(initialState, { type: UserActionTypes.SIGN_OUT_SUCCESS })
        .currentUser
    ).toBe(null);
  });

  it("should set errorMessage to payload on signUpFailure, signInFailure and signOurFialure actions", () => {
    const mockError = {
      message: "errored",
      code: 404,
    };

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: mockError,
      }).error
    ).toEqual(mockError);

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: mockError,
      }).error
    ).toEqual(mockError);

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: mockError,
      }).error
    ).toEqual(mockError);
  });
});
