export interface VideoApiResponse {
  elements: Element[];
  paging: Paging;
}

export interface Element {
  parent: string;
  visibility: string;
  transcripts: string;
  entityType: string;
  activatedAt: number;
  trackingUrn: string;
  description: Description;
  primaryThumbnail: PrimaryThumbnail;
  title: string;
  duration: Duration;
  lifecycle: string;
  presentation: Presentation;
  entityUrn: string;
  cachingKey: string;
  slug: string;
  trackingId: string;
}

export interface Description {
  text: string;
}

export interface Duration {
  duration: number;
  unit: string;
}

export interface Presentation {
  videoPlay: VideoPlay;
}

export interface VideoPlay {
  audioPlayMetadata: OPlayMetadata;
  videoPlayMetadata: OPlayMetadata;
}

export interface OPlayMetadata {
  duration: number;
  progressiveStreams: ProgressiveStream[];
  provider: string;
  aspectRatio: number;
  media: string;
  trackingId: string;
  adaptiveStreams?: AdaptiveStream[];
}

export interface AdaptiveStream {
  initialBitRate: number;
  protocol: string;
  mediaType: string;
  masterPlaylists: MasterPlaylist[];
}

export interface MasterPlaylist {
  url: string;
  expiresAt: number;
}

export interface ProgressiveStream {
  streamingLocations: MasterPlaylist[];
  size: number;
  bitRate: number;
  width: number;
  mediaType: string;
  height: number;
}

export interface PrimaryThumbnail {
  source: Source;
}

export interface Source {
  'com.linkedin.common.VectorImage': COMLinkedinCommonVectorImage;
}

export interface COMLinkedinCommonVectorImage {
  digitalmediaAsset: string;
  artifacts: Artifact[];
  rootUrl: string;
}

export interface Artifact {
  width: number;
  fileIdentifyingUrlPathSegment: string;
  expiresAt: number;
  height: number;
}

export interface Paging {
  count: number;
  start: number;
  links: any[];
}
