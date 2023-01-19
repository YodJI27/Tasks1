// Задача
// Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка..."). 
// Известно, что в строке встречаются повторяющиеся слова. 
// Нужно написать функцию на JS. На вход передаются строка с дублями, а на выходе мы получаем строку без дублей.


const getUniqueString =  (str) => {
    if(str.length == 0) return 0

    return [... new Set(str.split(','))].join(',')
}

const str = 'cat,dog,horse,cat,cow,dog,cow,horse,cat,dog,cat,dog,horse,cat,cow,dog,cow,horse,cat,dog'

getUniqueString(str)

// Ответ: cat,dog,horse,cow