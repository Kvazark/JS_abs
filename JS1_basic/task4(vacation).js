function vacation(num,group,day){
    if ( day == 'Friday'){
        if (group == 'Students'){
            if(num >=30){
                let price = 0.85*num*8.45
                console.log(`Total price: ${price.toFixed(2)}`)

            }
            else{
                let price = num*8.45
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }else if (group == 'Corporate'){
            if(num >=100){
                let price = (num-10)*10.90
                console.log(`Total price: ${price.toFixed(2)}`)

            }
            else{
                let price = num*10.90
                console.log(`Total price: ${price.toFixed(2)}`)
            }

        }else if(group=='Regular'){
            if(num >=10 && num <=20){
                let price = 0.95*num*15
                console.log(`Total price: ${price.toFixed(2)}`)

            }
            else{
                let price = num*15
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }
    }else if(day == 'Saturday'){
        if (group == 'Students'){
            if(num >=30){
                let price = 0.85*num*9.80
                console.log(`Total price: ${price.toFixed(2)}`)

            }
            else{
                let price = num*9.80
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }else if (group == 'Corporate'){
            if(num >=100){
                let price = (num-10)*15.60
                console.log(`Total price: ${price.toFixed(2)}`)

            }
            else{
                let price = num*15.60
                console.log(`Total price: ${price.toFixed(2)}`)
            }

        }else if(group=='Regular'){
            if(num >=10 && num <=20){
                let price = 0.95*num*20
                console.log(`Total price: ${price.toFixed(2)}`)

            }
            else{
                let price = num*20
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }

    }else if(day == 'Sunday'){
        if (group == 'Students'){
            if(num >=30){
                let price = 0.85*num*10.46
                console.log(`Total price: ${price.toFixed(2)}`)

            }
            else{
                let price = num*10.46
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }else if (group == 'Corporate'){
            if(num >=100){
                let price = (num-10)*16
                console.log(`Total price: ${price.toFixed(2)}`)

            }
            else{
                let price = num*16
                console.log(`Total price: ${price.toFixed(2)}`)
            }

        }else if(group=='Regular'){
            if(num >=10 && num <=20){
                let price = 0.95*num*22.50
                console.log(`Total price: ${price.toFixed(2)}`)

            }
            else{
                let price = num*22.50
                console.log(`Total price: ${price.toFixed(2)}`)
            }
        }

    }
}
vacation(40,"Regular","Saturday")