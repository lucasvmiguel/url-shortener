export const urlSchema = {
    urlExtended: String,
    urlShorten: String,
    shortcode: String,
    startDate: Date,
    lastSeenDate: Date,
    redirectCount: Number
};

export const isValidStructToCreate = (obj) => {
  if (typeof obj !== 'object') return false;
  if (typeof obj.urlExtended !== 'string' || typeof obj.urlShorten !== 'string' || !obj.urlExtended) return false;

  return true;
};

export const isValidParam = (param) => {
  if (typeof param !== 'object') return false;
  if (typeof param.shortcode !== 'string' || !param.shortcode) return false;

  return true;
};