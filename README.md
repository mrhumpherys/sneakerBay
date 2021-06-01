# SneakerBay
![Git Hub Language Count](https://img.shields.io/static/v1?label=Languages&message=3&color=yellow&style=flat-square) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
![Screenshot](./public/assets/images/sportsbuzz.png)
# Description 
SneakerBay is a single page application using React, Node.js, Express.js, and Mongoose, where users can buy and sell the latest sneakers. The user story is as follows:  
```  
As a User:
When I visit the website I am prompted to signup or login.
After I login I am presented with my dashboard which includes the shoes I have sold and bought, as well as information about my user history.  
When I click the Home link I am presented with the latest shoes for sale.
When I click on a shoe I would like to purchase I am taken to a Single shoe page where more information is avaliable. 
When I click on Buy shoe I am asked to confirm my purchase, when I confirm I am prompted to contact the seller via email.  
When I click Sell a shoe I am prompted to input information about the shoe. After I upload the shoe I am taken to my dashboard where the shoe I added is listed under my shoes for sale.  
When another user purchases my shoe, my shoe for sale list is immediatly updated to sold and I am notified with a banner on my shoe list.
```  
# Table of Contents  

1. [Features](https://github.com/mrhumpherys/sneakerBay#features)  
2. [Screenshot](https://github.com/mrhumpherys/sneakerBay#screenshot)
3. [Demo](https://github.com/mrhumpherys/sneakerBay#demo)
4. [Technology Stack](https://github.com/mrhumpherys/sneakerBay#technology-stack)
5. [Usage](https://github.com/mrhumpherys/sneakerBay#usage)
6. [Collaborators](https://github.com/mrhumpherys/sneakerBay#collaborators)
7. [License](https://github.com/mrhumpherys/sneakerBay#license)

# Features  

This application uses Json web tokens for authentification.  
 [Bcrypt](https://www.npmjs.com/package/bcrypt), [Bootstrap](https://www.npmjs.com/package/bootstrap), [Connect-Session-Sequelize](https://www.npmjs.com/package/connect-session-sequelize), [Dotenv](https://www.npmjs.com/package/dotenv), [Express](https://www.npmjs.com/package/express), [Express-Async-Handler](https://www.npmjs.com/package/express-async-handler),[Express-Handlebars](https://www.npmjs.com/package/express-handlebars), [Express-Session](https://www.npmjs.com/package/express-session), [Moment.js](https://www.npmjs.com/package/moment), [Mysql2](https://www.npmjs.com/package/mysql2), [Node-Fetch](https://www.npmjs.com/package/node-fetch), [Sequelize](https://www.npmjs.com/package/sequelize), and [Slick-Carousel](https://www.npmjs.com/package/slick-carousel) for node package modules.
 [Sports Data Io](https://sportsdata.io/developers/api-documentation/nba), a third party api was used to build Sports-Buzz. 

# Screenshot  


![Sports Buzz Screenshot](./public/assets/images/buzz.gif)



# DEMO  

For the latest and greatest sneakers, check out [SneakerBay](https://sneakerbay.herokuapp.com/).


# Technology Stack
 

| Technology | Description                        |Links ↘️ |
| ---------- | -----------------------------------| ------|
|![GitHub top language](https://img.shields.io/github/languages/top/mrhumpherys/social-sports?color=yellow&label=JavaScript&message=54.9%&style=flat-square) | JavaScript |  [Node.js](https://nodejs.org/en/), [Express](https://www.npmjs.com/package/express), [Express-Session](https://www.npmjs.com/package/express-session), [Sequelize](https://www.npmjs.com/package/sequelize)                                               |
|![Handlebars](https://img.shields.io/static/v1?label=Handlebars&message=21.6%&color=blue&style=flat-square)| Handle Bars |         |
|![CSS](https://img.shields.io/static/v1?label=CSS&message=7.9%&color=blue&style=flat-square)| Cascading Style Sheets |[Bootstrap](https://www.npmjs.com/package/bootstrap), [Google Font](https://fonts.google.com/)                                   |


# Usage  

When you visit [SneakerBay](https://sneakerbay.herokuapp.com/) you are presented with the current sneakers for sale. Before getting access to purchase sneakers you must signup, with you email, username, and password. After you signup you are taken to the dashboard and presented with information abou your user history, your sneakers for sale, and the sneakers you haev bought. To sell a sneaker click the sell shoe link. You will be presented with a form to provide information about the shoe. After successfully completing the form you can add another shoe or return to your dashboard. Check out the homepage for the latest shoes to buy. When you click a shoe you will be taken to a single shoe page and see more information regarding the shoe. IF you choose to buy the shoe you wil be asked to confirm. After confirming you will be connected to the seller via email where you can purchase the shoe. When you return to your dashboard the shoe you puchased is listed under your purchases. 


# Collaborators  

| Username   | Link ↘️                |
|------------|-----------------------|
| lewisoutdoorllc | [Cody's GitHub](https://github.com/lewisoutdoorllc)|
| jmax407 | [Julius' GitHub](https://github.com/jmax407)|
| upye | [Urika's GitHub](https://github.com/UPye)|
| mrhumpherys | [Michael's GitHub](https://github.com/mrhumpherys)|




# License  

MIT License

Copyright (c) [2021] [Michael Humpherys, Julius Maxwell, Cody Lewis, Urika Pye]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.