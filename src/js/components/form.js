import { validateForms } from "../vendor/validate-forms";
const rules1 = [
  {
    ruleSelector: "#vacancy",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните поле!",
      },
    ],
  },
  {
    ruleSelector: "#name",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Введите фамилию, имя и отчество",
      },
    ],
  },
  {
    ruleSelector: "#phone",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: "#mail",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Введите e-mail",
      },
    ],
  },
  {
    ruleSelector: "#education",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните поле!",
      },
    ],
  },
  {
    ruleSelector: "#adres",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните поле!",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка");
};

validateForms(".response__form", rules1, afterForm);
