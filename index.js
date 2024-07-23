function isPangram(string) {
  // Приводим строку к нижнему регистру
  string = string.toLowerCase();

  // Создаем набор для хранения уникальных букв
  const alphabetSet = new Set();

  // Проходим по каждому символу строки
  for (let char of string) {
    // Проверяем, является ли символ буквой
    if (char >= "a" && char <= "z") {
      // Добавляем букву в набор
      alphabetSet.add(char);
    }
  }

  // Проверяем, содержит ли набор все 26 букв алфавита
  return alphabetSet.size === 26;
}
