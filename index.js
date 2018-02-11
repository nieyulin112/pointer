一.监控需要处理的问题:
  1.前端SDK需要实现，主要是错误拦截，代理监控，上报策略，API设计，以及日志接口。
  2.上报的日志实现实时查询。
  3.监控日志可视化管理后台的开发。
  4.压缩后的单行文件如何定位源码错误。
二.前端监控的从无到有的落地
1.https://juejin.im/post/5a3dca226fb9a04515441686
2.https://juejin.im/entry/58dcb0a2a22b9d005855ab07

三.前端监控的组件:
1.定时监控站点渲染情况，记录异常并保存截图: puppeteer, thinkjs,mongodb,headless-chrome,vuejs
项目地址: https://github.com/zhentaoo/hawk-eye

2.sentry(比较靠谱) https://docs.sentry.io/ https://github.com/getsentry/raven-js
  https://www.v2ex.com/t/230085
  Sentry包基本上只是一个简单的服务器和Web UI。
  它将处理认证的SDK（如Raven)

3.alloylever https://github.com/AlloyTeam/AlloyLever(腾讯团队的维护)

4.BetterJS https://github.com/BetterJS/doc (腾讯团队的维护, 这个也比较靠谱)

5.fundebug https://www.fundebug.com/product(收费的产品)

6.bugsnag  https://docs.bugsnag.com/(有人说不是很靠谱)
