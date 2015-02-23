/**
 * Created by Anis on 23/02/2015.
 */

var express = require('express');

var app = express();

app.use(express.static(__dirname + "/"));

app.listen(9001);
