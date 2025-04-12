const BACKEND_URL = "http://127.0.0.1:5000";

const hacerLogin = async () => {
  const body = {
    correo: "ederiveroman@gmail.com",
    password: "Welcome123!",
  };

  const response = await fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};

hacerLogin();
