/*
 * Title: Request Response Handler file.
 * Description: Request Response Handler file for project
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/Mohammad-Mesbaul-Haque/Uptime-Monitoring-RawNode-Api.git
 * Date: 17/09/2021
 */
 
// Dependencies.
const url = require('url'); 
const {StringDecoder } = require('string_decoder');
 
// App object or Module scaffolding.
 const handler = {};
// main functions or objects.
 handler.handleReqRes = (req, res)=>{
    // handle request
    //get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    
    // receiving payload from client side

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer)=>{
        realData += decoder.write(buffer);
    });

    req.on('end', ()=>{
        realData += decoder.end();

        // Response handle
        res.end('Hello World')
        // log the payload
        console.log(realData);
    })
}
 
 
 
// export the module.
module.exports = handler;
 