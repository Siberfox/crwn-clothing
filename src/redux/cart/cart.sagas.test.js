import { takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";
import { clearCartOnSignOut, onSignOutSuccess } from "./cart.sagas";

describe("on signout success saga", () => {
  it("should trigger on SIGN_OUT_SUCCESS", async () => {
    const generator = onSignOutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
    );
  });

  it("clear cart on signout saga", () => {
    const generator = clearCartOnSignOut();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});
