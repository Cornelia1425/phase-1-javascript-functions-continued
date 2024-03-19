// code your solution here
function saturdayFun(activity = 'roller-skate'){
    let satActivity = activity
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    let monActivity = activity
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap='*'){
    return function(adj='special'){
        return`You are ${wrap}${adj}${wrap}!`
    }
}
const encouragingPromptFunction = wrapAdjective("!!!")
encouragingPromptFunction ()
wrapAdjective('!!')('cool')