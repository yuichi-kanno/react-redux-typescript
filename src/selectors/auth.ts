// auth情報を取得するSelector
import { createSelector } from "reselect";
import { RootState } from "../store";

export const authSelector = (state: RootState) => state.auth;

/**
 * liffIdTokenを取得する
 * @returns liffIdToken
 */
export const liffIdTokenSelector = createSelector(authSelector, (auth) => {
	return auth.liffIdToken;
});

/**
 * LINEの名前を取得する
 * @returns displayName
 */
export const displayNameSelector = createSelector(authSelector, (auth) => {
	return auth.displayName;
});

/**
 * LINEの画像を取得する
 * @returns pictureUrl
 */
export const pictureUrlSelector = createSelector(authSelector, (auth) => {
	return auth.pictureUrl;
});

/**
 * errorを取得する
 * @returns error
 */
export const errorSelector = createSelector(authSelector, (auth) => {
	return auth.error;
});
