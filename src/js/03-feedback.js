// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js.
// Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне
// сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і
// якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми,
// а також виводь у консоль об'єкт з полями email, message
// та їхніми поточними значеннями.

// Зроби так, щоб сховище оновлювалось не частіше,
// ніж раз на 500 мілісекунд.Для цього додай до проекту
// і використовуй бібліотеку lodash.throttle.
import localStorageService from './localstorage';
import throttle from 'lodash.throttle';

const formEL = document.querySelector('.feedback-form');
const userFeedback = {};

const fillFeadbackFormFields = () => {
  const userFeedbackFromLS = localStorageService.load('feedback-form-state');
  if (userFeedbackFromLS === undefined) {
    return;
  }
  for (const prop in userFeedbackFromLS) {
    formEL.elements[prop].value = userFeedbackFromLS[prop];
  }
};
fillFeadbackFormFields();

const onFormFieldInput = event => {
  const { target } = event;

  const fieldValue = target.value;
  const fieldName = target.name;

  userFeedback[fieldName] = fieldValue;
  localStorageService.save('feedback-form-state', userFeedback);
};

const onFormSubmit = event => {
  event.preventDefault();

  console.log(userFeedback);

  formEL.reset();
  localStorageService.remove('feedback-form-state');
};

formEL.addEventListener('input', throttle(onFormFieldInput, 500));
formEL.addEventListener('submit', onFormSubmit);
