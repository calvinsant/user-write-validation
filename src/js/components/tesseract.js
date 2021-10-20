import Tesseract from "tesseract.js";

Tesseract.recognize("dist/images/eng_bw.png", "eng", {
  logger: (m) => console.log(m),
}).then(({ data: { text } }) => {
  console.log(text);
});
