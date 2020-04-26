function calc(){
    str = display.textContent
    localNum = NaN
    actionGlobal = ''
    if(str.split('+')[1])
    {
        localNum = str.split('+')[1]
        display.textContent = String(res)
    }
    else if(str.split('-')[1])
    {
        localNum = str.split('-')[1]
        display.textContent = String(res)
    } 
    else if(str.split('×')[1])
    {
        localNum = str.split('×')[1]
        display.textContent = String(res)
    }
    else if(str.split('÷')[1])
    {
        localNum = str.split('÷')[1]
        display.textContent = String(res)
    }
}

window.onload = function(){
    initialNum = Nan
    actionGlobal = ''

    let calculator = document.querySelector('.calculator')
    let keys = calculator.querySelector('.calculator__keys')

    let  display = document.querySelector('.calculator__display')
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            let  key = e.target
            let  action = key.dataset.action
            let  keyContent = key.textContent
            let  displayedNum = display.textContent
            // ...
            if (! action) {
                if (displayedNum  == '0' || canAddNumbers) {
                    display.textContent = keyContent
                } 
                else {
                    display.textContent = displayedNum + keyContent
                }
            }
            else if (action  == 'add' || action  == 'subtract' || action  == 'multiply' || action  == 'divide') {   
                if(actionGlobal){
                    calc()
                }
                initialNum = Number(display.textContent)
                actionGlobal = keyContent
                display.textContent += keyContent
            }
            else if (action  == 'decimal') {
                display.textContent += '.'
            }
            else if (action  == 'clear') {
                display.textContent = '0'
            }
            else if (action  == 'calculate') {
                canAddNumbers = true
                calc()
            }
        }
    })

}