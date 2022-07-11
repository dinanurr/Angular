let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/wisata-jateng'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/wisata-jateng/index.html');
});


app.listen(process.env.PORT || 8080);