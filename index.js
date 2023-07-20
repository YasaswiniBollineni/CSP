const app = require('./Requires');

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Listening on port http://localhost:${port}`);
});
