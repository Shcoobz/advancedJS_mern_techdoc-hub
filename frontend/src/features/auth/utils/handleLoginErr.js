import { HTTP_STATUS_CODES, MSG } from '../../../config/constants';

/**
 * @function getErrorMessage
 * @description Returns appropriate error message based on the HTTP status code of the error.
 */
function getErrorMessage(err) {
  if (!err.status) {
    return MSG.SERVER.noResponse;
  } else if (err.status === HTTP_STATUS_CODES.CLIENT.ERROR.badRequest) {
    return MSG.SERVER.missingData;
  } else if (err.status === HTTP_STATUS_CODES.CLIENT.ERROR.unauthorized) {
    return MSG.SERVER.unauthorized;
  } else {
    return err.data?.message || MSG.SERVER.unknownError;
  }
}

export default getErrorMessage;
