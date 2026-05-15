export type LoginRequest = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export type LoginResponse = {
  message?: string;
};
export type LogoutResponse = {
  message?:string;
}
const AUTH_BASE_URL = import.meta.env.VITE_API_BASE_URL + "/auth";
async function login(request: LoginRequest): Promise<LoginResponse | void> {
  const response = await fetch(`${AUTH_BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  if (!response.ok) {
    let errorMessage = "Invalid email or password";

    try {
      const errorBody = await response.json();

      errorMessage =
        errorBody.message ||
        errorBody.error ||
        errorBody.detail ||
        errorMessage;
    } catch {
      // If backend sends empty/non-JSON error body, keep default message
    }

    throw new Error(errorMessage);
  }
  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    return response.json();
  }

  return;
}
async function logout(): Promise<LogoutResponse|void> {
  const response = await fetch(`${AUTH_BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok) {
    let errorMessage = "Unable to log out. Please try again later";

    try {
      const errorBody = await response.json();

      errorMessage =
        errorBody.message ||
        errorBody.error ||
        errorBody.detail ||
        errorMessage;
    } catch {
      // If backend sends empty/non-JSON error body, keep default message
    }

    throw new Error(errorMessage);
  }
  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    return response.json();
  }

  return;
}
const authService = {
  login, logout
};
export default authService;
