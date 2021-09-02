

export const getUserCard = (userCards,cards)=>{
    const copyCards = [...cards]
    const copyUserCards = [...userCards]
    const id = Math.round(Math.random()*52)
    console.log(cards,'cards')
    console.log(id,'id')
    const idx = cards.findIndex(item=>item.id === id)
    if(idx > -1){
        const removing = copyCards.splice(idx,1)
        copyUserCards.push(removing[0])
    }else{
        getUserCard(userCards,cards)
    }

    return {
        cards:copyCards,
        userCards:copyUserCards
    }
}


export const getBotCard = (botCards,cards,ready,sum)=>{
    const copyCards = [...cards]
    const copyBotCards = [...botCards]
    const randomCard = ()=>{
        const id = Math.round(Math.random()*52)
        const idx = cards.findIndex(item=>item.id === id)
        if(idx > -1){
            const removing = copyCards.splice(idx,1)
            copyBotCards.push(removing[0])
        }else{
            randomCard()
        }
    }
    if(!!copyBotCards.length){
        console.log(sum,"sum")
        let mysum = sum
        for(let {value} of copyBotCards){
            mysum+=value
        }
        if(mysum <= 14){
            randomCard()
        }
        if(mysum > 14 && mysum < 19){
            const decisive = Math.round(Math.random())
            console.log(decisive,'resh')
            if(!!decisive){
                randomCard()
            }
        }
        console.log('ready',ready)
        if(ready && mysum < 15){
            getBotCard(botCards,cards,ready,mysum)
        }
        return {
            cards:copyCards,
            botCards:copyBotCards
        }
    }


    if(!copyBotCards.length){
        const id = Math.round(Math.random()*52)
        const idx = cards.findIndex(item=>item.id === id)
        if(idx > -1){
            const removing = copyCards.splice(idx,1)
            copyBotCards.push(removing[0])
        }else{
            getBotCard(botCards,cards)
        }

        return {
            cards:copyCards,
            botCards:copyBotCards
        }
    }


}


export const usersSumResult = (userCards,botCards)=>{
    // const {userCards,botCards} = cards
    const resultSum = (obj)=>{
        let sum = 0
        for(let {value} of obj){
            sum+=value
        }
        return sum
    }
    const userSum = resultSum(userCards)
    const botSum = resultSum(botCards)
    if((userSum <= 21 && userSum > botSum) || (userSum <= 21 && botSum > 21)){
        return "you won"
    }else if((userSum > 21 && botSum <= 21) || (userSum < botSum && botSum <= 21)){
        return "you lose"
    }else if((userSum > 21 && botSum > 21) || (userSum === botSum)){
        return "drew"
    }
}

