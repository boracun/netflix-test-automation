- Source code for the test cases can be found in the Selenium directory and in the tests.js file.
- Netflix page files can be found in the netflix-login-page directory. index.html contains the html source code of the netflix login page, welcome.html is the html file used when user successfully logins, style.css contains the source code of the styling of the elements, and login.js contains the logic and behavior of the html elements such as error showing etc. Images directory contains the images used in the login page.

In our project we have used node.js and javascript inorder to run Selenium so one needs to install node.js. Also, since we are using Selenium to automate test cases, one needs to intall Selenium chrome webdriver and write chromedriver.exe file's path to the envrionment variables so that your computer can access chromedriver.exe when running the code. Also, in our project we use the Facebook API to make Facebook login possible. So, in order to use the Facebook API, Xampp needs to installed. Through Xampp, an apache server is working on the http://localhost at port 80 (port 80 is default so that is not needed to be spesified). The project folder is copied into the Xampp/htdocs folder. By accessing localhost in your desired browser netflix login page clone is up and running.
![image](https://user-images.githubusercontent.com/69125059/156240021-3c8b34c8-d950-4e62-bfcf-016510798b44.png)
![image](https://user-images.githubusercontent.com/69125059/156240068-852921da-932b-463b-ad09-8e143d34f303.png)

To run tests, one needs to run the tests.js which is located in the Selenium directory. After running the file nothing needs to be done as the tests execute themselves since they are automated.

