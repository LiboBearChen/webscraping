const request = require("request");
const cheerio = require("cheerio");

request('http://libogit.azurewebsites.net',(error,response,html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        
    }
});