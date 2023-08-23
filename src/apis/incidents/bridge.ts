/**
 *
 * This file is autogenerated.
 *
 * DO NOT EDIT DIRECTLY
 *
 **/

import type { Bridge } from '../../bridge';
import type {
  GetQueriesIncidentsV1ApiResponse,
  GetQueriesIncidentsV1QueryParams,
  GetQueriesIncidentsV1RequestMessage,
  PostEntitiesIncidentsGetV1ApiResponse,
  PostEntitiesIncidentsGetV1PostData,
  PostEntitiesIncidentsGetV1QueryParams,
  PostEntitiesIncidentsGetV1RequestMessage,
} from './types';

export class IncidentsApiBridge {
  private bridge;

  constructor(bridge: Bridge) {
    this.bridge = bridge;
  }

  async getIncidentIds(
    urlParams: GetQueriesIncidentsV1QueryParams = {}
  ): Promise<GetQueriesIncidentsV1ApiResponse> {
    const message: GetQueriesIncidentsV1RequestMessage = {
      type: 'api',
      api: 'incidents',
      method: 'getQueriesIncidentsV1',
      payload: {
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }

  async getIncidentEntities(
    postBody: PostEntitiesIncidentsGetV1PostData,
    urlParams: PostEntitiesIncidentsGetV1QueryParams = {}
  ): Promise<PostEntitiesIncidentsGetV1ApiResponse> {
    const message: PostEntitiesIncidentsGetV1RequestMessage = {
      type: 'api',
      api: 'incidents',
      method: 'postEntitiesIncidentsGetV1',
      payload: {
        body: postBody,
        params: urlParams,
      },
    };

    return this.bridge.postMessage(message);
  }
}
