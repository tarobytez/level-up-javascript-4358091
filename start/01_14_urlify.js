function urlify(name) {
  const punctuation = /[.,/#!$%^&*;:{}=!\-?_`~()'"]/g;
  name = name.replace(punctuation, "");

  return name.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("Taro's blog, kinda, maybe? Who knows!"));