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

export interface Signup_createUser_user_classOrder {
  __typename: "ClassOrderType";
  order: number | null;
  startDate: any | null;
  endDate: any | null;
  uuid: any;
}

export interface Signup_createUser_user {
  __typename: "UserType";
  uuid: any;
  /**
   * 150자 이하 문자, 숫자 그리고 @/./+/-/_만 가능합니다.
   */
  username: string;
  firstName: string;
  lastName: string;
  userImg: string | null;
  classOrder: Signup_createUser_user_classOrder | null;
  reportCoverUuid: string | null;
  hasSubmittedPreviousCheckList: boolean;
  hasSubmittedLaterCheckList: boolean;
  hasSubmittedApplication: boolean;
  hasSubmittedSurvey: boolean;
  hasPaid: boolean;
  hasKakaoAccount: boolean;
  hasAppleAccount: boolean;
  /**
   * 사용자가 관리사이트에 로그인이 가능한지를 나타냅니다.
   */
  isStaff: boolean;
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

export interface SubmitCheckList_submitCheckList_checkListQuestions_questionSet {
  __typename: "CheckListAnswerType";
  previousAnswer: boolean;
  laterAnswer: boolean;
}

export interface SubmitCheckList_submitCheckList_checkListQuestions {
  __typename: "CheckListQuestionType";
  question: string;
  uuid: any;
  questionSet: SubmitCheckList_submitCheckList_checkListQuestions_questionSet[];
}

export interface SubmitCheckList_submitCheckList {
  __typename: "SubmitCheckListResponse";
  checkListQuestions: (SubmitCheckList_submitCheckList_checkListQuestions | null)[] | null;
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
  reportDate: any;
  reportCover: CreateReport_createReport_report_reportCover;
}

export interface CreateReport_createReport {
  __typename: "CreateReportResponse";
  report: CreateReport_createReport_report | null;
}

export interface CreateReport {
  createReport: CreateReport_createReport;
}

export interface CreateReportVariables {
  reportCoverUuid?: string | null;
  saengSikMorning?: string | null;
  saengSikNoon?: string | null;
  saengSikEvening?: string | null;
  aminoMorning?: string | null;
  aminoNoon?: string | null;
  aminoEvening?: string | null;
  sangiSoMorning?: string | null;
  sangiSoNoon?: string | null;
  sangiSoEvening?: string | null;
  jeunHaeJilA?: boolean | null;
  jeunHaeJilB?: boolean | null;
  jeunHaeJilC?: boolean | null;
  jeunHaeJilD?: boolean | null;
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
  reportDate: any;
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
  password: string;
  userImg?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubmitHabitCheckList
// ====================================================

export interface SubmitHabitCheckList_submitHabitCheckList {
  __typename: "SubmitHabitCheckListResponse";
  ok: boolean | null;
}

export interface SubmitHabitCheckList {
  submitHabitCheckList: SubmitHabitCheckList_submitHabitCheckList;
}

export interface SubmitHabitCheckListVariables {
  job: string;
  wakeupTime: string;
  wakeupLong: string;
  wakeupCondition?: (string | null)[] | null;
  wakeupConditionEtc?: string | null;
  wakeupFirstThing?: (string | null)[] | null;
  wakeupFirstThingEtc?: string | null;
  meal: string;
  mealDuring?: (string | null)[] | null;
  mealDuringEtc?: string | null;
  mealWithWater: string;
  mealWithSnack: string;
  mealWithNightFood: string;
  afterLunch?: (string | null)[] | null;
  afterLunchEtc?: string | null;
  saying?: (string | null)[] | null;
  sayingEtc?: string | null;
  sayingRepeat: string;
  walking?: (string | null)[] | null;
  walkingEtc?: string | null;
  posture?: (string | null)[] | null;
  postureEtc?: string | null;
  postureDetail?: (string | null)[] | null;
  postureDetailEtc?: string | null;
  bodyHeat?: (string | null)[] | null;
  bodyHeatEtc?: string | null;
  exercise: string;
  sleeping?: (string | null)[] | null;
  sleepingEtc?: string | null;
  beforeSleeping?: (string | null)[] | null;
  beforeSleepingEtc?: string | null;
  goodThing: string;
  badThing: string;
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
  startDate: any | null;
  endDate: any | null;
  uuid: any;
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
  userImg: string | null;
  classOrder: Me_me_user_classOrder | null;
  reportCoverUuid: string | null;
  hasSubmittedPreviousCheckList: boolean;
  hasSubmittedLaterCheckList: boolean;
  hasSubmittedApplication: boolean;
  hasSubmittedSurvey: boolean;
  hasPaid: boolean;
  hasKakaoAccount: boolean;
  hasAppleAccount: boolean;
  /**
   * 사용자가 관리사이트에 로그인이 가능한지를 나타냅니다.
   */
  isStaff: boolean;
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
// GraphQL query operation: GetFeedList
// ====================================================

export interface GetFeedList_getFeedList_feeds_classOrder {
  __typename: "ClassOrderType";
  order: number | null;
  startDate: any | null;
  endDate: any | null;
  uuid: any;
}

export interface GetFeedList_getFeedList_feeds_user {
  __typename: "UserType";
  /**
   * 150자 이하 문자, 숫자 그리고 @/./+/-/_만 가능합니다.
   */
  username: string;
}

export interface GetFeedList_getFeedList_feeds {
  __typename: "FeedType";
  classOrder: GetFeedList_getFeedList_feeds_classOrder | null;
  user: GetFeedList_getFeedList_feeds_user;
  uuid: any;
  text: string | null;
  createdAt: any;
}

export interface GetFeedList_getFeedList {
  __typename: "GetFeedListResponse";
  feeds: (GetFeedList_getFeedList_feeds | null)[] | null;
}

export interface GetFeedList {
  getFeedList: GetFeedList_getFeedList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFeedListStaff
// ====================================================

export interface GetFeedListStaff_getFeedListStaff_feeds_classOrder {
  __typename: "ClassOrderType";
  order: number | null;
  startDate: any | null;
  endDate: any | null;
  uuid: any;
}

export interface GetFeedListStaff_getFeedListStaff_feeds_user {
  __typename: "UserType";
  /**
   * 150자 이하 문자, 숫자 그리고 @/./+/-/_만 가능합니다.
   */
  username: string;
}

export interface GetFeedListStaff_getFeedListStaff_feeds {
  __typename: "FeedType";
  classOrder: GetFeedListStaff_getFeedListStaff_feeds_classOrder | null;
  user: GetFeedListStaff_getFeedListStaff_feeds_user;
  uuid: any;
  text: string | null;
  createdAt: any;
}

export interface GetFeedListStaff_getFeedListStaff {
  __typename: "GetFeedListStaffResponse";
  feeds: (GetFeedListStaff_getFeedListStaff_feeds | null)[] | null;
}

export interface GetFeedListStaff {
  getFeedListStaff: GetFeedListStaff_getFeedListStaff;
}

export interface GetFeedListStaffVariables {
  classOrderUuid: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetClassList
// ====================================================

export interface GetClassList_getClassList_classes {
  __typename: "ClassOrderType";
  order: number | null;
  startDate: any | null;
  endDate: any | null;
  uuid: any;
}

export interface GetClassList_getClassList {
  __typename: "GetClassListReponse";
  classes: (GetClassList_getClassList_classes | null)[] | null;
}

export interface GetClassList {
  getClassList: GetClassList_getClassList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateFeed
// ====================================================

export interface CreateFeed_createFeed_feed_classOrder {
  __typename: "ClassOrderType";
  order: number | null;
  startDate: any | null;
  endDate: any | null;
  uuid: any;
}

export interface CreateFeed_createFeed_feed_user {
  __typename: "UserType";
  /**
   * 150자 이하 문자, 숫자 그리고 @/./+/-/_만 가능합니다.
   */
  username: string;
}

export interface CreateFeed_createFeed_feed {
  __typename: "FeedType";
  classOrder: CreateFeed_createFeed_feed_classOrder | null;
  user: CreateFeed_createFeed_feed_user;
  uuid: any;
  text: string | null;
  createdAt: any;
}

export interface CreateFeed_createFeed {
  __typename: "CreateFeedReponse";
  feed: CreateFeed_createFeed_feed | null;
}

export interface CreateFeed {
  createFeed: CreateFeed_createFeed;
}

export interface CreateFeedVariables {
  classOrderUuid: string;
  text: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveFeed
// ====================================================

export interface RemoveFeed_removeFeed {
  __typename: "RemoveFeedReponse";
  uuid: string | null;
}

export interface RemoveFeed {
  removeFeed: RemoveFeed_removeFeed;
}

export interface RemoveFeedVariables {
  feedUuid: string;
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
  saengSikMorning: string | null;
  saengSikNoon: string | null;
  saengSikEvening: string | null;
  aminoMorning: string | null;
  aminoNoon: string | null;
  aminoEvening: string | null;
  sangiSoMorning: string | null;
  sangiSoNoon: string | null;
  sangiSoEvening: string | null;
  jeunHaeJilA: boolean;
  jeunHaeJilB: boolean;
  jeunHaeJilC: boolean;
  jeunHaeJilD: boolean;
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
  reportDate: any;
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

export interface GetReportList_getReportList_reports_reportCover_classOrder {
  __typename: "ClassOrderType";
  order: number | null;
  startDate: any | null;
  endDate: any | null;
}

export interface GetReportList_getReportList_reports_reportCover {
  __typename: "ReportCoverType";
  classOrder: GetReportList_getReportList_reports_reportCover_classOrder | null;
  uuid: any;
  reportType: ReportCoverReportType;
}

export interface GetReportList_getReportList_reports {
  __typename: "ReportType";
  uuid: any;
  reportDate: any;
  reportCover: GetReportList_getReportList_reports_reportCover;
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
export enum ReportCoverReportType {
  BODY_STUDY = "BODY_STUDY",
  ETC = "ETC",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
