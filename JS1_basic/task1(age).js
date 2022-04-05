function age(num){
    if(num >= 0 && num < 3){
        console.log('младенец')
    }else if(num > 2 && num <= 13){
        console.log('ребёнок')
    }else if(num > 13 && num <= 19){
        console.log('подросток')
    }else if(num > 19 && num <= 65){
        console.log('взрослый')
    }else if(num > 65){
        console.log('пожилой')
    }
}
age(100)