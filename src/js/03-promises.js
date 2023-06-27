import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleClick);

function handleClick(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  let lag;
  for (let i = 0; i < amount.value; i += 1) {
    lag = parseInt(delay.value) + parseInt(step.value * i);
    createPromise(i, lag)
      .then(message => {
        Notiflix.Notify.success(message);
      })
      .catch(message => {
        Notiflix.Notify.failure(message);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position + 1} in ${delay}ms`);
      }
    }, delay);
  });
}
