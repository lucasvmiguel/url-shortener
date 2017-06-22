export const SetConfig = (config) => {
  return {type: 'SET_CONFIG', config: config}
};

export const CreateUrl = () => {
  return {type: 'CREATE_URL'}
};

export const CreateUrlSuccess = (shortenUrl) => {
  return {type: 'CREATE_URL_SUCCESS', shortenUrl: shortenUrl}
};

export const CreateUrlFailure = (err) => {
  return {type: 'CREATE_URL_FAILURE', err: err}
};