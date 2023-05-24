import { MessageEnvelope, ResponseMessage } from 'types';
import FalconPublicApis from './apis/public-api';

export function assertConnection(falcon: FalconPublicApis) {
  if (!falcon.isConnected) {
    throw new Error(
      'You cannot call this API before having established a connection to the host!'
    );
  }
}

export function isValidResponse(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventData: any
): eventData is MessageEnvelope<ResponseMessage> {
  return !!eventData.meta.messageId;
}