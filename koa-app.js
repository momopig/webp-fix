const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const Router = require('koa-router');
const router = new Router();
app.use(static(__dirname + '/dist'))
router.get(/.*png$/g, (ctx, next) => {
  ctx.redirect('/assets/logo.webp')
})
router.get('/logo.png', (ctx, next) => {
  ctx.redirect('/assets/logo.webp')
})
router.get('/assets', async (ctx, next) => {
  ctx.status = 404;
  ctx.body = "Sorry, this page is not present";
})
router.get('/assets/logo.webp', (ctx, next) => {
  ctx.status = 404;
  ctx.body = "Sorry, this page is not present";
})
router.get('/assets/logo', (ctx, next) => {
  ctx.redirect('/assets/logo.webp')
})
app.use(router.routes())
app.use(router.allowedMethods());
app.listen(4005);
