import { publicApis } from './apis/public-api';
import { PLATFORM_EVENTS } from './apis/types';
import { getBridgeInstance } from './bridge';

interface ReadyEventData {
  payload: {
    name: 'Ready';
    origin: string;
  };
}

export const falcon = {
  bridge: getBridgeInstance(),

  init() {
    const handleReadyEvent = (data: ReadyEventData) => {
      if (data.payload.name === PLATFORM_EVENTS.READY) {
        this.bridge.message.off(handleReadyEvent);

        this.bridge.setOrigin(data.payload?.origin);
        this.bridge.postMessage({ type: PLATFORM_EVENTS.READY });
      }
    };

    this.bridge.message.on(handleReadyEvent);
  },

  ...publicApis,
};
