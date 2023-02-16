const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post = document.querySelector('#post-description').value.trim();
  
    if (post) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ post }),
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
        document.location.replace('/post');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.post-form')
    .addEventListener('submit', newFormHandler);
  document
    .querySelector('#delete-post')
    .addEventListener('click', delButtonHandler);
  