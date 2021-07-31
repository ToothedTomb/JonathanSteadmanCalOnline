let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'Reset':
                display.innerText = '';
                break;
            case 'Equal':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Sorry but there is an ERROR."
                }
                break;
            case 'Clear one number':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
