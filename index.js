require('dotenv').config()
const Koa = require('koa');
const router = require("@koa/router")();
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const jwtVerifier = require('./jwtVerifier')

const fountainRequestRepo = require('./data/fountainRequest.repo')
const gardenDataRepo = require('./data/gardenData.repo')

const dataval = require('./dataValidation/dataval')

app.use(bodyParser());

router.use(['/gardenData', '/fountainRequest'], jwtVerifier);

router.get('/echo', (ctx, next) => {
    ctx.body = ctx.request.query.message;
})

router.post('/gardenData',
    dataval.gardenData,
    gardenDataRepo.save,
    (ctx, next) => {
        ctx.status = 200;
        next();
    });

router.get('/fountainRequest',
    fountainRequestRepo.get,
    (ctx, next) => {
        ctx.status = 200;
        next();
    });

router.post('/fountainRequest',
    dataval.fountainRequest,
    fountainRequestRepo.save,
    (ctx, next) => {
        ctx.status = 200;
        next();
    });


app.use(router.routes());
app.listen(3000);