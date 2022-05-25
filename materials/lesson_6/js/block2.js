// GET, POST, PATCH, DELETE

// Content-Type

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// get

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (response.status !== 200) {
      console.log("Looks like there was a problem");
      console.log(`Status Code: ${response.status}`);
      return;
    }
    return response.json();
  })
  .then((result) => {
    console.log("Users", result);
  });

// POST
const newPost = {
  title: "Some title",
  body: "Some long body text",
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(newPost),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      console.log("Looks like there was a problem");
      console.log(`Status Code: ${response.status}`);
      return;
    }
    return response.json();
  })
  .then((result) => {
    console.log("Users", result);
  });

// PATCH
const editedPost = {
  title: "Edited title",
};
fetch("https://jsonplaceholder.typicode.com/posts/4", {
  method: "PATCH",
  body: JSON.stringify(editedPost),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      console.log("Looks like there was a problem");
      console.log(`Status Code: ${response.status}`);
      return;
    }
    return response.json();
  })
  .then((result) => {
    console.log("Users", result);
  });

// DELETE
fetch("https://jsonplaceholder.typicode.com/posts/4", {
  method: "DELETE",
})
  .then((response) => {
    if (!response.ok) {
      console.log("Looks like there was a problem");
      console.log(`Status Code: ${response.status}`);
      return;
    }
    return response.json();
  })
  .then((result) => {
    console.log("Users", result);
  });
