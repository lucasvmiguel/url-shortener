export const urlSchema = {
    urlExtended: String,
    urlShorten: String,
    shortcode: String,
    startDate: Date,
    lastSeenDate: Date,
    redirectCount: Number
};

export const isValidStruct = (obj) => {
  return true;
}

export const isValidSearch = (search) => {
  return true;
}

export const isValidParam = (search) => {
  return true;
}