export function formatHeader(name) {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

export function formatValue(element, key, format) {
  let value = element[key];
  if (format[key]) {
    const words = format[key].split(".");
    words.forEach((word) => {
      value = value?.[word];
    });
  }

  return value;
}
