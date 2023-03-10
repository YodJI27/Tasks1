// Задача
// Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его вершины - 100м. 
// Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз. 
// На какие сутки черепашка залезет на столб? 
// Требуется написать код на JS для решения задачи и дать ответ.


const getArrivedDay = (distance, up, down) => {

    if(distance <= 0 || up <= down || down < 0 || up <= 0) return 0

    let days = 0

    while((up-down)*days < distance - down){
        days+=1
    }
    
    return days
}

getArrivedDay(100,50,30)

// Ответ: на 4 сутки черепашка залезет на холм 
// P.s. в вопросе спрашивается про столб, но на столб она не лезет :)
