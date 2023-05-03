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

import { setupApiBridgeInstance } from '../bridge';
import { IncidentsApiBridge } from './incidents/bridge';
import { RemoteResponseApiBridge } from './remote-response/bridge';

export const publicApis = {
  incidents: () => {
    return setupApiBridgeInstance<IncidentsApiBridge>(
      IncidentsApiBridge,
      (bridge) => new IncidentsApiBridge(bridge),
    );
  },

  remoteResponse: () => {
    return setupApiBridgeInstance<RemoteResponseApiBridge>(
      RemoteResponseApiBridge,
      (bridge) => new RemoteResponseApiBridge(bridge),
    );
  },
};
