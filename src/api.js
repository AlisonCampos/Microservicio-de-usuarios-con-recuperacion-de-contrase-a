const API_URL = "http://localhost:3001/api/auth";

export async function registerUser(data) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getSecurityQuestion(username) {
  const response = await fetch(`${API_URL}/get-security-question`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });
  return response.json();
}

export async function forgotPassword(data) {
  const response = await fetch(`${API_URL}/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
}