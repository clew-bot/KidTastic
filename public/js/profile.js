const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#kidName").value.trim();
  const birthDate = document.querySelector("#kidBirth").value.trim();
  const email = document.querySelector("#kidUsername").value.trim();
  const password = document.getElementById("password-login").value.trim();

  if (name && birthDate && email && password) {
    const response = await fetch("/api/children", {
      method: "POST",
      body: JSON.stringify({ name, birthDate, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create profile.. 😭...Check all fields twice.");
    }
  }
};

document
  .querySelector(".form-style-3")
  .addEventListener("submit", newFormHandler);

 