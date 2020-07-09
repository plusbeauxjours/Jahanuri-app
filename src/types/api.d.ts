/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AppleConnect
// ====================================================

export interface AppleConnect_appleConnect {
  __typename: "AppleConnectResponse";
  token: string | null;
}

export interface AppleConnect {
  appleConnect: AppleConnect_appleConnect;
}

export interface AppleConnectVariables {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  appleId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubmitApplication
// ====================================================

export interface SubmitApplication_submitApplication {
  __typename: "SubmitApplicationResponse";
  ok: boolean | null;
}

export interface SubmitApplication {
  submitApplication: SubmitApplication_submitApplication;
}

export interface SubmitApplicationVariables {
  gender: string;
  birthDate?: any | null;
  address: string;
  job: string;
  phoneNumber: string;
  emailAddress: string;
  approach?: (string | null)[] | null;
  approachEtc?: string | null;
  confirm: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetApplication
// ====================================================

export interface GetApplication_getApplication_application {
  __typename: "ApplicationType";
  gender: ApplicationGender | null;
  birthDate: any | null;
  address: string;
  job: string;
  phoneNumber: string;
  emailAddress: string;
  getApproach: string | null;
  approachEtc: string | null;
  confirm: boolean;
}

export interface GetApplication_getApplication {
  __typename: "GetApplicationResponse";
  application: GetApplication_getApplication_application | null;
}

export interface GetApplication {
  getApplication: GetApplication_getApplication;
}

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
  classOrder: Signup_createUser_user_classOrder | null;
  address: string | null;
  job: string | null;
  phoneNumber: string | null;
  email: string;
  hasSubmittedPreviousCheckList: boolean;
  hasSubmittedLaterCheckList: boolean;
  hasSubmittedHabitCheckList: boolean;
  hasSubmittedApplication: boolean;
  hasSubmittedSurvey: boolean;
  hasPaid: boolean;
  hasAppleAccount: boolean;
  appleId: string | null;
  pushToken: string | null;
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

export interface GetCheckListQuestions_getCheckListQuestions_checkListQuestions {
  __typename: "CheckListQuestionType";
  question: string;
  uuid: any;
}

export interface GetCheckListQuestions_getCheckListQuestions_checkListAnswers_question {
  __typename: "CheckListQuestionType";
  uuid: any;
  question: string;
}

export interface GetCheckListQuestions_getCheckListQuestions_checkListAnswers {
  __typename: "CheckListAnswerType";
  uuid: any;
  question: GetCheckListQuestions_getCheckListQuestions_checkListAnswers_question;
  previousAnswer: boolean;
  laterAnswer: boolean;
}

export interface GetCheckListQuestions_getCheckListQuestions {
  __typename: "GetCheckListQuestionsResponse";
  checkListQuestions: (GetCheckListQuestions_getCheckListQuestions_checkListQuestions | null)[] | null;
  checkListAnswers: (GetCheckListQuestions_getCheckListQuestions_checkListAnswers | null)[] | null;
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

export interface SubmitCheckList_submitCheckList_checkListAnswers_question {
  __typename: "CheckListQuestionType";
  uuid: any;
  question: string;
}

export interface SubmitCheckList_submitCheckList_checkListAnswers {
  __typename: "CheckListAnswerType";
  uuid: any;
  question: SubmitCheckList_submitCheckList_checkListAnswers_question;
  previousAnswer: boolean;
  laterAnswer: boolean;
}

export interface SubmitCheckList_submitCheckList {
  __typename: "SubmitCheckListResponse";
  checkListAnswers: (SubmitCheckList_submitCheckList_checkListAnswers | null)[] | null;
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

export interface CreateReport_createReport_report {
  __typename: "ReportType";
  uuid: any;
  reportDate: any;
}

export interface CreateReport_createReport {
  __typename: "CreateReportResponse";
  report: CreateReport_createReport_report | null;
}

export interface CreateReport {
  createReport: CreateReport_createReport;
}

export interface CreateReportVariables {
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
  address: string | null;
  job: string | null;
  phoneNumber: string | null;
  email: string;
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
  password?: string | null;
  address?: string | null;
  job?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHabitCheckListDetail
// ====================================================

export interface GetHabitCheckListDetail_getHabitCheckListDetail_habitCheckList {
  __typename: "HabitCheckListType";
  wakeupTime: string;
  wakeupLong: string;
  getWakeupCondition: string | null;
  wakeupConditionEtc: string | null;
  getWakeupFirstThing: string | null;
  wakeupFirstThingEtc: string | null;
  meal: string;
  getMealDuring: string | null;
  mealDuringEtc: string | null;
  mealWithWater: HabitCheckListMealWithWater;
  mealWithSnack: HabitCheckListMealWithSnack;
  mealWithNightFood: HabitCheckListMealWithNightFood;
  getAfterLunch: string | null;
  afterLunchEtc: string | null;
  getSaying: string | null;
  sayingEtc: string | null;
  sayingRepeat: string;
  getWalking: string | null;
  walkingEtc: string | null;
  getPosture: string | null;
  postureEtc: string | null;
  getPostureDetail: string | null;
  postureDetailEtc: string | null;
  getBodyHeat: string | null;
  bodyHeatEtc: string | null;
  exercise: string;
  getSleeping: string | null;
  sleepingEtc: string | null;
  getBeforeSleeping: string | null;
  beforeSleepingEtc: string | null;
  goodThing: string;
  badThing: string;
}

export interface GetHabitCheckListDetail_getHabitCheckListDetail {
  __typename: "GetHabitCheckListDetailResponse";
  habitCheckList: GetHabitCheckListDetail_getHabitCheckListDetail_habitCheckList | null;
}

export interface GetHabitCheckListDetail {
  getHabitCheckListDetail: GetHabitCheckListDetail_getHabitCheckListDetail;
}

export interface GetHabitCheckListDetailVariables {
  habitCheckListUuid?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHabitCheckListList
// ====================================================

export interface GetHabitCheckListList_getHabitCheckListList_habitCheckLists {
  __typename: "HabitCheckListType";
  uuid: any;
  createdAt: any;
}

export interface GetHabitCheckListList_getHabitCheckListList {
  __typename: "GetHabitCheckListListResponse";
  habitCheckLists: (GetHabitCheckListList_getHabitCheckListList_habitCheckLists | null)[] | null;
}

export interface GetHabitCheckListList {
  getHabitCheckListList: GetHabitCheckListList_getHabitCheckListList;
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
  classOrder: Me_me_user_classOrder | null;
  address: string | null;
  job: string | null;
  phoneNumber: string | null;
  email: string;
  hasSubmittedPreviousCheckList: boolean;
  hasSubmittedLaterCheckList: boolean;
  hasSubmittedHabitCheckList: boolean;
  hasSubmittedApplication: boolean;
  hasSubmittedSurvey: boolean;
  hasPaid: boolean;
  hasAppleAccount: boolean;
  appleId: string | null;
  pushToken: string | null;
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

export interface CreateFeed_createFeed_users {
  __typename: "UserType";
  firstName: string;
  pushToken: string | null;
}

export interface CreateFeed_createFeed {
  __typename: "CreateFeedReponse";
  feed: CreateFeed_createFeed_feed | null;
  users: (CreateFeed_createFeed_users | null)[] | null;
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
// GraphQL mutation operation: RegisterPush
// ====================================================

export interface RegisterPush_registerPush {
  __typename: "RegisterPushResponse";
  ok: boolean | null;
}

export interface RegisterPush {
  registerPush: RegisterPush_registerPush;
}

export interface RegisterPushVariables {
  pushToken: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetReportDetail
// ====================================================

export interface GetReportDetail_getReportDetail_report_classOrder {
  __typename: "ClassOrderType";
  order: number | null;
  startDate: any | null;
  endDate: any | null;
}

export interface GetReportDetail_getReportDetail_report {
  __typename: "ReportType";
  classOrder: GetReportDetail_getReportDetail_report_classOrder;
  uuid: any;
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

export interface GetReportList_getReportList_reports {
  __typename: "ReportType";
  uuid: any;
  reportDate: any;
}

export interface GetReportList_getReportList {
  __typename: "GetReportListResponse";
  reports: (GetReportList_getReportList_reports | null)[] | null;
}

export interface GetReportList {
  getReportList: GetReportList_getReportList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SubmitSurvey
// ====================================================

export interface SubmitSurvey_submitSurvey {
  __typename: "SubmitSurveyResponse";
  ok: boolean | null;
}

export interface SubmitSurvey {
  submitSurvey: SubmitSurvey_submitSurvey;
}

export interface SubmitSurveyVariables {
  hasMarried: boolean;
  hasMarriedEtc?: string | null;
  hasChildbirth: boolean;
  hasChildbirthEtc?: string | null;
  status: string;
  change: string;
  agreePersonalInformation: boolean;
  confirm: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSurveyList
// ====================================================

export interface GetSurveyList_getSurveyList_surveys {
  __typename: "SurveyType";
  uuid: any;
  createdAt: any;
}

export interface GetSurveyList_getSurveyList {
  __typename: "GetSurveyListResponse";
  surveys: (GetSurveyList_getSurveyList_surveys | null)[] | null;
}

export interface GetSurveyList {
  getSurveyList: GetSurveyList_getSurveyList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSurveyDetail
// ====================================================

export interface GetSurveyDetail_getSurveyDetail_survey {
  __typename: "SurveyType";
  hasMarried: boolean;
  hasMarriedEtc: string | null;
  hasChildbirth: boolean;
  hasChildbirthEtc: string | null;
  status: string | null;
  change: string | null;
  agreePersonalInformation: boolean;
  confirm: boolean;
}

export interface GetSurveyDetail_getSurveyDetail {
  __typename: "GetSurveyDetailResponse";
  survey: GetSurveyDetail_getSurveyDetail_survey | null;
}

export interface GetSurveyDetail {
  getSurveyDetail: GetSurveyDetail_getSurveyDetail;
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
export enum ApplicationGender {
  GENDER_FEMALE = "GENDER_FEMALE",
  GENDER_MALE = "GENDER_MALE",
  GENDER_OTHER = "GENDER_OTHER",
}

/**
 * An enumeration.
 */
export enum HabitCheckListMealWithNightFood {
  DEGREE_A = "DEGREE_A",
  DEGREE_B = "DEGREE_B",
  DEGREE_C = "DEGREE_C",
  DEGREE_D = "DEGREE_D",
  DEGREE_E = "DEGREE_E",
}

/**
 * An enumeration.
 */
export enum HabitCheckListMealWithSnack {
  DEGREE_A = "DEGREE_A",
  DEGREE_B = "DEGREE_B",
  DEGREE_C = "DEGREE_C",
  DEGREE_D = "DEGREE_D",
  DEGREE_E = "DEGREE_E",
}

/**
 * An enumeration.
 */
export enum HabitCheckListMealWithWater {
  DEGREE_A = "DEGREE_A",
  DEGREE_B = "DEGREE_B",
  DEGREE_C = "DEGREE_C",
  DEGREE_D = "DEGREE_D",
  DEGREE_E = "DEGREE_E",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
