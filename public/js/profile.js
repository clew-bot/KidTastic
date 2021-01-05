const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#kidName").value.trim();
    const birthDate = document.querySelector("#kidBirth").value.trim();
    const userId = document.querySelector("#userId").value.trim();
  
    if (name && birthDate && userId) {
      const response = await fetch(`/api/children`, {
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
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector(".new-project-form")
    .addEventListener("submit", newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  