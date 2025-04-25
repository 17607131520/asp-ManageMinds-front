import { userActionType } from './actionType';
export const saveUserInfoAction = (payload: unknown): unknown => {
  return {
    type: userActionType.saveUserinfo,
    payload,
  };
};
