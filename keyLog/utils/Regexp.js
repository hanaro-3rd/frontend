export const checkPersonalNumberChange = (text) => {
  let cleaned = ("" + text).replace(/\D/g, "");
  let match;

  if (cleaned.length < 7) {
    match = cleaned.match(/^(\d{0,6})/);
  } else {
    match = cleaned.match(/^(\d{6})(\d{0,7})/);
  }

  if (match) {
    const part1 = match[1] || "",
      part2 = match[2] || "";

    return [part1, part2];
  } else {
    return [null, null];
  }
};

export const checkPhoneChange = (number) => {
  let cleaned = ("" + number).replace(/\D/g, "");
  let match;

  if (cleaned.length < 4) {
    match = cleaned.match(/^(\d{0,3})/);
  } else if (cleaned.length < 7) {
    match = cleaned.match(/^(\d{3})(\d{0,4})/);
  } else {
    match = cleaned.match(/^(\d{3})(\d{4})(\d{0,4})/);
  }

  if (match) {
    const part1 = match[1] || "",
      part2 = match[2] || "",
      part3 = match[3] || "";
    return [part1, part2, part3];
  } else {
    return [null, null, null];
  }
};
