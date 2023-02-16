const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#user-name').value.trim();
    const post = document.querySelector('#post-desc').value.trim();
  
    if (name && post) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, post }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to post!');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('#save-post')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('#delete-post')
    .addEventListener('click', delButtonHandler);
  