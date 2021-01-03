import { extractSubtitlesFromPage } from './extract-subtitles-from-page.function';

describe('extractSubtitlesFromPage tests', () => {
  it('Should properly extract lines from html page', () => {
    // Arrange
    const html = getMockHtml();

    // Act
    const lines = extractSubtitlesFromPage(html);

    // Assert
    expect(lines).toMatchSnapshot();
  });
});

function getMockHtml(): string {
  return `<html lang="en" class="artdeco windows"><head></head>
  <body data-t-link-to-event-attached="true" class="ember-application boot-complete">
<code style="display: none" id="bpr-guid-535535">
{
  "data": {
    "paging": { "count": 10, "start": 0, "links": [] },
    "*elements": [""],
    "cachingKey": "",
    "$type": ""
  },
  "meta": {
    "microSchema": {
      "version": "",
      "types": {
        "": {
          "fields": {
            "memberDistance": { "type": "" },
            "lastName": { "type": "" },
            "vanityName": { "type": "" },
            "firstName": { "type": "" },
            "entityUrn": { "type": "" },
            "publicUrl": { "type": "" },
            "companyResolutionResult": { "type": "" },
            "currentJobTitle": { "type": "" },
            "company": { "type": "" },
            "profileImage": { "type": "" },
            "cachingKey": { "type": "" },
            "headline": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.content.presentation.DecoratedLearningExternalUrlMetadata": {
          "fields": { "url": { "type": "" } },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.common.ProviderCompany": {
          "fields": {
            "websiteUrl": { "type": "" },
            "entityUrn": { "type": "" },
            "name": { "type": "" },
            "tagline": { "type": "" },
            "logo": { "type": "" },
            "description": { "type": "" },
            "cachingKey": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.status.DecoratedLyndaVideoViewingStatus": {
          "fields": {
            "cachingKey": { "type": "" },
            "details": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.follow.DecoratedFollow": {
          "fields": { "cachingKey": { "type": "" } },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.content.DecoratedContentAssignment": {
          "fields": {
            "dueAt": { "type": "" },
            "entityUrn": { "type": "" },
            "assignerResolutionResult": {
              "type": {
                "union": {
                  "company": "",
                  "profile": ""
                }
              },
              "resolvedFrom": ""
            },
            "assignedAt": { "type": "" },
            "assigner": { "type": { "union": { "company": "" } } },
            "message": { "type": "" },
            "cachingKey": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.common.DecoratedCompany": {
          "fields": {
            "name": { "type": "" },
            "logo": { "type": "" },
            "cachingKey": { "type": "" },
            "entityUrn": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.common.AuthorProfile": {
          "fields": {
            "lastName": { "type": "" },
            "firstName": { "type": "" },
            "entityUrn": { "type": "" },
            "displayName": { "type": "" },
            "publicUrl": { "type": "" },
            "profileImage": { "type": "" },
            "cachingKey": { "type": "" },
            "headline": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.content.DecoratedVideo": {
          "fields": {
            "parent": { "type": "" },
            "trackingUrn": { "type": "" },
            "activatedAt": { "type": "" },
            "providerResolutionResult": { "type": "" },
            "description": { "type": "" },
            "title": { "type": "" },
            "authorsResolutionResults": {
              "type": { "map": "" },
              "resolvedFrom": ""
            },
            "lyndaVideoViewingStatusInjectionResult": {
              "type": "",
              "isInjection": true
            },
            "duration": { "type": "" },
            "lifecycle": { "type": "" },
            "presentation": {
              "type": {
                "union": {
                  "externalUrl": "",
                  "videoPlay": ""
                }
              }
            },
            "entityUrn": { "type": "" },
            "provider": { "type": "" },
            "viewerCountsInjectionResult": { "type": "" },
            "interactionStatusResolutionResult": {
              "type": "",
              "resolvedFrom": ""
            },
            "slug": { "type": "" },
            "interactionStatus": { "type": "" },
            "trackingId": { "type": "" },
            "bookmarkInjectionResult": { "type": "" },
            "assignmentResolutionResult": {
              "type": "",
              "resolvedFrom": ""
            },
            "visibility": { "type": "" },
            "transcripts": { "type": "" },
            "entityType": { "type": "" },
            "assignment": { "type": "" },
            "primaryThumbnail": { "type": "" },
            "deletedAt": { "type": "" },
            "deprecatedAt": { "type": "" },
            "subtitle": { "type": "" },
            "cachingKey": { "type": "" },
            "transcriptsResolutionResult": {
              "type": "",
              "resolvedFrom": ""
            },
            "authors": { "type": { "array": "" } }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.content.presentation.DecoratedLearningVideoPlayMetadata": {
          "fields": { "videoPlayMetadata": { "type": "" } },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.status.DecoratedContentInteractionStatus": {
          "fields": {
            "markedAsHidden": { "type": "" },
            "progressState": { "type": "" },
            "completedAt": { "type": "" },
            "firstViewedAt": { "type": "" },
            "entityUrn": { "type": "" },
            "progressPercentage": { "type": "" },
            "cachingKey": { "type": "" },
            "lastViewedAt": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.content.DecoratedTranscript": {
          "fields": {
            "lines": { "type": { "array": "" } },
            "cachingKey": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.bookmark.DecoratedBookmark": {
          "fields": {
            "totalBookmarks": { "type": "" },
            "createdAt": { "type": "" },
            "cachingKey": { "type": "" },
            "entityUrn": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.content.DecoratedAuthor": {
          "fields": {
            "influencer": { "type": "" },
            "entityUrn": { "type": "" },
            "identity": { "type": "" },
            "trackingUrn": { "type": "" },
            "shortBiography": { "type": "" },
            "biography": { "type": "" },
            "follow": { "type": "" },
            "cachingKey": { "type": "" },
            "followResolutionResult": { "type": "" },
            "identityResolutionResult": { "type": "" },
            "slug": { "type": "" },
            "trackingId": { "type": "" }
          },
          "baseType": ""
        },
        "com.linkedin.learning.api.deco.socialproof.TotalViewerCounts": {
          "fields": { "total": { "type": "" } },
          "baseType": ""
        }
      }
    }
  },
  "included": [
    {
      "createdAt": null,
      "entityUrn": "",
      "totalBookmarks": null,
      "cachingKey": "",
      "$recipeTypes": [""],
      "$type": ""
    },
    {
      "cachingKey": "",
      "lines": [
        {
          "transcriptStartAt": 1000,
          "caption": " - Bla bla bla first subtitle.  ",
          "$type": ""
        },
        {
          "transcriptStartAt": 3006,
          "caption": " Bla bla bla next subtitle  ",
          "$type": ""
        }
      ],
      "$recipeTypes": [""],
      "$type": ""
    },
    {
      "parent": "",
      "activatedAt": 1575244800000,
      "trackingUrn": "",
      "description": {
        "text": "",
        "$type": ""
      },
      "title": "",
      "lifecycle": "",
      "duration": { "duration": 255, "unit": "" },
      "presentation": {
        "videoPlay": {
          "$recipeTypes": [""],
          "videoPlayMetadata": {
            "progressiveStreams": [
              {
                "streamingLocations": [
                  {
                    "url": "",
                    "expiresAt": 1609729200000,
                    "$type": ""
                  }
                ],
                "size": 7941218,
                "bitRate": 524,
                "width": 640,
                "mediaType": "",
                "height": 360,
                "$type": ""
              },
              {
                "streamingLocations": [
                  {
                    "url": "",
                    "expiresAt": 1609729200000,
                    "$type": ""
                  }
                ],
                "size": 31133139,
                "bitRate": 524,
                "width": 1280,
                "mediaType": "",
                "height": 720,
                "$type": ""
              },
              {
                "streamingLocations": [
                  {
                    "url": "",
                    "expiresAt": 1609729200000,
                    "$type": ""
                  }
                ],
                "size": 14206418,
                "bitRate": 524,
                "width": 960,
                "mediaType": "",
                "height": 540,
                "$type": ""
              }
            ],
            "aspectRatio": 1.7777778,
            "media": "",
            "adaptiveStreams": [
              {
                "initialBitRate": 200,
                "protocol": "",
                "mediaType": "",
                "masterPlaylists": [
                  {
                    "url": "",
                    "expiresAt": 1609729200000,
                    "$type": ""
                  }
                ],
                "$type": ""
              }
            ],
            "$type": "",
            "duration": 255822,
            "provider": "",
            "trackingId": ""
          },
          "$type": ""
        }
      },
      "entityUrn": "",
      "provider": null,
      "viewerCountsInjectionResult": {
        "total": 60410,
        "$recipeTypes": [""],
        "$type": ""
      },
      "*lyndaVideoViewingStatusInjectionResult": "",
      "*transcriptsResolutionResult": "",
      "slug": "",
      "trackingId": "",
      "interactionStatus": null,
      "visibility": "",
      "transcripts": "",
      "entityType": "",
      "assignment": null,
      "primaryThumbnail": {
        "source": {
          "digitalmediaAsset": "",
          "artifacts": [
            {
              "width": 256,
              "fileIdentifyingUrlPathSegment": "",
              "expiresAt": 1609729200000,
              "height": 144,
              "$type": ""
            },
            {
              "width": 512,
              "fileIdentifyingUrlPathSegment": "",
              "expiresAt": 1609729200000,
              "height": 288,
              "$type": ""
            },
            {
              "width": 100,
              "fileIdentifyingUrlPathSegment": "",
              "expiresAt": 1609729200000,
              "height": 60,
              "$type": ""
            },
            {
              "width": 432,
              "fileIdentifyingUrlPathSegment": "",
              "expiresAt": 1609729200000,
              "height": 240,
              "$type": ""
            },
            {
              "width": 1200,
              "fileIdentifyingUrlPathSegment": "",
              "expiresAt": 1609729200000,
              "height": 675,
              "$type": ""
            }
          ],
          "rootUrl": "",
          "$type": ""
        },
        "$type": ""
      },
      "$recipeTypes": [""],
      "$type": "",
      "deletedAt": null,
      "*bookmarkInjectionResult": "",
      "subtitle": null,
      "deprecatedAt": null,
      "cachingKey": "",
      "authors": null
    },
    {
      "details": {
        "statusType": "",
        "offsetInSeconds": 3,
        "durationInSecondsViewed": 255,
        "$type": "",
        "lastViewedAt": 1609615232294
      },
      "cachingKey": "",
      "$recipeTypes": [""],
      "$type": ""
    }
  ]
}

</code>
</body></html>`;
}
