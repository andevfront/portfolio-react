export const calculateAge = (date) => {
  const birthdate = new Date(date);
  const ageMilliseconds = Date.now() - birthdate.getTime();
  const age = new Date(ageMilliseconds);
  return Math.abs(age.getUTCFullYear() - 1970);
};
