var express = require("express");
var nodemailer = require("nodemailer");

//use the application off of express.
var app = express();

//define the route for "/"
app.get("/", function(request, response) {
    response.sendFile(__dirname + "/views/index.html");
});

//http request for js libraries. 
app.get("/js/jquery.js", function(request, response) {
    response.sendFile(__dirname + "/views/js/jquery.js");
});
app.get("/js/bootstrap.min.js", function(request, response) {
    response.sendFile(__dirname + "/views/js/bootstrap.min.js");
});

//http request for css
app.get("/css/stylish-portfolio.css", function(request, response) {
    response.sendFile(__dirname + "/views/css/stylish-portfolio.css");
});

//http request for large logo
app.get("/img/Logo---Large.png", function(request, response) {
    response.sendFile(__dirname + "/views/img/Logo---Large.png");
});
app.get("/img/Logo---small.png", function(request, response) {
    response.sendFile(__dirname + "/views/img/Logo---small.png");
});

//http request for initials
app.get("/img/Initials2.png", function(request, response) {
    response.sendFile(__dirname + "/views/img/Initials2.png");
});

//http request for portfolio images
app.get("/img/portfolio-1.jpg", function(request, response) {
    response.sendFile(__dirname + "/views/img/portfolio-1.jpg");
});
app.get("/img/portfolio-2.jpg", function(request, response) {
    response.sendFile(__dirname + "/views/img/portfolio-2.jpg");
});
app.get("/img/portfolio-3.jpg", function(request, response) {
    response.sendFile(__dirname + "/views/img/portfolio-3.jpg");
});
app.get("/img/portfolio-4.jpg", function(request, response) {
    response.sendFile(__dirname + "/views/img/portfolio-4.jpg");
});
app.get("/img/callout.jpg", function(request, response) {
    response.sendFile(__dirname + "/views/img/callout.jpg");
});
//http request for bg image
app.get("/img/OpenOcean.jpg", function(request, response) {
    response.sendFile(__dirname + "/views/img/OpenOcean.jpg");
});

app.get("/getemail", function(request, response) {
    var firstname = request.query.firstname;
    var email = request.query.email;
    var message = request.query.message;
    //Send logic goes here. 
    var mailer = require("nodemailer");
    // Use Smtp Protocol to send Email
    var smtpTransport = mailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "robert.luisi@consilitechsolutions.com",
            pass: "bingo321"
        }
    });

    var list = email + ",robert.luisi@consilitechsolutions.com";
    var mail = {
        from: "ConsilliTech Solutions Team <robert.luisi@consilitechsolutions.com>",
        to: list,
        //Add client name to subject - this will be build 2.2.4.0 - adding spinner and submit toast will be 2.2.4.2
        subject: "ConsiliTech Team Response to " + firstname,
        //text: 'fuck you worked',
        html: '<body><p>Hello, ' + firstname + ' and thank you for contacting the Solution Architect team, here at ConsiliTech!<p>We recieved the following message: ' + message + '</p></p><img src="http://www.consilitechsolutions.com/img/logo---small.png" /><p>Email: robert.luisi@consilitechsolutions.com</p><p>Phone: (516) 355-8195</p><p>www.consilitechsolutions.com</p><p><a href="https://www.facebook.com/ConsiliTech-Solutions-1793486150908363/?skip_nax_wizard=true">Facebook |</a><a href="https://twitter.com/ConsiliTech"> Twitter |</a><a href="https://www.instagram.com/consilitech/?hl=en"> Instagram |</a><a href="https://www.linkedin.com/company/consilitech-solutionsreport%2Esuccess=KJ_KkFGTDCfMt-A7wV3Fn9Yvgwr02Kd6AZHGx4bQCDiP6-2rfP2oxyVoEQiPrcAQ7Bf"> LinkedIn </a></p></body>',

        attachments: [{ // use URL as an attachment
            filename: 'logo---small.png',
            path: 'http://www.consilitechsolutions.com/img',
            cid: 'unique@kreata.ee'
        }]
    }



    smtpTransport.sendMail(mail, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close();
    });
    console.log("About to send message... ");
    
    //Fixes bug in b2.5.2.0 where the URL shows all email information. this will stay as "consilitechsolutions.com"
    app.get("/", function(request, response) {
    response.sendFile(__dirname + "/views/index.html");
});

    console.log("SENT!!! WOO ");
});

//start the server
app.listen(80);

console.log("Opened Consilitechsolutions.com at http://localhost:80");
