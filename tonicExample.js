var ToImage = require("wkhtmltoimage-linux")
var URL = require("url");

exports.tonicEndpoint = function(request, response)
{
    var query = URL.parse(request.url, true).query;
    var url = query.url;

    response.writeHead(200, {'Content-Type': 'image/png'});
    ToImage.generate(url, { format: "png" }).pipe(response);
};

var endpointURL = `https://tonicdev.io/${process.env.TONIC_ENDPOINT_PATH}`;
// Visit the endpoint URL in your browser, or just submit the form below

`<form target="img" action="${endpointURL}">
    <input placeholder="enter a URL" name="url" />
    <button type="submit">submit</button>
    <span>( ${endpointURL} )</span>
</form>
<iframe style="width:100%; height: 400px" name="img"></iframe>`
