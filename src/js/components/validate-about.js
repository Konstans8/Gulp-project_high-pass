let validationAbout = new JustValidate('#about-form');

validationAbout.addField('#about-email', [
    {
    rule: 'required',
    errorMessage: 'Введите email'
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  }
])
