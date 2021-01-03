export interface InlineSubtitles {
  data: Data;
  meta: Meta;
  included: Included[];
}

export interface Data {
  paging: Paging;
  '*elements': string[];
  cachingKey: string;
  $type: string;
}

export interface Paging {
  count: number;
  start: number;
  links: any[];
}

export interface Included {
  createdAt?: null;
  entityUrn?: string;
  totalBookmarks?: null;
  cachingKey: string;
  $recipeTypes: string[];
  $type: string;
  lines?: Line[];
  parent?: string;
  activatedAt?: number;
  trackingUrn?: string;
  description?: null;
  title?: string;
  lifecycle?: string;
  duration?: Duration;
  presentation?: IncludedPresentation;
  provider?: null;
  viewerCountsInjectionResult?: ViewerCountsInjectionResult;
  '*lyndaVideoViewingStatusInjectionResult'?: string;
  '*transcriptsResolutionResult'?: string;
  slug?: string;
  trackingId?: string;
  interactionStatus?: null;
  visibility?: string;
  transcripts?: string;
  entityType?: string;
  assignment?: null;
  primaryThumbnail?: PrimaryThumbnail;
  deletedAt?: null;
  '*bookmarkInjectionResult'?: string;
  subtitle?: null;
  deprecatedAt?: null;
  authors?: null;
  details?: Details;
}

export interface Details {
  statusType: string;
  offsetInSeconds: number;
  durationInSecondsViewed: number;
  $type: string;
  lastViewedAt: number;
}

export interface Duration {
  duration: number;
  unit: string;
  $type: string;
}

export interface Line {
  transcriptStartAt: number;
  caption: string;
  $type: string;
}

export interface IncludedPresentation {
  videoPlay: VideoPlay;
}

export interface VideoPlay {
  $recipeTypes: string[];
  videoPlayMetadata: VideoPlayMetadata;
  $type: string;
}

export interface VideoPlayMetadata {
  progressiveStreams: ProgressiveStream[];
  aspectRatio: number;
  media: string;
  adaptiveStreams: AdaptiveStream[];
  $type: string;
  duration: number;
  provider: string;
  trackingId: string;
}

export interface AdaptiveStream {
  initialBitRate: number;
  protocol: string;
  mediaType: string;
  masterPlaylists: MasterPlaylist[];
  $type: string;
}

export interface MasterPlaylist {
  url: string;
  expiresAt: number;
  $type: string;
}

export interface ProgressiveStream {
  streamingLocations: MasterPlaylist[];
  size: number;
  bitRate: number;
  width: number;
  mediaType: string;
  height: number;
  $type: string;
}

export interface PrimaryThumbnail {
  source: Source;
  $type: string;
}

export interface Source {
  digitalmediaAsset: string;
  artifacts: Artifact[];
  rootUrl: string;
  $type: string;
}

export interface Artifact {
  width: number;
  fileIdentifyingUrlPathSegment: string;
  expiresAt: number;
  height: number;
  $type: string;
}

export interface ViewerCountsInjectionResult {
  total: number;
  $recipeTypes: string[];
  $type: string;
}

export interface Meta {
  microSchema: MicroSchema;
}

export interface MicroSchema {
  version: string;
  types: string;
}

export interface COMLinkedinLearningAPIDecoBookmarkDecoratedBookmark {
  fields: COMLinkedinLearningAPIDecoBookmarkDecoratedBookmarkFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoBookmarkDecoratedBookmarkFields {
  totalBookmarks: TartuGecko;
  createdAt: TartuGecko;
  cachingKey: TartuGecko;
  entityUrn: TartuGecko;
}

export interface TartuGecko {
  type: string;
}

export interface COMLinkedinLearningAPIDecoCommonAuthorProfile {
  fields: COMLinkedinLearningAPIDecoCommonAuthorProfileFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonAuthorProfileFields {
  lastName: TartuGecko;
  firstName: TartuGecko;
  entityUrn: TartuGecko;
  displayName: TartuGecko;
  publicUrl: TartuGecko;
  profileImage: TartuGecko;
  cachingKey: TartuGecko;
  headline: TartuGecko;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedCompany {
  fields: COMLinkedinLearningAPIDecoCommonDecoratedCompanyFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedCompanyFields {
  name: TartuGecko;
  logo: TartuGecko;
  cachingKey: TartuGecko;
  entityUrn: TartuGecko;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedProfile {
  fields: COMLinkedinLearningAPIDecoCommonDecoratedProfileFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonDecoratedProfileFields {
  memberDistance: TartuGecko;
  lastName: TartuGecko;
  vanityName: TartuGecko;
  firstName: TartuGecko;
  entityUrn: TartuGecko;
  publicUrl: TartuGecko;
  companyResolutionResult: ResolutionResult;
  currentJobTitle: TartuGecko;
  company: TartuGecko;
  profileImage: TartuGecko;
  cachingKey: TartuGecko;
  headline: TartuGecko;
}

export interface ResolutionResult {
  type: string;
  resolvedFrom: string;
}

export interface COMLinkedinLearningAPIDecoCommonProviderCompany {
  fields: COMLinkedinLearningAPIDecoCommonProviderCompanyFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoCommonProviderCompanyFields {
  websiteUrl: TartuGecko;
  entityUrn: TartuGecko;
  name: TartuGecko;
  tagline: TartuGecko;
  logo: TartuGecko;
  description: TartuGecko;
  cachingKey: TartuGecko;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedAuthor {
  fields: COMLinkedinLearningAPIDecoContentDecoratedAuthorFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedAuthorFields {
  influencer: TartuGecko;
  entityUrn: TartuGecko;
  identity: TartuGecko;
  trackingUrn: TartuGecko;
  shortBiography: TartuGecko;
  biography: TartuGecko;
  follow: TartuGecko;
  cachingKey: TartuGecko;
  followResolutionResult: ResolutionResult;
  identityResolutionResult: ResolutionResult;
  slug: TartuGecko;
  trackingId: TartuGecko;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedContentAssignment {
  fields: COMLinkedinLearningAPIDecoContentDecoratedContentAssignmentFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedContentAssignmentFields {
  dueAt: TartuGecko;
  entityUrn: TartuGecko;
  assignerResolutionResult: AssignerResolutionResult;
  assignedAt: TartuGecko;
  assigner: Assigner;
  message: TartuGecko;
  cachingKey: TartuGecko;
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
  type: AssignerType;
  resolvedFrom: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedTranscript {
  fields: COMLinkedinLearningAPIDecoContentDecoratedTranscriptFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedTranscriptFields {
  lines: Lines;
  cachingKey: TartuGecko;
}

export interface Lines {
  type: LinesType;
}

export interface LinesType {
  array: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedVideo {
  fields: COMLinkedinLearningAPIDecoContentDecoratedVideoFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentDecoratedVideoFields {
  parent: TartuGecko;
  trackingUrn: TartuGecko;
  activatedAt: TartuGecko;
  providerResolutionResult: ResolutionResult;
  description: TartuGecko;
  title: TartuGecko;
  authorsResolutionResults: AuthorsResolutionResults;
  lyndaVideoViewingStatusInjectionResult: InjectionResult;
  duration: TartuGecko;
  lifecycle: TartuGecko;
  presentation: FieldsPresentation;
  entityUrn: TartuGecko;
  provider: TartuGecko;
  viewerCountsInjectionResult: InjectionResult;
  interactionStatusResolutionResult: ResolutionResult;
  slug: TartuGecko;
  interactionStatus: TartuGecko;
  trackingId: TartuGecko;
  bookmarkInjectionResult: InjectionResult;
  assignmentResolutionResult: ResolutionResult;
  visibility: TartuGecko;
  transcripts: TartuGecko;
  entityType: TartuGecko;
  assignment: TartuGecko;
  primaryThumbnail: TartuGecko;
  deletedAt: TartuGecko;
  deprecatedAt: TartuGecko;
  subtitle: TartuGecko;
  cachingKey: TartuGecko;
  transcriptsResolutionResult: ResolutionResult;
  authors: Lines;
}

export interface AuthorsResolutionResults {
  type: AuthorsResolutionResultsType;
  resolvedFrom: string;
}

export interface AuthorsResolutionResultsType {
  map: string;
}

export interface InjectionResult {
  type: string;
  isInjection: boolean;
}

export interface FieldsPresentation {
  type: PresentationType;
}

export interface PresentationType {
  union: FluffyUnion;
}

export interface FluffyUnion {
  externalUrl: string;
  videoPlay: string;
}

export interface COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningExternalURLMetadata {
  fields: COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningExternalURLMetadataFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningExternalURLMetadataFields {
  url: TartuGecko;
}

export interface COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningVideoPlayMetadata {
  fields: COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningVideoPlayMetadataFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoContentPresentationDecoratedLearningVideoPlayMetadataFields {
  videoPlayMetadata: TartuGecko;
}

export interface COMLinkedinLearningAPIDecoFollowDecoratedFollow {
  fields: COMLinkedinLearningAPIDecoFollowDecoratedFollowFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoFollowDecoratedFollowFields {
  cachingKey: TartuGecko;
  entityUrn: TartuGecko;
  following: TartuGecko;
}

export interface COMLinkedinLearningAPIDecoSocialproofTotalViewerCounts {
  fields: COMLinkedinLearningAPIDecoSocialproofTotalViewerCountsFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoSocialproofTotalViewerCountsFields {
  total: TartuGecko;
}

export interface COMLinkedinLearningAPIDecoStatusDecoratedContentInteractionStatus {
  fields: COMLinkedinLearningAPIDecoStatusDecoratedContentInteractionStatusFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoStatusDecoratedContentInteractionStatusFields {
  markedAsHidden: TartuGecko;
  progressState: TartuGecko;
  completedAt: TartuGecko;
  firstViewedAt: TartuGecko;
  entityUrn: TartuGecko;
  progressPercentage: TartuGecko;
  cachingKey: TartuGecko;
  lastViewedAt: TartuGecko;
}

export interface COMLinkedinLearningAPIDecoStatusDecoratedLyndaVideoViewingStatus {
  fields: COMLinkedinLearningAPIDecoStatusDecoratedLyndaVideoViewingStatusFields;
  baseType: string;
}

export interface COMLinkedinLearningAPIDecoStatusDecoratedLyndaVideoViewingStatusFields {
  cachingKey: TartuGecko;
  details: TartuGecko;
}
