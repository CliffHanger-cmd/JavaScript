// const btn = document.getElementById('btn')
// btn.addEventListener('click', () => {
//     btn.classList.add(pulse);
//     btn.addEventListener('animationend',  () => {
//         btn.classList.remove('pulse');
//     }, {once: true});
// })


const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      btn.classList.add('pulse');
      // remove the class after animation ends to allow re-trigger
      btn.addEventListener('animationend', () => {
        btn.classList.remove('pulse');
      }, { once: true });
    });