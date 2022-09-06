export function formatHeader(name) {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

export function formatValue(element, key, format) {
  let value = "";
  if (format[key]) {
    const words = format[key].split(".");
    words.forEach((word) => {
      value = value ? value[word] : element[word];
    });
  } else {
    value = element[key];
  }

  return value;
}

export function setValue(o, p, v) {
  const words = p.split(".");
  const wordsLength = words.length;

  let auxiliar = o;

  if (wordsLength) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const nextIndex = i + 1;

      if (i === words.length - 1) {
        auxiliar[word] = v;
      } else {
        if (!auxiliar[word]) {
          auxiliar[word] = isNaN(Number(words[nextIndex])) ? {} : [];
        }
        auxiliar = auxiliar[word];
      }
    }
  } else {
    o[p] = v;
  }
}

export function buildParams(data) {
  if (!data) return "";

  const params = new URLSearchParams();

  if (data) {
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((value) => params.append(key, value.toString()));
      } else {
        params.append(key, value.toString());
      }
    });
  }

  return params.toString();
}
