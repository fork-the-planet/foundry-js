/**
 *
 * This file is autogenerated from the configuration file at `config/apis/incidents.json`.
 *
 * DO NOT EDIT DIRECTLY
 *
 * If you need to change the contents of this file please edit the above configuration file and
 * then run:
 *
 * ```
 * yarn cs-gen platform-apis
 * ```
 *
 **/

import type {
  BaseApiRequestMessage,
  BaseApiResponseMessage,
  ApiResponsePayload,
  BaseUrlParams,
  QueryParam,
} from '../../types';

export type IncidentsRequestApi = 'incidents';

// types for getQueriesIncidentsV1

export interface GetQueriesIncidentsV1QueryParams extends BaseUrlParams {
  filter?: string;
  limit?: QueryParam;
  offset?: QueryParam;
  sort?: QueryParam;
}

export type GetQueriesIncidentsV1ApiResponse = ApiResponsePayload<string>;

export interface GetQueriesIncidentsV1RequestMessage
  extends BaseApiRequestMessage<GetQueriesIncidentsV1QueryParams> {
  api: IncidentsRequestApi;
  method: 'getQueriesIncidentsV1';
}

export type GetQueriesIncidentsV1ResponseMessage =
  BaseApiResponseMessage<GetQueriesIncidentsV1ApiResponse>;

// types for postEntitiesIncidentsGetV1

export interface PostEntitiesIncidentsGetV1QueryParams extends BaseUrlParams {}

export interface PostEntitiesIncidentsGetV1PostData {}

export type PostEntitiesIncidentsGetV1ApiResponse = ApiResponsePayload<any>;

export interface PostEntitiesIncidentsGetV1RequestMessage
  extends BaseApiRequestMessage<
    PostEntitiesIncidentsGetV1QueryParams,
    PostEntitiesIncidentsGetV1PostData
  > {
  api: IncidentsRequestApi;
  method: 'postEntitiesIncidentsGetV1';
}

export type PostEntitiesIncidentsGetV1ResponseMessage =
  BaseApiResponseMessage<PostEntitiesIncidentsGetV1ApiResponse>;

// general types

export type IncidentsApiRequestMessage =
  | GetQueriesIncidentsV1RequestMessage
  | PostEntitiesIncidentsGetV1RequestMessage;
export type IncidentsApiResponseMessage =
  | GetQueriesIncidentsV1ResponseMessage
  | PostEntitiesIncidentsGetV1ResponseMessage;