export function formatHeader(name) {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

export function formatValue(element, key, format) {
  let value = "";
  if (format[key]) {
    const words = format[key].split(".");
    words.forEach((word) => {
      console.log(value);
      value = value?.[word];
    });
  } else {
    value = element[key];
  }

  return value;
}

export function buildParams(data) {
  const params = new URLSearchParams();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((value) => params.append(key, value.toString()));
    } else {
      params.append(key, value.toString());
    }
  });

  return params.toString();
}
