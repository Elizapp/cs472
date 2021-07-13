const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
     if(req.cookies.test){
        res.send(`Key is: ${req.cookies.test}
        <br/><a href="/clear">Clear kookie </a>`);
     }else{
        res.send(`<form action="add-cookie" method="post">
        	        <labe>Key: </labe>
      		        <input type="text" name="cKey" value="test"/>
      		        <labe>Value: </labe>
      		        <input type="text" name="cValue" value="1"/>
				     <input type="submit" />
			        </form>`);
    }
});
app.post('/add-cookie', (req, res) => {
    if (req.body.cValue) {
        let key = req.body.cKey;
        let value = req.body.cValue;
        res.cookie(`${key}`, value)
    }
    res.redirect('back');
});
app.get('/clear', function(req, res){
    res.clearCookie('test');
    res.redirect('back');
});
app.listen(3000);

