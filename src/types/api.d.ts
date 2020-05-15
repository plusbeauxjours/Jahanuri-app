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

export interface GetCheckListQuestions_getCheckListQuestions_checkListQuestions_questionSet {
  __typename: "CheckListAnswerType";
  previousAnswer: boolean;
  laterAnswer: boolean;
}

export interface GetCheckListQuestions_getCheckListQuestions_checkListQuestions {
  __typename: "CheckListQuestionType";
  question: string;
  uuid: any;
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
// GraphQL mutation operation: SubmitCheckList
// ====================================================

export interface SubmitCheckList_submitCheckList {
  __typename: "SubmitCheckListResponse";
  ok: boolean | null;
}

export interface SubmitCheckList {
  submitCheckList: SubmitCheckList_submitCheckList;
}

export interface SubmitCheckListVariables {
  isPreviousAnswer: boolean;
  trueAnswerQuestionUuids?: (string | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateReport
// ====================================================

export interface CreateReport_createReport_report_reportCover_classOrder {
  __typename: "ClassOrderType";
  order: number | null;
  startDate: any | null;
  endDate: any | null;
}

export interface CreateReport_createReport_report_reportCover {
  __typename: "ReportCoverType";
  classOrder: CreateReport_createReport_report_reportCover_classOrder | null;
  uuid: any;
  reportType: ReportCoverReportType;
}

export interface CreateReport_createReport_report {
  __typename: "ReportType";
  uuid: any;
  reportCover: CreateReport_createReport_report_reportCover;
  saengSik: ReportSaengSik;
  amino: ReportAmino;
  sangiSo: ReportSangiSo;
  jeunHaeJil: boolean;
  jeunHaeJilTime: any;
  meal: string;
  mealCheck: string;
  sleeping: string;
  stool: string;
  hotGrain: string;
  hotWater: string;
  strolling: string;
  workout: string;
  lecture: string;
  etc: string;
  diary: string;
}

export interface CreateReport_createReport {
  __typename: "CreateReportResponse";
  report: CreateReport_createReport_report | null;
}

export interface CreateReport {
  createReport: CreateReport_createReport;
}

export interface CreateReportVariables {
  reportCoverUuid: string;
  saengSik?: string | null;
  amino?: string | null;
  sangiSo?: string | null;
  jeunHaeJil?: boolean | null;
  jeunHaeJilTime?: any | null;
  meal?: string | null;
  mealCheck?: string | null;
  sleeping?: string | null;
  stool?: string | null;
  hotGrain?: string | null;
  hotWater?: string | null;
  strolling?: string | null;
  workout?: string | null;
  lecture?: string | null;
  etc?: string | null;
  diary?: string | null;
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
  hasPreviousCheckListSubmitted: boolean;
  hasLaterCheckListSubmitted: boolean;
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

// ====================================================
// GraphQL query operation: GetReportDetail
// ====================================================

export interface GetReportDetail_getReportDetail_report_reportCover_classOrder {
  __typename: "ClassOrderType";
  order: number | null;
  startDate: any | null;
  endDate: any | null;
}

export interface GetReportDetail_getReportDetail_report_reportCover {
  __typename: "ReportCoverType";
  classOrder: GetReportDetail_getReportDetail_report_reportCover_classOrder | null;
  uuid: any;
  reportType: ReportCoverReportType;
}

export interface GetReportDetail_getReportDetail_report {
  __typename: "ReportType";
  uuid: any;
  reportCover: GetReportDetail_getReportDetail_report_reportCover;
  saengSik: ReportSaengSik;
  amino: ReportAmino;
  sangiSo: ReportSangiSo;
  jeunHaeJil: boolean;
  jeunHaeJilTime: any;
  meal: string;
  mealCheck: string;
  sleeping: string;
  stool: string;
  hotGrain: string;
  hotWater: string;
  strolling: string;
  workout: string;
  lecture: string;
  etc: string;
  diary: string;
}

export interface GetReportDetail_getReportDetail {
  __typename: "GetReportDetailResponse";
  report: GetReportDetail_getReportDetail_report | null;
}

export interface GetReportDetail {
  getReportDetail: GetReportDetail_getReportDetail;
}

export interface GetReportDetailVariables {
  reportUuid?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetReportList
// ====================================================

export interface GetReportList_getReportList_reports_reportCover {
  __typename: "ReportCoverType";
  uuid: any;
}

export interface GetReportList_getReportList_reports {
  __typename: "ReportType";
  reportCover: GetReportList_getReportList_reports_reportCover;
  uuid: any;
  createdAt: any;
}

export interface GetReportList_getReportList {
  __typename: "GetReportListResponse";
  reports: (GetReportList_getReportList_reports | null)[] | null;
}

export interface GetReportList {
  getReportList: GetReportList_getReportList;
}

export interface GetReportListVariables {
  classOrderId?: string | null;
  userUuid?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enumeration.
 */
export enum ReportAmino {
  EVENING = "EVENING",
  MORNING = "MORNING",
  NOON = "NOON",
}

/**
 * An enumeration.
 */
export enum ReportCoverReportType {
  BODY_STUDY = "BODY_STUDY",
  ETC = "ETC",
}

/**
 * An enumeration.
 */
export enum ReportSaengSik {
  EVENING = "EVENING",
  MORNING = "MORNING",
  NOON = "NOON",
}

/**
 * An enumeration.
 */
export enum ReportSangiSo {
  EVENING = "EVENING",
  MORNING = "MORNING",
  NOON = "NOON",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
