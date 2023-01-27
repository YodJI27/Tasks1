// Задача
// В комнате находится человек. Через какое-то время в комнату заходит еще один человек и здоровается с первым. 
// Людей в комнате становится 2, а счетчик рукопожатий становится равен 1. 
// Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате. Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д. 
// Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ.


const сountingHandshakes = (arg) => {

    if(arg == 0 || arg <= 0) return 0
    
    return (arg * (arg + 1)) / 2
}

сountingHandshakes(9)

// Ответ: 45 рукопожатий