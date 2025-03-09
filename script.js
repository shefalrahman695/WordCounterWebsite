// Word Counter Logic
const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const clearButton = document.getElementById('clearButton');

textInput.addEventListener('input', () => {
  const text = textInput.value.trim();
  const words = text.split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = words.length;
  charCount.textContent = text.length;
});

clearButton.addEventListener('click', () => {
  textInput.value = '';
  wordCount.textContent = 0;
  charCount.textContent = 0;
});