export interface DownloadInfo {
    data:     Data;
    meta:     Meta;
    included: Included[];
}

export interface Data {
    paging:      DataPaging;
    '*elements': string[];
    cachingKey:  string;
    $type:       string;
}

export interface DataPaging {
    count: number;
    start: number;
    links: any[];
}

export interface Included {
    cachingKey:                                       string;
    $recipeTypes?:                                    string[];
    consented?:                                       boolean;
    $type:                                            string;
    lastName?:                                        string;
    profileImage?:                                    Image | null;
    firstName?:                                       string;
    entityUrn?:                                       string;
    displayName?:                                     string;
    publicUrl?:                                       string;
    headline?:                                        string;
    trackingUrn?:                                     string;
    assessment?:                                      null;
    name?:                                            string;
    trackingId?:                                      string;
    '*followResolutionResult'?:                       string;
    influencer?:                                      boolean;
    identity?:                                        string;
    shortBiography?:                                  Biography;
    slug?:                                            string;
    autoPopulateMentionForCertificateShares?:         boolean;
    '*identityResolutionResult'?:                     string;
    biography?:                                       Biography;
    follow?:                                          string;
    createdAt?:                                       null;
    totalBookmarks?:                                  number | null;
    examsResolutionResults?:                          ExamsResolutionResults;
    contextualUnlockErrorType?:                       null;
    lifecycle?:                                       string;
    skills?:                                          string[];
    presentation?:                                    null;
    features?:                                        Features;
    viewerCountsInjectionResult?:                     ViewerCountsInjectionResult;
    credentialingPrograms?:                           null;
    skillsResolutionResults?:                         SkillsResolutionResults;
    updatedAt?:                                       null;
    visibility?:                                      Visibility;
    entityType?:                                      EntityType;
    replacedBy?:                                      null;
    deletedAt?:                                       null;
    contents?:                                        ContentElement[];
    '*bookmarkInjectionResult'?:                      string;
    '*activityTransferConsentStatusInjectionResult'?: string;
    subtitle?:                                        null;
    authors?:                                         string[];
    difficultyLevel?:                                 string;
    activatedAt?:                                     number;
    description?:                                     Biography;
    title?:                                           string;
    authorsResolutionResults?:                        AuthorsResolutionResults;
    duration?:                                        Duration;
    provider?:                                        null;
    interactionStatus?:                               null;
    assignment?:                                      null;
    primaryThumbnail?:                                PrimaryThumbnail;
    hashedCourseId?:                                  string;
    '*contentReactionInjectionResult'?:               string;
    exams?:                                           string[];
    exerciseFiles?:                                   ExerciseFile[];
    '*lyndaCourseViewingStatusInjectionResult'?:      string;
    deprecatedAt?:                                    null;
    contextualUnlockExtensionEligible?:               boolean;
    '*socialWatchersSummary'?:                        string;
    objectives?:                                      Objective[];
    '*lyndaVideoViewingStatusInjectionResult'?:       string;
    thumbnails?:                                      null;
    totalQuestions?:                                  number;
    passingScore?:                                    null;
    timeLimit?:                                       Duration;
    '*assessmentStatusInjectionResult'?:              string;
    credentialingProgram?:                            null;
    contentResolutionResult?:                         IncludedContentResolutionResult;
    content?:                                         UnionClass;
    '*items'?:                                        string[];
    totalReactions?:                                  number;
    reactors?:                                        Reactor[];
    reacted?:                                         null;
    visibilityStatus?:                                string;
    contentUrn?:                                      string;
    following?:                                       boolean;
    facepiles?:                                       null;
    connectionsTotal?:                                number;
    coworkersTotal?:                                  number;
    watchersTotal?:                                   number;
    '*facepiles'?:                                    string;
    jobTitleTotal?:                                   number;
    details?:                                         null;
    paging?:                                          IncludedPaging;
    elements?:                                        any[];
    '*elements'?:                                     string[];
}

export interface AuthorsResolutionResults {
    '*urn:li:learningApiAuthor:3903365': string;
}

export interface Biography {
    text:  string;
    $type: string;
}

export interface UnionClass {
    video?:      string;
    assessment?: string;
}

export interface IncludedContentResolutionResult {
    '*video'?:      string;
    '*assessment'?: string;
}

export interface ContentElement {
    '*section': string;
}

export interface Duration {
    duration: number;
    unit:     Unit;
    $type:    DurationType;
}

export enum DurationType {
    COMLinkedinCommonTimeSpan = 'com.linkedin.common.TimeSpan',
}

export enum Unit {
    Second = 'SECOND',
}

export enum EntityType {
    Course = 'COURSE',
    PreAssessment = 'PRE_ASSESSMENT',
    Quiz = 'QUIZ',
    Video = 'VIDEO',
}

export interface ExamsResolutionResults {
    '*urn:li:learningApiAssessment:4637597': string;
}

export interface ExerciseFile {
    sizeInBytes:  number;
    name:         string;
    $recipeTypes: string[];
    url:          string;
    $type:        string;
}

export interface Features {
    '*contentWatchActivityVisibility': string;
    $recipeTypes:                      string[];
    $type:                             string;
    contentPrice:                      ContentPrice;
    studyGroupAccessible:              boolean;
    contentRating:                     ContentRating;
    suppressUpsell:                    boolean;
    socialQuestions:                   boolean;
}

export interface ContentPrice {
    taxInclusive: boolean;
    totalPrice:   TotalPrice;
    $type:        string;
}

export interface TotalPrice {
    currencyCode: string;
    amount:       string;
    $type:        string;
}

export interface ContentRating {
    ratingCount:   number;
    averageRating: number;
    $type:         string;
}

export interface Objective {
    description:  string;
    $recipeTypes: string[];
    $type:        string;
}

export interface IncludedPaging {
    total?:       number;
    start:        number;
    count:        number;
    links:        any[];
    $recipeTypes: string[];
}

export interface PrimaryThumbnail {
    source: PrimaryThumbnailSource;
    $type:  PrimaryThumbnailType;
}

export enum PrimaryThumbnailType {
    COMLinkedinLearningAPICommonImage = 'com.linkedin.learning.api.common.Image',
}

export interface PrimaryThumbnailSource {
    digitalmediaAsset: DigitalmediaAsset;
    artifacts:         Artifact[];
    rootUrl:           string;
    $type:             FluffyType;
}

export enum FluffyType {
    COMLinkedinCommonVectorImage = 'com.linkedin.common.VectorImage',
}

export interface Artifact {
    width:                         number;
    fileIdentifyingUrlPathSegment: string;
    expiresAt:                     number;
    height:                        number;
    $type:                         ArtifactType;
}

export enum ArtifactType {
    COMLinkedinCommonVectorArtifact = 'com.linkedin.common.VectorArtifact',
}

export enum DigitalmediaAsset {
    UrnLiDigitalmediaAssetC4E0DAQElTnpXW5YNDg = 'urn:li:digitalmediaAsset:C4E0DAQElTnpXW5YNDg',
}

export interface Image {
    source: ProfileImageSource;
    $type:  PrimaryThumbnailType;
}

export interface ProfileImageSource {
    slices: Slice[];
    $type:  TentacledType;
}

export enum TentacledType {
    COMLinkedinLearningAPICommonSizedImage = 'com.linkedin.learning.api.common.SizedImage',
}

export interface Slice {
    dimension: Dimension;
    url:       string;
    $type:     SliceType;
}

export enum SliceType {
    COMLinkedinLearningAPICommonImageSlice = 'com.linkedin.learning.api.common.ImageSlice',
}

export interface Dimension {
    width:  number;
    $type:  DimensionType;
    height: number;
}

export enum DimensionType {
    COMLinkedinLearningAPICommonDimensionInfo = 'com.linkedin.learning.api.common.DimensionInfo',
}

export interface Reactor {
    reaction:                   string;
    $recipeTypes:               string[];
    profile:                    string;
    $type:                      string;
    '*profileResolutionResult': string;
}

export interface SkillsResolutionResults {
    '*urn:li:learningApiSkill:348':  string;
    '*urn:li:learningApiSkill:2914': string;
}

export interface ViewerCountsInjectionResult {
    total:        number;
    byCompany:    By[];
    $recipeTypes: string[];
    byTitle:      By[];
    $type:        string;
}

export interface By {
    image?:       Image;
    name:         string;
    count:        number;
    pivot:        string;
    $recipeTypes: string[];
    $type:        BaseTypeEnum;
}

export enum BaseTypeEnum {
    COMLinkedinLearningAPIDecoSocialproofViewerCountsPivot = 'com.linkedin.learning.api.deco.socialproof.ViewerCountsPivot',
}

export enum Visibility {
    Free = 'FREE',
    Subscribed = 'SUBSCRIBED',
}

export interface Meta {
    microSchema: MicroSchema;
}

export interface MicroSchema {
    version: string;
    types:   Types;
}

export interface Types {
    'com.linkedin.learning.api.deco.social.DecoratedContentReaction':                           COMLinkedinLearningAPIDecoSocialDecoratedContentReaction;
    'com.linkedin.learning.api.deco.common.ProviderCompany':                                    COMLinkedinLearningAPIDecoCommonProviderCompany;
    'com.linkedin.learning.api.deco.status.DecoratedLyndaVideoViewingStatus':                   COMLinkedinLearningAPIDecoStatusDecoratedLyndaViewingStatus;
    'com.linkedin.learning.api.deco.follow.DecoratedFollow':                                    COMLinkedinLearningAPIDecoFollowDecoratedFollow;
    'com.linkedin.learning.api.deco.content.tocAssessmentStatusByAssessmentWithoutResponse':    COMLinkedinLearningAPIDeco;
    'com.linkedin.learning.api.deco.content.DecoratedContentAssignment':                        COMLinkedinLearningAPIDecoContentDecoratedContentAssignment;
    'com.linkedin.learning.api.deco.status.DecoratedLyndaCourseViewingStatus':                  COMLinkedinLearningAPIDecoStatusDecoratedLyndaViewingStatus;
    'com.linkedin.learning.api.deco.common.FacePileProfile':                                    COMLinkedinLearningAPIDecoCommonFacePileProfile;
    'com.linkedin.learning.api.deco.content.DecorateCredentialingProgram':                      COMLinkedinLearningAPIDecoContentDecorateCredentialingProgram;
    'com.linkedin.learning.api.deco.content.TOCItem':                                           COMLinkedinLearningAPIDecoContentTOCItem;
    'com.linkedin.learning.api.deco.socialproof.DecoratedCompanyViewerCount':                   COMLinkedinLearningAPIDecoSocialproofDecoratedViewerCount;
    'com.linkedin.learning.api.deco.content.DecorateCredentialingAgency':                       COMLinkedinLearningAPIDecoContentDecorateCredentialingAgency;
    'com.linkedin.learning.api.deco.content.presentation.DecoratedLearningVideoPlayMetadata':   COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningVideoPlayMetadata;
    'com.linkedin.learning.api.deco.content.tocAssessmentStatus':                               COMLinkedinLearningAPIDecoContentTocAssessmentStatus;
    'com.linkedin.learning.api.deco.content.DecoratedProgramTaxonomy':                          COMLinkedinLearningAPIDecoContentDecoratedProgramTaxonomy;
    'com.linkedin.learning.api.deco.content.tocAssessmentWithoutQuestions':                     COMLinkedinLearningAPIDecoContentTocAssessmentWithoutQuestions;
    'com.linkedin.learning.api.deco.status.DecoratedContentInteractionStatus':                  COMLinkedinLearningAPIDecoStatusDecoratedContentInteractionStatus;
    'com.linkedin.learning.api.deco.social.DecoratedSocialWatchersSummary':                     COMLinkedinLearningAPIDecoSocialDecoratedSocialWatchersSummary;
    'com.linkedin.learning.api.deco.content.DecoratedCourse':                                   COMLinkedinLearningAPIDecoContentDecoratedCourse;
    'com.linkedin.learning.api.deco.social.FacePileReactor':                                    COMLinkedinLearningAPIDecoSocialFacePileReactor;
    'com.linkedin.learning.api.deco.bookmark.DecoratedBookmark':                                COMLinkedinLearningAPIDecoBookmarkDecoratedBookmark;
    'com.linkedin.learning.api.deco.content.TOCSection':                                        COMLinkedinLearningAPIDecoContentTOCSection;
    'com.linkedin.learning.api.deco.content.DecoratedCredentialingProgramAssociation':          COMLinkedinLearningAPIDecoContentDecoratedCredentialingProgramAssociation;
    'com.linkedin.learning.api.deco.common.DecoratedProfile':                                   COMLinkedinLearningAPIDecoCommonDecoratedProfile;
    'com.linkedin.learning.api.deco.content.presentation.DecoratedLearningExternalUrlMetadata': COMLinkedinLearningAPIDecoCo;
    'com.linkedin.learning.api.deco.content.DecoratedFeatures':                                 COMLinkedinLearningAPIDecoContentDecoratedFeatures;
    'com.linkedin.learning.api.deco.common.DecoratedCompany':                                   COMLinkedinLearningAPIDecoCommonDecoratedCompany;
    'com.linkedin.learning.api.deco.common.ActivityTransferConsent':                            COMLinkedinLearningAPIDecoCommonActivityTransferConsent;
    'com.linkedin.learning.api.deco.common.DecoratedSkillAssessment':                           COMLinkedinLearningAPIDecoCo;
    'com.linkedin.learning.api.deco.content.DecoratedCourseObjective':                          COMLinkedinLearningAPIDecoContentDecoratedCourseObjective;
    'com.linkedin.learning.api.deco.common.AuthorProfile':                                      COMLinkedinLearningAPIDecoCommonAuthorProfile;
    'com.linkedin.learning.api.deco.common.DecoratedSkill':                                     COMLinkedinLearningAPIDecoCommonDecoratedSkill;
    'com.linkedin.learning.api.deco.socialproof.DecoratedViewerCounts':                         COMLinkedinLearningAPIDecoSocialproofDecoratedViewerCounts;
    'com.linkedin.learning.api.deco.content.DecoratedExerciseFile':                             COMLinkedinLearningAPIDecoContentDecoratedExerciseFile;
    'com.linkedin.learning.api.deco.social.DecoratedContentReactionByContent':                  COMLinkedinLearningAPIDeco;
    'com.linkedin.learning.api.deco.common.FullPaging':                                         COMLinkedinLearningAPIDecoCommonFullPaging;
    'com.linkedin.learning.api.deco.content.DecoratedContentVideo':                             COMLinkedinLearningAPIDecoContentDecoratedContentVideo;
    'com.linkedin.learning.api.deco.content.DecoratedReplacedByCourse':                         COMLinkedinLearningAPIDecoContentDecoratedReplacedByCourse;
    'com.linkedin.learning.api.deco.content.DecoratedAuthor':                                   COMLinkedinLearningAPIDecoContentDecoratedAuthor;
    'com.linkedin.learning.api.deco.socialproof.DecoratedTitleViewerCount':                     COMLinkedinLearningAPIDecoSocialproofDecoratedViewerCount;
}

export interface COMLinkedinLearningAPIDecoBookmarkDecoratedBookmark {
    fields:   COMLinkedinLearningAPIDecoBookmarkDecoratedBookmarkFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoBookmarkDecoratedBookmarkFields {
    totalBookmarks: LivingstoneSouthernWhiteFacedOwl;
    createdAt:      LivingstoneSouthernWhiteFacedOwl;
    cachingKey:     LivingstoneSouthernWhiteFacedOwl;
    entityUrn:      LivingstoneSouthernWhiteFacedOwl;
}

export interface LivingstoneSouthernWhiteFacedOwl {
    type: string;
}

export interface COMLinkedinLearningAPIDecoCommonActivityTransferConsent {
    fields:   COMLinkedinLearningAPIDecoCommonActivityTransferConsentFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonActivityTransferConsentFields {
    cachingKey: LivingstoneSouthernWhiteFacedOwl;
    consented:  LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoCommonAuthorProfile {
    fields:   COMLinkedinLearningAPIDecoCommonAuthorProfileFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonAuthorProfileFields {
    lastName:     LivingstoneSouthernWhiteFacedOwl;
    firstName:    LivingstoneSouthernWhiteFacedOwl;
    entityUrn:    LivingstoneSouthernWhiteFacedOwl;
    displayName:  LivingstoneSouthernWhiteFacedOwl;
    publicUrl:    LivingstoneSouthernWhiteFacedOwl;
    profileImage: LivingstoneSouthernWhiteFacedOwl;
    cachingKey:   LivingstoneSouthernWhiteFacedOwl;
    headline:     LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedCompany {
    fields:   COMLinkedinLearningAPIDecoCommonDecoratedCompanyFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedCompanyFields {
    name:       LivingstoneSouthernWhiteFacedOwl;
    logo:       LivingstoneSouthernWhiteFacedOwl;
    cachingKey: LivingstoneSouthernWhiteFacedOwl;
    entityUrn:  LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedProfile {
    fields:   COMLinkedinLearningAPIDecoCommonDecoratedProfileFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedProfileFields {
    memberDistance:          LivingstoneSouthernWhiteFacedOwl;
    lastName:                LivingstoneSouthernWhiteFacedOwl;
    vanityName:              LivingstoneSouthernWhiteFacedOwl;
    firstName:               LivingstoneSouthernWhiteFacedOwl;
    entityUrn:               LivingstoneSouthernWhiteFacedOwl;
    publicUrl:               LivingstoneSouthernWhiteFacedOwl;
    companyResolutionResult: ResolutionResult;
    currentJobTitle:         LivingstoneSouthernWhiteFacedOwl;
    company:                 LivingstoneSouthernWhiteFacedOwl;
    profileImage:            LivingstoneSouthernWhiteFacedOwl;
    cachingKey:              LivingstoneSouthernWhiteFacedOwl;
    headline:                LivingstoneSouthernWhiteFacedOwl;
}

export interface ResolutionResult {
    type:         string;
    resolvedFrom: string;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedSkill {
    fields:   COMLinkedinLearningAPIDecoCommonDecoratedSkillFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedSkillFields {
    name:        LivingstoneSouthernWhiteFacedOwl;
    assessment:  LivingstoneSouthernWhiteFacedOwl;
    cachingKey:  LivingstoneSouthernWhiteFacedOwl;
    entityUrn:   LivingstoneSouthernWhiteFacedOwl;
    trackingUrn: LivingstoneSouthernWhiteFacedOwl;
    trackingId:  LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoCo {
    fields:   COMLinkedinLearningAPIDecoCommonDecoratedSkillAssessmentFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedSkillAssessmentFields {
    url: LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoCommonFacePileProfile {
    fields:   COMLinkedinLearningAPIDecoCommonFacePileProfileFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonFacePileProfileFields {
    lastName:     LivingstoneSouthernWhiteFacedOwl;
    firstName:    LivingstoneSouthernWhiteFacedOwl;
    profileImage: LivingstoneSouthernWhiteFacedOwl;
    cachingKey:   LivingstoneSouthernWhiteFacedOwl;
    entityUrn:    LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoCommonFullPaging {
    fields:   COMLinkedinLearningAPIDecoCommonFullPagingFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonFullPagingFields {
    start: LivingstoneSouthernWhiteFacedOwl;
    count: LivingstoneSouthernWhiteFacedOwl;
    total: LivingstoneSouthernWhiteFacedOwl;
    links: Links;
}

export interface Links {
    type: PurpleType;
}

export interface PurpleType {
    array: string;
}

export interface COMLinkedinLearningAPIDecoCommonProviderCompany {
    fields:   COMLinkedinLearningAPIDecoCommonProviderCompanyFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonProviderCompanyFields {
    websiteUrl:  LivingstoneSouthernWhiteFacedOwl;
    entityUrn:   LivingstoneSouthernWhiteFacedOwl;
    name:        LivingstoneSouthernWhiteFacedOwl;
    tagline:     LivingstoneSouthernWhiteFacedOwl;
    logo:        LivingstoneSouthernWhiteFacedOwl;
    description: LivingstoneSouthernWhiteFacedOwl;
    cachingKey:  LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentDecorateCredentialingAgency {
    fields:   COMLinkedinLearningAPIDecoContentDecorateCredentialingAgencyFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecorateCredentialingAgencyFields {
    name:      LivingstoneSouthernWhiteFacedOwl;
    entityUrn: LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentDecorateCredentialingProgram {
    fields:   COMLinkedinLearningAPIDecoContentDecorateCredentialingProgramFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecorateCredentialingProgramFields {
    name:                LivingstoneSouthernWhiteFacedOwl;
    description:         LivingstoneSouthernWhiteFacedOwl;
    credentialingAgency: LivingstoneSouthernWhiteFacedOwl;
    metricName:          LivingstoneSouthernWhiteFacedOwl;
    cachingKey:          LivingstoneSouthernWhiteFacedOwl;
    entityUrn:           LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedAuthor {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedAuthorFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedAuthorFields {
    autoPopulateMentionForCertificateShares: LivingstoneSouthernWhiteFacedOwl;
    trackingUrn:                             LivingstoneSouthernWhiteFacedOwl;
    biography:                               LivingstoneSouthernWhiteFacedOwl;
    follow:                                  LivingstoneSouthernWhiteFacedOwl;
    identityResolutionResult:                ResolutionResult;
    influencer:                              LivingstoneSouthernWhiteFacedOwl;
    entityUrn:                               LivingstoneSouthernWhiteFacedOwl;
    identity:                                LivingstoneSouthernWhiteFacedOwl;
    shortBiography:                          LivingstoneSouthernWhiteFacedOwl;
    cachingKey:                              LivingstoneSouthernWhiteFacedOwl;
    followResolutionResult:                  ResolutionResult;
    slug:                                    LivingstoneSouthernWhiteFacedOwl;
    trackingId:                              LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedContentAssignment {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedContentAssignmentFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedContentAssignmentFields {
    dueAt:                    LivingstoneSouthernWhiteFacedOwl;
    entityUrn:                LivingstoneSouthernWhiteFacedOwl;
    assignerResolutionResult: AssignerResolutionResult;
    assignedAt:               LivingstoneSouthernWhiteFacedOwl;
    assigner:                 Assigner;
    message:                  LivingstoneSouthernWhiteFacedOwl;
    cachingKey:               LivingstoneSouthernWhiteFacedOwl;
}

export interface Assigner {
    type: AssignerType;
}

export interface AssignerType {
    union: PurpleUnion;
}

export interface PurpleUnion {
    company: string;
    profile: string;
}

export interface AssignerResolutionResult {
    type:         AssignerType;
    resolvedFrom: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedContentVideo {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedContentVideoFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedContentVideoFields {
    bookmarkInjectionResult:                InjectionResult;
    visibility:                             LivingstoneSouthernWhiteFacedOwl;
    entityType:                             LivingstoneSouthernWhiteFacedOwl;
    trackingUrn:                            LivingstoneSouthernWhiteFacedOwl;
    primaryThumbnail:                       LivingstoneSouthernWhiteFacedOwl;
    title:                                  LivingstoneSouthernWhiteFacedOwl;
    lyndaVideoViewingStatusInjectionResult: InjectionResult;
    duration:                               LivingstoneSouthernWhiteFacedOwl;
    entityUrn:                              LivingstoneSouthernWhiteFacedOwl;
    thumbnails:                             Links;
    cachingKey:                             LivingstoneSouthernWhiteFacedOwl;
    slug:                                   LivingstoneSouthernWhiteFacedOwl;
    trackingId:                             LivingstoneSouthernWhiteFacedOwl;
}

export interface InjectionResult {
    type:        string;
    isInjection: boolean;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedCourse {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedCourseFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedCourseFields {
    contextualUnlockErrorType:                    LivingstoneSouthernWhiteFacedOwl;
    examsResolutionResults:                       SResolutionResults;
    difficultyLevel:                              LivingstoneSouthernWhiteFacedOwl;
    trackingUrn:                                  LivingstoneSouthernWhiteFacedOwl;
    activatedAt:                                  LivingstoneSouthernWhiteFacedOwl;
    providerResolutionResult:                     ResolutionResult;
    contentReactionInjectionResult:               InjectionResult;
    description:                                  LivingstoneSouthernWhiteFacedOwl;
    lyndaCourseViewingStatusInjectionResult:      InjectionResult;
    title:                                        LivingstoneSouthernWhiteFacedOwl;
    authorsResolutionResults:                     SResolutionResults;
    duration:                                     LivingstoneSouthernWhiteFacedOwl;
    lifecycle:                                    LivingstoneSouthernWhiteFacedOwl;
    presentation:                                 Presentation;
    skills:                                       Links;
    features:                                     LivingstoneSouthernWhiteFacedOwl;
    entityUrn:                                    LivingstoneSouthernWhiteFacedOwl;
    provider:                                     LivingstoneSouthernWhiteFacedOwl;
    credentialingPrograms:                        Links;
    viewerCountsInjectionResult:                  InjectionResult;
    skillsResolutionResults:                      SResolutionResults;
    interactionStatusResolutionResult:            ResolutionResult;
    slug:                                         LivingstoneSouthernWhiteFacedOwl;
    interactionStatus:                            LivingstoneSouthernWhiteFacedOwl;
    trackingId:                                   LivingstoneSouthernWhiteFacedOwl;
    updatedAt:                                    LivingstoneSouthernWhiteFacedOwl;
    bookmarkInjectionResult:                      InjectionResult;
    assignmentResolutionResult:                   ResolutionResult;
    visibility:                                   LivingstoneSouthernWhiteFacedOwl;
    entityType:                                   LivingstoneSouthernWhiteFacedOwl;
    replacedBy:                                   LivingstoneSouthernWhiteFacedOwl;
    assignment:                                   LivingstoneSouthernWhiteFacedOwl;
    hashedCourseId:                               LivingstoneSouthernWhiteFacedOwl;
    primaryThumbnail:                             LivingstoneSouthernWhiteFacedOwl;
    replacedByResolutionResult:                   ResolutionResult;
    deletedAt:                                    LivingstoneSouthernWhiteFacedOwl;
    socialWatchersSummary:                        LivingstoneSouthernWhiteFacedOwl;
    exams:                                        Links;
    contents:                                     Contents;
    exerciseFiles:                                Links;
    deprecatedAt:                                 LivingstoneSouthernWhiteFacedOwl;
    subtitle:                                     LivingstoneSouthernWhiteFacedOwl;
    contextualUnlockExtensionEligible:            LivingstoneSouthernWhiteFacedOwl;
    objectives:                                   Links;
    activityTransferConsentStatusInjectionResult: InjectionResult;
    cachingKey:                                   LivingstoneSouthernWhiteFacedOwl;
    authors:                                      Links;
}

export interface SResolutionResults {
    type:         AuthorsResolutionResultsType;
    resolvedFrom: string;
}

export interface AuthorsResolutionResultsType {
    map: string;
}

export interface Contents {
    type: ContentsType;
}

export interface ContentsType {
    array: ArrayClass;
}

export interface ArrayClass {
    union: ArrayUnion;
}

export interface ArrayUnion {
    section: string;
    item:    string;
}

export interface Presentation {
    type: PresentationType;
}

export interface PresentationType {
    union: FluffyUnion;
}

export interface FluffyUnion {
    externalUrl: string;
    videoPlay:   string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedCourseObjective {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedCourseObjectiveFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedCourseObjectiveFields {
    description: LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedCredentialingProgramAssociation {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedCredentialingProgramAssociationFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedCredentialingProgramAssociationFields {
    metricValue:                          LivingstoneSouthernWhiteFacedOwl;
    description:                          LivingstoneSouthernWhiteFacedOwl;
    programTaxonomy:                      LivingstoneSouthernWhiteFacedOwl;
    credentialingProgram:                 LivingstoneSouthernWhiteFacedOwl;
    credentialingProgramResolutionResult: ResolutionResult;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedExerciseFile {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedExerciseFileFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedExerciseFileFields {
    name:        LivingstoneSouthernWhiteFacedOwl;
    url:         LivingstoneSouthernWhiteFacedOwl;
    sizeInBytes: LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedFeatures {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedFeaturesFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedFeaturesFields {
    contentPrice:                   LivingstoneSouthernWhiteFacedOwl;
    studyGroupAccessible:           LivingstoneSouthernWhiteFacedOwl;
    contentRating:                  LivingstoneSouthernWhiteFacedOwl;
    suppressUpsell:                 LivingstoneSouthernWhiteFacedOwl;
    socialQuestions:                LivingstoneSouthernWhiteFacedOwl;
    contentWatchActivityVisibility: LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedProgramTaxonomy {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedProgramTaxonomyFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedProgramTaxonomyFields {
    tags:  Links;
    label: LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedReplacedByCourse {
    fields:   COMLinkedinLearningAPIDecoContentDecoratedReplacedByCourseFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedReplacedByCourseFields {
    description:      LivingstoneSouthernWhiteFacedOwl;
    title:            LivingstoneSouthernWhiteFacedOwl;
    primaryThumbnail: LivingstoneSouthernWhiteFacedOwl;
    cachingKey:       LivingstoneSouthernWhiteFacedOwl;
    slug:             LivingstoneSouthernWhiteFacedOwl;
    entityType:       LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentTOCItem {
    fields:   COMLinkedinLearningAPIDecoContentTOCItemFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentTOCItemFields {
    cachingKey:              LivingstoneSouthernWhiteFacedOwl;
    contentResolutionResult: FieldsContentResolutionResult;
    content:                 FieldsContent;
}

export interface FieldsContent {
    type: ContentType;
}

export interface ContentType {
    union: UnionClass;
}

export interface FieldsContentResolutionResult {
    type:         ContentType;
    resolvedFrom: string;
}

export interface COMLinkedinLearningAPIDecoContentTOCSection {
    fields:   COMLinkedinLearningAPIDecoContentTOCSectionFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentTOCSectionFields {
    title:      LivingstoneSouthernWhiteFacedOwl;
    cachingKey: LivingstoneSouthernWhiteFacedOwl;
    items:      Links;
}

export interface COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningVideoPlayMetadata {
    fields:   COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningVideoPlayMetadataFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningVideoPlayMetadataFields {
    videoPlayMetadata: LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoContentTocAssessmentStatus {
    fields:   COMLinkedinLearningAPIDecoContentTocAssessmentStatusFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentTocAssessmentStatusFields {
    score:        LivingstoneSouthernWhiteFacedOwl;
    nextQuestion: LivingstoneSouthernWhiteFacedOwl;
    completedAt:  LivingstoneSouthernWhiteFacedOwl;
    statusType:   LivingstoneSouthernWhiteFacedOwl;
    cachingKey:   LivingstoneSouthernWhiteFacedOwl;
    entityUrn:    LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDeco {
    fields:   COMLinkedinLearningAPIDecoContentTocAssessmentStatusByAssessmentWithoutResponseFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentTocAssessmentStatusByAssessmentWithoutResponseFields {
    paging:   LivingstoneSouthernWhiteFacedOwl;
    elements: Links;
}

export interface COMLinkedinLearningAPIDecoContentTocAssessmentWithoutQuestions {
    fields:   COMLinkedinLearningAPIDecoContentTocAssessmentWithoutQuestionsFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentTocAssessmentWithoutQuestionsFields {
    timeLimit:                       LivingstoneSouthernWhiteFacedOwl;
    totalQuestions:                  LivingstoneSouthernWhiteFacedOwl;
    assessmentStatusInjectionResult: InjectionResult;
    entityUrn:                       LivingstoneSouthernWhiteFacedOwl;
    entityType:                      LivingstoneSouthernWhiteFacedOwl;
    trackingUrn:                     LivingstoneSouthernWhiteFacedOwl;
    passingScore:                    LivingstoneSouthernWhiteFacedOwl;
    credentialingProgram:            LivingstoneSouthernWhiteFacedOwl;
    title:                           LivingstoneSouthernWhiteFacedOwl;
    cachingKey:                      LivingstoneSouthernWhiteFacedOwl;
    trackingId:                      LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoFollowDecoratedFollow {
    fields:   COMLinkedinLearningAPIDecoFollowDecoratedFollowFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoFollowDecoratedFollowFields {
    cachingKey: LivingstoneSouthernWhiteFacedOwl;
    entityUrn:  LivingstoneSouthernWhiteFacedOwl;
    following:  LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoSocialDecoratedContentReaction {
    fields:   COMLinkedinLearningAPIDecoSocialDecoratedContentReactionFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoSocialDecoratedContentReactionFields {
    totalReactions: LivingstoneSouthernWhiteFacedOwl;
    reactors:       Links;
    reacted:        LivingstoneSouthernWhiteFacedOwl;
    cachingKey:     LivingstoneSouthernWhiteFacedOwl;
    entityUrn:      LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoSocialDecoratedSocialWatchersSummary {
    fields:   COMLinkedinLearningAPIDecoSocialDecoratedSocialWatchersSummaryFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoSocialDecoratedSocialWatchersSummaryFields {
    facepiles:        LivingstoneSouthernWhiteFacedOwl;
    coworkersTotal:   LivingstoneSouthernWhiteFacedOwl;
    entityUrn:        LivingstoneSouthernWhiteFacedOwl;
    watchersTotal:    LivingstoneSouthernWhiteFacedOwl;
    connectionsTotal: LivingstoneSouthernWhiteFacedOwl;
    jobTitleTotal:    LivingstoneSouthernWhiteFacedOwl;
    cachingKey:       LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoSocialFacePileReactor {
    fields:   COMLinkedinLearningAPIDecoSocialFacePileReactorFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoSocialFacePileReactorFields {
    profileResolutionResult: ResolutionResult;
    reaction:                LivingstoneSouthernWhiteFacedOwl;
    profile:                 LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoSocialproofDecoratedViewerCount {
    fields:   COMLinkedinLearningAPIDecoSocialproofDecoratedCompanyViewerCountFields;
    baseType: BaseTypeEnum;
}

export interface COMLinkedinLearningAPIDecoSocialproofDecoratedCompanyViewerCountFields {
    name:  LivingstoneSouthernWhiteFacedOwl;
    count: LivingstoneSouthernWhiteFacedOwl;
    pivot: LivingstoneSouthernWhiteFacedOwl;
    image: LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoSocialproofDecoratedViewerCounts {
    fields:   COMLinkedinLearningAPIDecoSocialproofDecoratedViewerCountsFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoSocialproofDecoratedViewerCountsFields {
    total:     LivingstoneSouthernWhiteFacedOwl;
    byCompany: Links;
    byTitle:   Links;
}

export interface COMLinkedinLearningAPIDecoStatusDecoratedContentInteractionStatus {
    fields:   COMLinkedinLearningAPIDecoStatusDecoratedContentInteractionStatusFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoStatusDecoratedContentInteractionStatusFields {
    markedAsHidden:     LivingstoneSouthernWhiteFacedOwl;
    progressState:      LivingstoneSouthernWhiteFacedOwl;
    completedAt:        LivingstoneSouthernWhiteFacedOwl;
    firstViewedAt:      LivingstoneSouthernWhiteFacedOwl;
    entityUrn:          LivingstoneSouthernWhiteFacedOwl;
    progressPercentage: LivingstoneSouthernWhiteFacedOwl;
    cachingKey:         LivingstoneSouthernWhiteFacedOwl;
    lastViewedAt:       LivingstoneSouthernWhiteFacedOwl;
}

export interface COMLinkedinLearningAPIDecoStatusDecoratedLyndaViewingStatus {
    fields:   COMLinkedinLearningAPIDecoStatusDecoratedLyndaCourseViewingStatusFields;
    baseType: string;
}

export interface COMLinkedinLearningAPIDecoStatusDecoratedLyndaCourseViewingStatusFields {
    cachingKey: LivingstoneSouthernWhiteFacedOwl;
    details:    LivingstoneSouthernWhiteFacedOwl;
}
