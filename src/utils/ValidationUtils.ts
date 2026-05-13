const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return "Required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.trim())) {
    return "Enter a valid email address";
  }

  return "";
};
export default validateEmail;
