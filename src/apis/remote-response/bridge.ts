/**
 *
 * This file is autogenerated.
 *
 * DO NOT EDIT DIRECTLY
 *
 **/

import type { Bridge } from '../../bridge';
import {
  GetQueriesScriptsV1ApiResponse,
  GetQueriesScriptsV1QueryParams,
  GetQueriesScriptsV1RequestMessage,
  PostEntitiesScriptsGetV2ApiResponse,
  PostEntitiesScriptsGetV2PostData,
  PostEntitiesScriptsGetV2QueryParams,
  PostEntitiesScriptsGetV2RequestMessage,
} from './types';

export class RemoteResponseApiBridge {
  private bridge;

  constructor(bridge: Bridge) {
    this.bridge = bridge;
  }

  async getScriptIds(
    urlParams: GetQueriesScriptsV1QueryParams = {}
  ): Promise<GetQueriesScriptsV1ApiResponse> {
    const message: GetQueriesScriptsV1RequestMessage = {
      type: 'api',
      api: 'remoteResponse',
      method: 'getQueriesScriptsV1',
      payload: { params: urlParams },
    };

    return this.bridge.postMessage(message);
  }

  async getScriptEntities(
    postBody: PostEntitiesScriptsGetV2PostData,
    urlParams: PostEntitiesScriptsGetV2QueryParams = {}
  ): Promise<PostEntitiesScriptsGetV2ApiResponse> {
    const message: PostEntitiesScriptsGetV2RequestMessage = {
      type: 'api',
      api: 'remoteResponse',
      method: 'postEntitiesScriptsGetV2',
      payload: { body: postBody, params: urlParams },
    };

    return this.bridge.postMessage(message);
  }
}
