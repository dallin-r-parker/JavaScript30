const pressed = [];
const secretCode = 'dallin';

window.addEventListener('keyup', e => {
    pressed.push(e.key);
    console.log(pressed);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)) {
        console.log('youve done it!!!!: ');
        cornify_add();
    }
});