//#1
window.onload = () => {
    let input = document.querySelectorAll('input');
    let textarea = document.querySelector('textarea');

    setInterval(() => {
        let some = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i].value != '')
                some.push(input[i].value)
        }
        textarea.value = some.join(', ');
    }, 10000)
}

//#2 
    // window.onload = () => {
    //     let allElems = document.querySelectorAll('*');
    //     function removeValues(arr){
    //         arr.forEach(elem => {
    //             if(elem.localName != 'html' && elem.localName != 'head' && elem.localName != 'body'){
    //                 elem.style.cssText = `background-color: inherit;
    //                                       color: inherit;
    //                                       width: inherit;
    //                                       height: inherit;`
    //             }
    //         })
    //     }
    //     removeValues(allElems);
    // }