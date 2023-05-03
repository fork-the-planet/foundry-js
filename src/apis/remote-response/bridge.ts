/**
 *
 * This file is autogenerated from the configuration file at `config/apis/remote-response.json`.
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

import type { Bridge } from '../../bridge';
import type {
  GetQueriesScriptsV1QueryParams,
  PostEntitiesScriptsGetV2QueryParams,
} from './types-query';
import type { PostEntitiesScriptsGetV2PostData } from './types-request';
import type {
  GetQueriesScriptsV1ApiResponse,
  PostEntitiesScriptsGetV2ApiResponse,
} from './types-response';

export class RemoteResponseApiBridge {
  private bridge;

  constructor(bridge: Bridge) {
    this.bridge = bridge;
  }

  async getScriptIds(
    urlParams: GetQueriesScriptsV1QueryParams = {},
  ): Promise<GetQueriesScriptsV1ApiResponse> {
    return this.bridge.postMessage(
      {
        name: 'getQueriesScriptsV1',
        params: urlParams,
      },
      { type: 'remoteResponse' },
    );
  }

  async getScriptEntities(
    postBody: PostEntitiesScriptsGetV2PostData,
    urlParams: PostEntitiesScriptsGetV2QueryParams = {},
  ): Promise<PostEntitiesScriptsGetV2ApiResponse> {
    return this.bridge.postMessage(
      {
        name: 'postEntitiesScriptsGetV2',
        body: postBody,
        params: urlParams,
      },
      { type: 'remoteResponse' },
    );
  }
}
