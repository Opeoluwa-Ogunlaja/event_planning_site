import _ from "lodash";

export const capitalise = (string) => {
  return _.capitalize(string);
};

export const asteriskHash = (string) => {
  return new Array(string.length).fill("*").join("");
};

export const asteriskHashEdge = (string) => {
  let hash = new Array(string.length).fill("*");
  if (hash.length > 1) {
    let stringFirst = string[0];
    let stringLast = string[string.length - 1];
    hash[0] = stringFirst;
    hash[hash.length - 1] = stringLast;
  }
  return hash.join("");
};

export const toStrictBoolean = (val) => {
  if (val == 0 || val == "false") return false;

  return true;
};
