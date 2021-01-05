const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#kidName").value.trim();
  const birthDate = document.querySelector("#kidBirth").value.trim();
  const userId = document.querySelector("#userId").value.trim();

  if (name && birthDate && userId) {
    const response = await fetch("/api/children", {
      method: "POST",
      body: JSON.stringify({ name, birthDate, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create project");
    }
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);