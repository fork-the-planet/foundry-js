/**
 *
 * This file is autogenerated from the available APIs for App Platform.
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

import { IncidentsApiBridge } from './incidents/bridge';
import { RemoteResponseApiBridge } from './remote-response/bridge';

import type { Bridge } from '../bridge';

export default class FalconPublicApis {
  bridge: Bridge;
  incidents: IncidentsApiBridge;
  remoteResponse: RemoteResponseApiBridge;

  constructor(bridge: Bridge) {
    this.bridge = bridge;
    this.incidents = new IncidentsApiBridge(bridge);
    this.remoteResponse = new RemoteResponseApiBridge(bridge);
  }
}
