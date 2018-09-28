/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","1501b8bd31b034bc63f6e6e69c764e02"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","00b40729fc105a17238eb48db607ba53"],["/2015/01/20/如何整理个人资料/index.html","c09f7800e37e1e8a4b59014c62cdb09a"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","904ca1405ba60ca75cfbd26b9af852a2"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","fb70eb9e1c183b6074071ece06e8ad66"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","5736a7aa94f094c32ad9126d5786a0ff"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","202af1082b541c7d185f8230fdca9c9c"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","33975815e93c1ad36dc1bab614dd15ab"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","1212bc03f8b3128fd3ac1416bd0d848d"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","1548a78022c75f0c41da6127a65960e0"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","7dfdf62191b7a539716b97828c611c0d"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","23c959e9131aa44e5063be6862658491"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","5a8c5a17181de9011c1e84d89a97180f"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","d9ce363ca288e5b6385e0938ad71d544"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","11d84e38e16fde4dacd21ef4ccaa1d47"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","f92b550d73e0781726d1f57ab0ab7ef6"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","af9fe7f16509542aa06863bcbaa05034"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","89b39314bb18a7f5d805441d4fc1d965"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","6e28332e9afb288eabd6144faa35f2a1"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","6eb3ed131b9ac443d5776528bd9feb20"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","a0c687c593d3944482f20394e5e98bfe"],["/2016/11/27/Zabbix Web 邮件报警/index.html","87978e748851867ff7c190eeec3169b5"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","6a39c76ceaa31f8a7b65f975a54fb1ad"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","d7324f25db6e6c605bd0d61edd8cc2c0"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","a9844cda2eb6cc5b8b8e756aa8a27b7d"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","1de0446bf6426eb0a60856333ac310be"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","7e00469de4a67a47f8acaa6122259e39"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","e233629687d2ccc19ba8d8d1d442998b"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","9617a510e5a0c39f875013b4c0b19bf3"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","f29f007e6af66f5fb7b834cd77a9f859"],["/2017/03/23/Jenkins 自动化部署上线/index.html","42cb608e888e88b845bb46d7a7d88c5d"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","9c7fbb43389c61fdfc588453d455376e"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","83cc6e4ec5cb805f78bdf565ce9421bd"],["/2018/04/10/Java-JVM/index.html","9df7f48c36885f92e68fc9d64f7ab994"],["/2018/05/24/Python 3爬取百度经验数据/index.html","053d835b09145e49f0aacb138cee0a24"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","ddac2435e0dc8cc7caa3c704ba135775"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","925649e088e671e386a79d37d422f8e2"],["/404.html","9f418b61c11ae2ac98eba3bd1f9ca316"],["/about/index.html","d26bf0aea38794a7e77d71683e138796"],["/archives/2015/01/index.html","bca034186063598cf82faa2516600768"],["/archives/2015/02/index.html","cbc41044c766c3ee6505e47f342aa149"],["/archives/2015/index.html","d0ba2f57f7dcb878fbb7bf289194a58d"],["/archives/2016/10/index.html","a031327e035c580436fbd579f1fcb5ed"],["/archives/2016/11/index.html","f1e23cb7c6c38f27b9f94e0ec17dcf10"],["/archives/2016/12/index.html","2c878fc87c3392b846bd12c960394d00"],["/archives/2016/index.html","809b18c2b1ae6c4ce5eef089b2044f63"],["/archives/2016/page/2/index.html","199f2900615425268f4577c8e1607973"],["/archives/2017/03/index.html","671831407af9bc311bd1d64093c7eeb4"],["/archives/2017/07/index.html","35dd74eeff224ec2c17cb4bf16505cb0"],["/archives/2017/index.html","63c2bde4e82bc1965960c4c90053b1bd"],["/archives/2018/04/index.html","84df77016baa419c6cd455eec6b54c1d"],["/archives/2018/05/index.html","5cb09144316a08fd4819a8f2b1d9a30f"],["/archives/2018/06/index.html","416f1aeddab06af4b706eefb961296df"],["/archives/2018/09/index.html","c5ab7b4e79518e58b10230e84edd1e9c"],["/archives/2018/index.html","e18b0c818804735a43b8737f39f48b54"],["/archives/index.html","d926a3fa01670efb634bcb1d1698665b"],["/archives/page/2/index.html","06a36deb40e8dd62640dfa164df71601"],["/archives/page/3/index.html","789036ae254ddf0eed38dcabbc7c291f"],["/archives/page/4/index.html","fc3447bc05b4ae92083c54f71715396c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ELK/index.html","5944b067dd647bd4ba8d5242abce8739"],["/categories/Hexo-Next/index.html","4a6bb1b2c3f0aa7b354aea39adcaf397"],["/categories/Hexo/index.html","ebcdb3b0fb0d1243f597e7864007fa16"],["/categories/Jenkins/index.html","1f42412c28ebc14012d5698898016ffe"],["/categories/Python/index.html","200a681ec4a7619b1a054f8b2fe44f21"],["/categories/index.html","6e6037b888abeb20a457626a5a03d79e"],["/categories/java/index.html","b34c2fc4b58c9d7de1186ad8cd48fd8d"],["/categories/zabbix/index.html","038d96e4ff0212d9cca9fd4068a8c799"],["/categories/zabbix/page/2/index.html","dfd4f5815f79eb8325eec7c67ab79d0d"],["/categories/工具/index.html","a3b84f4151f704843bdffdcc4cf4a995"],["/categories/技术工具/index.html","0be93b64facf5a545425678308f43ce0"],["/categories/服务器/index.html","6f869c9cb567323b0e13d1b4bed9f155"],["/categories/阿里云/index.html","250c3156f2d1f7f6b92fb38b01eaeb7e"],["/categories/随笔/index.html","872a6c0b28efa37c42b1495e47afe3a8"],["/css/main.css","ec2761585dde7cb587e104a1f5fe3af2"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","d84241757a4bee41e6759563cbcb0e6b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","cab669a65fb1d4d404cb6bfa644d8da9"],["/page/11/index.html","3c6fdd42f667274ed272defce39d53cf"],["/page/12/index.html","65e7c748d724ad413f2bd0e3cefa1f7d"],["/page/13/index.html","b50516a677b5da7a2f3a7f4090279e9b"],["/page/2/index.html","19c23bc5d35d20130cfcbe3d9eb88e3e"],["/page/3/index.html","d535a37329603e87de2e8942ad0ef689"],["/page/4/index.html","0e7c1e28120fd75c0b155293d7f637d5"],["/page/5/index.html","2f37d2c2d822da1512ae093e88f7c162"],["/page/6/index.html","9c40318159f58da6822983f0d961ed5d"],["/page/7/index.html","f2b9733793e9c478f9963a0c18b0e84c"],["/page/8/index.html","3e66dde011592e891ea9ea376f77d0e5"],["/page/9/index.html","bb295f43f60ef08d26c4f391d9a1fba7"],["/sw-register.js","ba9f1a75ea744a8ab4deb0a2b8b552f4"],["/tags/CentOS/index.html","adeed4176f22349c37b655d0af3a7e39"],["/tags/ELK/index.html","1a8b91353ccf322e8e4f34acb773476c"],["/tags/Hexo/index.html","8d904cbcecdaca805edaa8260e104762"],["/tags/Jenkins/index.html","8147b8af797799c933d41cf267d12d7a"],["/tags/Markdown/index.html","f918982e69b9d972dcf423ef66088ae8"],["/tags/Python/index.html","b0268a36519b191d4dcc27b3b44a957a"],["/tags/index.html","270e1c126b86caea287aa3429c97013d"],["/tags/java/index.html","d7aa87e706b4bd8158a7bf10a1da4854"],["/tags/zabbix/index.html","57344dd0ed0a78b12909a0aff92e0e11"],["/tags/zabbix/page/2/index.html","39c54ab5cf575fed6810c0c06527e147"],["/tags/工具/index.html","89c6b1d94111774ed688ebb51ca8c954"],["/tags/感悟/index.html","bf853372d815b79d174823323ac20d71"],["/tags/阿里云/index.html","97ba19aad8e76dee5f394ae5d74b7574"]];
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
