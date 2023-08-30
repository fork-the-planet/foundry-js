/**
 *
 * This file is autogenerated.
 *
 * DO NOT EDIT DIRECTLY
 *
 **/

import type { Bridge } from '../../bridge';

import type {
  ApiResponsePayload,
  BaseApiRequestMessage,
  BaseApiResponseMessage,
  BaseUrlParams,
  QueryParam,
} from '../../types';

export type DetectsRequestApi = 'detects';

export type CommonApiResponseMessage =
  BaseApiResponseMessage<ApiResponsePayload>;

export interface CommonApiRequestMessage
  extends BaseApiRequestMessage<BaseUrlParams, unknown> {
  api: DetectsRequestApi;
}

// types for getEntitiesSuppressedDevicesV1

export interface GetEntitiesSuppressedDevicesV1QueryParams
  extends BaseUrlParams {
  ids?: QueryParam;
}

export type GetEntitiesSuppressedDevicesV1ApiResponse = ApiResponsePayload;

export type GetEntitiesSuppressedDevicesV1ResponseMessage =
  BaseApiResponseMessage<GetEntitiesSuppressedDevicesV1ApiResponse>;

export interface GetEntitiesSuppressedDevicesV1RequestMessage
  extends BaseApiRequestMessage<GetEntitiesSuppressedDevicesV1QueryParams> {
  api: DetectsRequestApi;
  method: 'getEntitiesSuppressedDevicesV1';
}

// types for patchEntitiesDetectsV2

export type PatchEntitiesDetectsV2QueryParams = BaseUrlParams;

export type PatchEntitiesDetectsV2ApiResponse = ApiResponsePayload;

export interface PatchEntitiesDetectsV2PostData {}

export type PatchEntitiesDetectsV2ResponseMessage =
  BaseApiResponseMessage<PatchEntitiesDetectsV2ApiResponse>;

export interface PatchEntitiesDetectsV2RequestMessage
  extends BaseApiRequestMessage<
    PatchEntitiesDetectsV2QueryParams,
    PatchEntitiesDetectsV2PostData
  > {
  api: DetectsRequestApi;
  method: 'patchEntitiesDetectsV2';
}

// types for patchQueriesDetectsV1

export type PatchQueriesDetectsV1QueryParams = BaseUrlParams;

export type PatchQueriesDetectsV1ApiResponse = ApiResponsePayload;

export interface PatchQueriesDetectsV1PostData {}

export type PatchQueriesDetectsV1ResponseMessage =
  BaseApiResponseMessage<PatchQueriesDetectsV1ApiResponse>;

export interface PatchQueriesDetectsV1RequestMessage
  extends BaseApiRequestMessage<
    PatchQueriesDetectsV1QueryParams,
    PatchQueriesDetectsV1PostData
  > {
  api: DetectsRequestApi;
  method: 'patchQueriesDetectsV1';
}

// types for patchQueriesDetectsV2

export type PatchQueriesDetectsV2QueryParams = BaseUrlParams;

export type PatchQueriesDetectsV2ApiResponse = ApiResponsePayload;

export interface PatchQueriesDetectsV2PostData {}

export type PatchQueriesDetectsV2ResponseMessage =
  BaseApiResponseMessage<PatchQueriesDetectsV2ApiResponse>;

export interface PatchQueriesDetectsV2RequestMessage
  extends BaseApiRequestMessage<
    PatchQueriesDetectsV2QueryParams,
    PatchQueriesDetectsV2PostData
  > {
  api: DetectsRequestApi;
  method: 'patchQueriesDetectsV2';
}

// types for postAggregatesDetectsGetV1

export type PostAggregatesDetectsGetV1QueryParams = BaseUrlParams;

export type PostAggregatesDetectsGetV1ApiResponse = ApiResponsePayload;

export interface PostAggregatesDetectsGetV1PostData {}

export type PostAggregatesDetectsGetV1ResponseMessage =
  BaseApiResponseMessage<PostAggregatesDetectsGetV1ApiResponse>;

export interface PostAggregatesDetectsGetV1RequestMessage
  extends BaseApiRequestMessage<
    PostAggregatesDetectsGetV1QueryParams,
    PostAggregatesDetectsGetV1PostData
  > {
  api: DetectsRequestApi;
  method: 'postAggregatesDetectsGetV1';
}

// types for postEntitiesSummariesGetV1

export type PostEntitiesSummariesGetV1QueryParams = BaseUrlParams;

export type PostEntitiesSummariesGetV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesSummariesGetV1PostData {}

export type PostEntitiesSummariesGetV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesSummariesGetV1ApiResponse>;

export interface PostEntitiesSummariesGetV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesSummariesGetV1QueryParams,
    PostEntitiesSummariesGetV1PostData
  > {
  api: DetectsRequestApi;
  method: 'postEntitiesSummariesGetV1';
}

// types for postEntitiesSuppressedDevicesV1

export interface PostEntitiesSuppressedDevicesV1QueryParams
  extends BaseUrlParams {
  ids?: QueryParam;
}

export type PostEntitiesSuppressedDevicesV1ApiResponse = ApiResponsePayload;

export interface PostEntitiesSuppressedDevicesV1PostData {}

export type PostEntitiesSuppressedDevicesV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesSuppressedDevicesV1ApiResponse>;

export interface PostEntitiesSuppressedDevicesV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesSuppressedDevicesV1QueryParams,
    PostEntitiesSuppressedDevicesV1PostData
  > {
  api: DetectsRequestApi;
  method: 'postEntitiesSuppressedDevicesV1';
}

// general types

export type DetectsApiRequestMessage =
  | GetEntitiesSuppressedDevicesV1RequestMessage
  | PatchEntitiesDetectsV2RequestMessage
  | PatchQueriesDetectsV1RequestMessage
  | PatchQueriesDetectsV2RequestMessage
  | PostAggregatesDetectsGetV1RequestMessage
  | PostEntitiesSummariesGetV1RequestMessage
  | PostEntitiesSuppressedDevicesV1RequestMessage;

export type DetectsApiResponseMessage =
  | GetEntitiesSuppressedDevicesV1ResponseMessage
  | PatchEntitiesDetectsV2ResponseMessage
  | PatchQueriesDetectsV1ResponseMessage
  | PatchQueriesDetectsV2ResponseMessage
  | PostAggregatesDetectsGetV1ResponseMessage
  | PostEntitiesSummariesGetV1ResponseMessage
  | PostEntitiesSuppressedDevicesV1ResponseMessage;

export class DetectsApiBridge {
  private bridge;

  constructor(bridge: Bridge) {
    this.bridge = bridge;
  }

  getBridge() {
    return this.bridge;
  }

  async getEntitiesSuppressedDevicesV1(
    urlParams: GetEntitiesSuppressedDevicesV1QueryParams = {},
  ): Promise<GetEntitiesSuppressedDevicesV1ApiResponse> {
    const message: GetEntitiesSuppressedDevicesV1RequestMessage = {
      type: 'api',
      api: 'detects',
      method: 'getEntitiesSuppressedDevicesV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async patchEntitiesDetectsV2(
    postBody: PatchEntitiesDetectsV2PostData,
    urlParams: PatchEntitiesDetectsV2QueryParams = {},
  ): Promise<PatchEntitiesDetectsV2ApiResponse> {
    const message: PatchEntitiesDetectsV2RequestMessage = {
      type: 'api',
      api: 'detects',
      method: 'patchEntitiesDetectsV2',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async patchQueriesDetectsV1(
    postBody: PatchQueriesDetectsV1PostData,
    urlParams: PatchQueriesDetectsV1QueryParams = {},
  ): Promise<PatchQueriesDetectsV1ApiResponse> {
    const message: PatchQueriesDetectsV1RequestMessage = {
      type: 'api',
      api: 'detects',
      method: 'patchQueriesDetectsV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async patchQueriesDetectsV2(
    postBody: PatchQueriesDetectsV2PostData,
    urlParams: PatchQueriesDetectsV2QueryParams = {},
  ): Promise<PatchQueriesDetectsV2ApiResponse> {
    const message: PatchQueriesDetectsV2RequestMessage = {
      type: 'api',
      api: 'detects',
      method: 'patchQueriesDetectsV2',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postAggregatesDetectsGetV1(
    postBody: PostAggregatesDetectsGetV1PostData,
    urlParams: PostAggregatesDetectsGetV1QueryParams = {},
  ): Promise<PostAggregatesDetectsGetV1ApiResponse> {
    const message: PostAggregatesDetectsGetV1RequestMessage = {
      type: 'api',
      api: 'detects',
      method: 'postAggregatesDetectsGetV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesSummariesGetV1(
    postBody: PostEntitiesSummariesGetV1PostData,
    urlParams: PostEntitiesSummariesGetV1QueryParams = {},
  ): Promise<PostEntitiesSummariesGetV1ApiResponse> {
    const message: PostEntitiesSummariesGetV1RequestMessage = {
      type: 'api',
      api: 'detects',
      method: 'postEntitiesSummariesGetV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async postEntitiesSuppressedDevicesV1(
    postBody: PostEntitiesSuppressedDevicesV1PostData,
    urlParams: PostEntitiesSuppressedDevicesV1QueryParams = {},
  ): Promise<PostEntitiesSuppressedDevicesV1ApiResponse> {
    const message: PostEntitiesSuppressedDevicesV1RequestMessage = {
      type: 'api',
      api: 'detects',
      method: 'postEntitiesSuppressedDevicesV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }
}
