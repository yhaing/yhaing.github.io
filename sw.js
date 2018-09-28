/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","7739ed8f06ac11e03c52b54c826509b3"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","d581edd7863bedb1de62fd45c576f6e1"],["/2015/01/20/如何整理个人资料/index.html","e912895583cfb038447d231b5c9939a4"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","c1bbed1c2847b63de1dc8f19b3516d35"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","4df5eed90a002ac6b83d1e1144f017e9"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","ea46dc85b8c2eb985a6c2c192e59a9cc"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","fb1fe7eaa2e0b464893b0324d431e4c5"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","c042a76ed736f116d4aa298b99343bad"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","59fbd6f2f1fc2afa904cb7c7778d02e5"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","c3baf8833d3b52ff633649e1407d0158"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","dfe1fd63f60b8dc0d2320dec8694dfc5"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","1cc08d0f5718a811b5646bd3e7756944"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","74b8a7ccd95353e658e75e1a12992198"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","a803d3909c326e4cbadd5431b5766faa"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","4bb60d6c624d6e1dbb1d20025d389cf2"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","30db8bc5affcf3b39291dea0b430d754"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","ee1e0674c85df4d7961a82621f9f3bdb"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","7462ce03d1a541e9acedf459f368dcb7"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","ff1c980ef7b7ab8fd356be093e0e439e"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","fb9b6fd093d405aebbd89583973f7209"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","52ed03c589a96eee2f7ee4799cc22e7d"],["/2016/11/27/Zabbix Web 邮件报警/index.html","c370720d76adf69b2707609f46c3483f"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","cbd47026b33dcc045e5988a7eff17168"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","5267291a9e3acd081ca6c1265e26f28c"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","b3b0d6c501a8800b749e3080bec102d2"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","e0860baafdb9eace3a25ef95eeab1f30"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","236abb8c009154cfa74ff7e6c7cea197"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","c965ea7d0364c0261b8ab7d12236d00c"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","00b8e0d39d68ef262d560f3d2cab3338"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","6ecdf4cc89471a997978a31b775234f7"],["/2017/03/23/Jenkins 自动化部署上线/index.html","815d82e9a555790d5689dd8f4c15dfa2"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","bbf3c80c10929cde433d421ac59365b8"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","8aea6debbb8e8ef4138fabd9b6eda6e0"],["/2018/04/10/Java-JVM/index.html","bc505a27508cd9e65357e1d761fceead"],["/2018/05/24/Python 3爬取百度经验数据/index.html","a846acbfa897956e654bcba9c2240016"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","aeebac59f1932ee266314b81bb79cdb6"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","7795e6ae1733032ddf1724729d95d4cf"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","b138b8b4a290c52988d00a31972519cf"],["/2018/09/20/Kubernetes集群之路（二）etcd集群部署/index.html","086a573fb6306b52523cc27fee9f7466"],["/404.html","9ae7d95d7ec6149fa60c9cdad18a5d91"],["/about/index.html","93bc68f728d515e2315ea638d63bc278"],["/archives/2015/01/index.html","26fdc3f6fa72e0ff36849bfa16501b91"],["/archives/2015/02/index.html","01ab40b5022a3ddf9e179debe0fa98b9"],["/archives/2015/index.html","f904a4d0e1992f09e8c9d49c04bf1b3a"],["/archives/2016/10/index.html","84ab2d8a7d64c097589a70b7d865e369"],["/archives/2016/11/index.html","b3d50130b8c602e1e96523d9d9618eff"],["/archives/2016/12/index.html","117613c61437af47e846ac8d0c2123ea"],["/archives/2016/index.html","24eb4e68935b32a38d60d6ffc3bac656"],["/archives/2016/page/2/index.html","832e9c0a5ca1a43dd14d864440231b2d"],["/archives/2017/03/index.html","eb239a4b7390505d037e48c7948aa2c1"],["/archives/2017/07/index.html","62bd1a0dd2fd251d41bebd606a49ead7"],["/archives/2017/index.html","3edc7e06844d92f748fe3a013dbfad63"],["/archives/2018/04/index.html","73bb7d0d0c9d111245942e9d4eb8d720"],["/archives/2018/05/index.html","c8a02fdf516ad45a370152aa93370f52"],["/archives/2018/06/index.html","748f31228c9325c8fef072476e2fd023"],["/archives/2018/09/index.html","12ef1bd61906a52fb33b008232befef6"],["/archives/2018/index.html","bad5f79b4c7b36c153aedc505465c130"],["/archives/index.html","0eb74305119b4901d686653f43274a45"],["/archives/page/2/index.html","81afc14a6e5bae4b43351e5f78788f0d"],["/archives/page/3/index.html","0e4d4e3702c0e0cb5440a0903f30b99b"],["/archives/page/4/index.html","c3506af23d2309f534df5f8930272a94"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ELK/index.html","88de6524c7b34e2e1cec46ae91f8ad3f"],["/categories/Hexo-Next/index.html","16e77a961127263a253a08294bfa3261"],["/categories/Hexo/index.html","177ea8769c89d59540ee6b343367c834"],["/categories/Jenkins/index.html","62c65bcf6c111ce767066a4320448889"],["/categories/Kubernetes/index.html","de9c004eb90538a6a01f3fe54b2f0c62"],["/categories/Python/index.html","c60cf23aae4bf600a6e0b5029214ff36"],["/categories/index.html","6ce0235154856824da0f65d36d9297e0"],["/categories/java/index.html","52e185808c27e6902b11858da0f28d11"],["/categories/zabbix/index.html","e0ef195e67cd92730ea8336c646905de"],["/categories/zabbix/page/2/index.html","579ec2f9e448b847f457c9300ffdad3d"],["/categories/工具/index.html","046687e6d70e966cdb913c32e1794fe1"],["/categories/技术工具/index.html","3088e146a25b88264527972bdf40c98a"],["/categories/服务器/index.html","93e6f477ecf23c80d62d9e734932ca06"],["/categories/阿里云/index.html","1841a12ac826b5da151eeab1f9c8c721"],["/categories/随笔/index.html","7cb30e389dad631e2eeabd5bcbb616ba"],["/css/main.css","1d7a2b52704bb9fc20fb2772332a86b1"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","26fc5aa27ef49be6ca37333ed3a0129c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","963cc0f371cabab4ad4469661510368e"],["/page/11/index.html","37657da3f9d6f0935b7e9652cbb70394"],["/page/12/index.html","1427f5ac3a3d7a044dada9d59598b8be"],["/page/13/index.html","267fb8bfb6a5dcc939df410f7ccf45c2"],["/page/2/index.html","dc014f8c4427cc7055848d5eac1f82a1"],["/page/3/index.html","e0bebc18a9b59b2b76ca0fb8da0c9e3f"],["/page/4/index.html","0035731baf63eac9d261a8c0912ca69e"],["/page/5/index.html","fe59f47d59ec68896e251907ab6c1455"],["/page/6/index.html","aef2949a9e023929428040e46b0f91f5"],["/page/7/index.html","d9bcad3fc28fbd7457402c35eb59f7f2"],["/page/8/index.html","ab36bddf7da46bfc9a0496c5577b7e8b"],["/page/9/index.html","ccaf3a94aaeb23c9f49d23f53f146e1d"],["/sw-register.js","a3fb65287c504de1ed36cd8aaaaf514c"],["/tags/CentOS/index.html","a5570fd44fa7b90fcbce062e394c3897"],["/tags/ELK/index.html","12c53112aee324a23ae1b9e54bb4c47a"],["/tags/Hexo/index.html","9e0c7634e8cf924286d25846fca12614"],["/tags/Jenkins/index.html","ef3b4576c1f4681151b8ec1b501c71c2"],["/tags/K8S/index.html","3d951ec049efcd09b2f732fbd18676e6"],["/tags/Markdown/index.html","4c9402a7d0cd831dfb54ecfab391d82b"],["/tags/Python/index.html","393a69e62943331a13425872b53c5d64"],["/tags/index.html","1f7aa01dda15ed23368b82e672665aea"],["/tags/java/index.html","9a28c8951bd5d94007473c56acf28f0e"],["/tags/zabbix/index.html","d1cf61cc349c561f2bd1028237c7e97e"],["/tags/zabbix/page/2/index.html","e4ee25d35a565c3d587196095ec120f7"],["/tags/工具/index.html","9be2028353e3870afd5d1ecd5913c6dc"],["/tags/感悟/index.html","722a02dee621aa64a850f989b5936212"],["/tags/阿里云/index.html","a1aa444065439bac5f609345b298ecd2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
