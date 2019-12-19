const inquirer = require("inquirer");
const fs =require("fs");
const manager = require("manager");
const engineer = require("intern");
const intern = require("intern");

class team {
  constructor() {
    this.name = null;
    this.jobTitle = null;
  }

  promptUser() {
    return inquirer.prompt([
      {
        message: 'What is your user name?',
        name: 'Name'
      },
      {
          message: 'What is your title?',
          name: 'job title'
      }
      
    ]).then(({ name }) => {
      this.Name = Name;
      this.idNumber();
    })
  }

  
        this.createHtml();
      })
  }

  createHtml() {
    this.html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Javascript Fetch Api Example</title>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css"/>
        <style>
        
      </head>
      <body>
         <div class="container">
            <div style="background-color:rosybrown;color:black;" class="jumbotron">
                <div>
                    <img src="${this.avatar_url}" />
                    <h2 class="login">${this.githubUserName}</h2>
                </div>
              <div >
                <h2 class="bio">${this.bio}</h2>
              </div>
              <div class="row">
              <div class="repositories">
                <h2>Public repositories:${this.public_repos}</h2>
              </div>
              <div class="followers">
                <h2>Followers:${this.followers}</h2>
              </div>
            </div>
            <div class="row">
            <div>
            <h4>location:${this.location}</h4>
            <a href="${this.html_url}">Github Page</a>
            </div>
              <div class="stars">
                  <h2>Github Stars:</h2>
                </div>  
              <div class="following">
                <h2>Following:${this.following}</h2>
              </div>
            </div>
         </div>
    
       </body>
      <!-- jQuery library -->
      <script
      src="https://code.jquery.com/jquery-3.4.1.js"
      integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
      crossorigin="anonymous"></script>
      <script src="index.js"></script>
    </html> 
    `;
  }
    createHtml(){
        html.create(this.html).toFile('./main.html', function (err, res) {
            if (err) return console.log(err);
            console.log(res);
        });
    }
  }



var newHomework = new DoMyHomework();
newHomework.promptUser();
