const request = require("request");
const cheerio = require("cheerio");

request('http://libogit.azurewebsites.net',(error,response,html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        /* const content = $('td');

        console.log(content.html()); */

        $('tbody tr').each((i, el)=>{
            if(i==2||i==1){
                const item = $(el).text();
                console.log(item);
            }
            
        });
    }
});