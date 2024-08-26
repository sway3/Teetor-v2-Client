const nameRegex = /^[a-zA-Z]+$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;

export const isForm1Valid = (formData: any) => {
  const firstName = nameRegex.test(formData.firstName);
  const lastName = nameRegex.test(formData.lastName);
  const email = emailRegex.test(formData.email);
  const birthday = birthdayRegex.test(formData.birthday);

  return firstName && lastName && email && birthday;
};

export const isForm2Valid = (formData: any) => {
  let isValid: boolean;
  const isSelected = formData.role.length > 0;

  if (formData.role.includes('Mentor')) {
    const profession = formData.profession.length > 0;
    const canHelpWith = formData.canHelpWith.length > 0;
    const description = formData.description;

    isValid = isSelected && profession && canHelpWith && description;
  } else {
    isValid = isSelected;
  }

  return isValid;
};

export const isForm3Valid = (formData: any) => {
  const isValid = formData.availableDays.length > 0;

  return isValid;
};
