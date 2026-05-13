import { useState } from "react";
import validateEmail from "../utils/ValidationUtils";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
type LoginFormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};
type LoginFormErrors = {
  email: string;
  password: string;
};
const REQUIRED = "Required";
export default function useLogin() {
  const [values, setValues] = useState<LoginFormValues>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<LoginFormErrors>({
    email: "",
    password: "",
  });
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      email: event.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      email: "",
    }));
    setSubmitError("");
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      password: event.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      password: "",
    }));
    setSubmitError("");
  }

  function handleRememberMeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      rememberMe: event.target.checked,
    }));
    setSubmitError("");
  }

  function validateForm() {
    const nextErrors: LoginFormErrors = {
      email: "",
      password: "",
    };
    const trimmedEmail = values.email.trim();
    if (!trimmedEmail) {
      nextErrors.email = REQUIRED;
    } else {
      const emailError = validateEmail(trimmedEmail);
      if (emailError) {
        nextErrors.email = emailError;
      }
    }
    if (!values.password) {
      nextErrors.password = REQUIRED;
    }
    setErrors(nextErrors);
    return !nextErrors.email && !nextErrors.password;
  }
  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    try {
      setIsSubmitting(true);
      setSubmitError("");
      const loginPayload = {
        email: values.email.trim(),
        password: values.password,
        rememberMe: values.rememberMe,
      };
      await authService.login(loginPayload);
      navigate("/dashboard");
      setValues({
        email: "",
        password: "",
        rememberMe: false,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }
  return {
    values,
    errors,
    submitError,
    isSubmitting,
    handleEmailChange,
    handlePasswordChange,
    handleRememberMeChange,
    handleSubmit,
  };
}
