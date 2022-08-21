let validation = new JustValidate('#contacts-form');

validation.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Введите имя'
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Должно быть минимум 3 символа'
  }
])
.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Введите email'
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }
])
