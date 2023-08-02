const bookBtn = document.querySelector('.book-btn');
const bookValue = document.querySelector('.bookValue');
const chapterValue = document.querySelector('.chapterValue');
const verseValue = document.querySelector('.verseValue');
const display = document.querySelector('.quotes');

const getData = async () => {
  try {
    const data = await fetch(`https://bible-api.com/${bookValue.value}+${chapterValue.value}:${verseValue.value}?translation=kjv`);
    if (!data.ok) {
      throw new Error("can't get your data");
    }
    const res = await data.json();
    display.innerHTML = `
      <p><span>Book:</span> ${bookValue.value}</p>
      <p><span>Chapter:</span> ${chapterValue.value}</p>
      <p><span>Verse:</span> ${verseValue.value}</p>
      <p><span>Scripture:</span> ${res.text}</p>
      <p><span>Translation:</span> ${res.translation_name}(${res.translation_id})</p>
    `
  } catch (err) {
    console.log(err);
  }
};

bookBtn.addEventListener('click', getData);