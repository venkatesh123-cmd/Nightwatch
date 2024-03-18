module.exports={
    "Launch Google Page":function(browser){
        browser.url("https:www.google.com/");
        browser.assert.titleEquals("Google");
        console.log("Google Page is launched successfully......");
        browser.pause(2000);
        browser.end();
    }
};