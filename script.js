console.log("test");
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your location?",
      name: "location",
    },
    {
      type: "input",
      message: "What is your LinkedIn?",
      name: "linkedIn",
    },
  ])
  .then((response) => {
    console.log(response);

    let username = response.username;
    // $("#name").text(username);
    let location = response.location;
    let linkedInUser = response.linkedIn;

    // let user = `<link rel="stylesheet" href="style.css"/><div class="title">My username is ${username}<div><br>
    // <div class="title">${location}<div><br>
    // <div class="title">${linkedInUser}<div>`;

    let docBody = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    <div id="container">
      <div  class="title" >My name is: ${username}</div>
      <div class="title" >My name is location: ${location}</div>
      <div class="title">My LinkedIn is: ${linkedInUser}</div>
    </div>
  </body>
  <!-- <script src="./script.js"></script> -->
  <!-- JQUERY js-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
</html>`;

    fs.writeFile("index2.html", docBody, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
