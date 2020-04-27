/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_tokenAuth {
  __typename: "ObtainJSONWebToken";
  token: string;
}

export interface Login {
  /**
   * Obtain JSON Web Token mutation
   */
  tokenAuth: Login_tokenAuth | null;
}

export interface LoginVariables {
  username: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Signup
// ====================================================

export interface Signup_createUser_user {
  __typename: "UserType";
  uuid: any;
}

export interface Signup_createUser {
  __typename: "CreateUserResponse";
  user: Signup_createUser_user | null;
}

export interface Signup {
  createUser: Signup_createUser;
}

export interface SignupVariables {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCheckListQuestions
// ====================================================

export interface GetCheckListQuestions_getCheckListQuestions_checkListQuestions_questionSet_checkListCover {
  __typename: "CheckListCoverType";
  uuid: any;
  previousSubmit: boolean;
  laterSubmit: boolean;
}

export interface GetCheckListQuestions_getCheckListQuestions_checkListQuestions_questionSet {
  __typename: "CheckListAnswerType";
  checkListCover: GetCheckListQuestions_getCheckListQuestions_checkListQuestions_questionSet_checkListCover;
  previousAnswer: boolean;
  laterAnswer: boolean;
}

export interface GetCheckListQuestions_getCheckListQuestions_checkListQuestions {
  __typename: "CheckListQuestionType";
  uuid: any;
  question: string;
  questionSet: GetCheckListQuestions_getCheckListQuestions_checkListQuestions_questionSet[];
}

export interface GetCheckListQuestions_getCheckListQuestions {
  __typename: "GetCheckListQuestionsResponse";
  checkListQuestions: (GetCheckListQuestions_getCheckListQuestions_checkListQuestions | null)[] | null;
}

export interface GetCheckListQuestions {
  getCheckListQuestions: GetCheckListQuestions_getCheckListQuestions;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CheckList
// ====================================================

export interface CheckList_checkList {
  __typename: "CheckListResponse";
  ok: boolean | null;
}

export interface CheckList {
  checkList: CheckList_checkList;
}

export interface CheckListVariables {
  checkListCoverUuid: string;
  checkListSet?: (string | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUser
// ====================================================

export interface UpdateUser_updateUser_user {
  __typename: "UserType";
  firstName: string;
  lastName: string;
  bio: string;
  userImg: string | null;
}

export interface UpdateUser_updateUser {
  __typename: "UpdateUserResponse";
  user: UpdateUser_updateUser_user | null;
}

export interface UpdateUser {
  updateUser: UpdateUser_updateUser;
}

export interface UpdateUserVariables {
  firstName: string;
  lastName: string;
  bio: string;
  password: string;
  userImg?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_user_classOrder {
  __typename: "ClassOrderType";
  order: number | null;
}

export interface Me_me_user {
  __typename: "UserType";
  uuid: any;
  /**
   * 150자 이하 문자, 숫자 그리고 @/./+/-/_만 가능합니다.
   */
  username: string;
  firstName: string;
  lastName: string;
  bio: string;
  userImg: string | null;
  classOrder: Me_me_user_classOrder | null;
  hasSubmitedCheckList: boolean;
  hasSubmitedApplication: boolean;
  hasPaid: boolean;
  hasKakaoAccount: boolean;
}

export interface Me_me {
  __typename: "MeReponse";
  user: Me_me_user | null;
}

export interface Me {
  me: Me_me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
