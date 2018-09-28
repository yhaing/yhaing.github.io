/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","78756955dbec5ee8d5d53b519fccb652"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","5a7a6df48a13b3fa13261a87fd3dbf41"],["/2015/01/20/如何整理个人资料/index.html","d2b9675ef5457ae560bc868dedb1be93"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","d1e6a3a10992ce6c298f22f286a77f77"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","8fe135539c158812163a82f24a7039eb"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","2789ca2cf12f618502d9125841819b78"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","8c6dd9f76b93b924205e6ab6d634558e"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","107ed9ea26f8830200051db7bcfb85d9"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","8ac719a71fd81e402b96958a6b9af199"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","fbd590e7382437d6a2a7a2144dc77428"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","c97380433dcc67bb6166900155e9faeb"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","04999b2127bdad8ae435391b94466dc2"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","561b156da038d27f976c875a6214b6d0"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","134c6d8a838e5a1ee70a8474202518f2"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","238b23cad0b59755063c4cc46e14551f"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","854ea46825737c02521e460f7d1e72e5"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","abe462707c51d50958f04f168d46c824"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","cd4142ee447e4683976b7e013318b1b9"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","9a6551dafd28c52627f40f07ef19b1cb"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","6414bc83662f87759115c96dd6c080ea"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","fe97069b1fc3b2f98690df58fb364b63"],["/2016/11/27/Zabbix Web 邮件报警/index.html","d2ca9babf6e708aa93022e0ec8d5c53c"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","0241f2afd9bf2fa2c34c047ddf22ea5e"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","26e272ff1c130be0f92dca40543dea1d"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","b8656f189b9727098b08851c97c7a929"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","7a115b41957978bb93167e176b2245ae"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","bceca97c0fc1dc19ed250ccfb596d3bc"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","d184238d18415e15ad47a321c9d490da"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","71adb7536105b0c22b861d0bb7bfcae6"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","4bb541521d509aafff87f1953516e2b5"],["/2017/03/23/Jenkins 自动化部署上线/index.html","4da19f686561f0aa2d39f1dee5ed447d"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","1baac40b0d68685986e75db9d010e60f"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","d53d00b2fcebbe28532860bd78565969"],["/2018/04/10/Java-JVM/index.html","ee5b3ad4f6352d0808c645f9c49f817a"],["/2018/05/24/Python 3爬取百度经验数据/index.html","1ddd39d8e3df1d91b76917a6e1250963"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","22bc0ffb0fb5d19c0f1892897893d733"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","96c51ad35a91499a4d784fae5b60a11f"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","32cfd3995ffb9d2125b12b934fc61dd4"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","a3c294d608ff8700b7ae4a4529b4fb11"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","959af778aaf4146d6ea4797ffbbb36cc"],["/404.html","cab2214389bb8a08230ac5e1dc7a4ee2"],["/about/index.html","18d2a47de46d87f871991409de932f5d"],["/archives/2015/01/index.html","c5a535da53110d4c8db7c239eed697ba"],["/archives/2015/02/index.html","032900115ed7bdf9ebab2f376ffc5a80"],["/archives/2015/index.html","48d3c59772930e7557d7f6addeb0ba15"],["/archives/2016/10/index.html","370559ca6934e474dd9c9dcb533902de"],["/archives/2016/11/index.html","f0cd35e2c486ed55b4e09bccea9fc02a"],["/archives/2016/12/index.html","91c514ef98774fcee741e1ee4e1f2ae2"],["/archives/2016/index.html","ce59a71008cb8de59341c8ef05f0c22a"],["/archives/2016/page/2/index.html","0f4256c6bb680794cbccb5c579e30ab8"],["/archives/2017/03/index.html","c6e827cd05755ab87a035dc5930549d7"],["/archives/2017/07/index.html","fe2549fc3881a92afc1d074b12a9b2b6"],["/archives/2017/index.html","1b1ad8feddbc021df3b14ffdae8650d8"],["/archives/2018/04/index.html","63e450d3da914a22fb2237a8f73b7106"],["/archives/2018/05/index.html","e5da5508a07ddde68020af1a95f0565d"],["/archives/2018/06/index.html","40cb7f7d38f52d8748182024d7e9b095"],["/archives/2018/07/index.html","504598011bc6306e192dd79846eb1f38"],["/archives/2018/09/index.html","0a2ee0409fef192cdc6b45e575a2ddda"],["/archives/2018/index.html","66a88dde2181f42a7a2a35d55656622a"],["/archives/index.html","555799916328cd65ba1b5525855631fe"],["/archives/page/2/index.html","d3da386a88a77f946f9f267e5dc6cd9b"],["/archives/page/3/index.html","e18c1df4b9a56ff65f0fde0f3c85cd7c"],["/archives/page/4/index.html","db07501fdc4df4a1f187c3c2bb02058e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ELK/index.html","408e8b8c28b9c9902ecc342038fe502b"],["/categories/Hexo-Next/index.html","e03be9af9b54f9643d2527f0b18afd65"],["/categories/Hexo/index.html","88977c1054d0d1bf65fcad79ebe688fe"],["/categories/Jenkins/index.html","e6de57100ee3a7981813b48d9377a490"],["/categories/Kubernetes/index.html","82c5df44b18d2020790b7e27ac9c7957"],["/categories/Python/index.html","3d1344a0088b09b2eaeed34be5a0eef4"],["/categories/index.html","284611d34c0d5672d2d3a505385b3839"],["/categories/java/index.html","f07a132ba903925bd08d81692888e96b"],["/categories/zabbix/index.html","33f632f7de3d7538f0196818f07e5b34"],["/categories/zabbix/page/2/index.html","35d602715574bed5567e4b251f3a3c6e"],["/categories/工具/index.html","e5bb2c567b61e6c01e45c600d964a256"],["/categories/技术工具/index.html","564606ed50d9653b58c270549956eebb"],["/categories/服务器/index.html","61c2b9210954ca984f83a9926837674b"],["/categories/阿里云/index.html","9fb9697fbfde3d71f6a7b181a687638a"],["/categories/随笔/index.html","2d297dc50b90c50be49946adfc8140f8"],["/css/main.css","89c964c81ed7669625001c295aa8192d"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","646718ac5326820870995fab6d6a64e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","0df87d878028a10b39b01ba23a54e870"],["/page/11/index.html","27083af1b2ce23f497df6284ffa06a9b"],["/page/12/index.html","e27f173ec00f2ecc4a5120720a053e89"],["/page/13/index.html","0112f5be03fa5bc63e7e68403d382c0a"],["/page/14/index.html","bc222906149b517c544632e82e909e59"],["/page/2/index.html","dfdb98d29d3f6d20f28ff985e0ea0b86"],["/page/3/index.html","c9b8a27d23db2cf2213037dc2f996503"],["/page/4/index.html","7bcb31894907327884aa79f3b01c9d75"],["/page/5/index.html","144eee1834ca917c564066cb07b427d6"],["/page/6/index.html","cb7b6189d39fefab2423402a20cc55c0"],["/page/7/index.html","a6fa5f83abc47972a54cc5b77183ca2c"],["/page/8/index.html","d1b1c319ddb2df6972b5fc44f654000d"],["/page/9/index.html","c88b9493df7e545a0f9130e855d8f099"],["/sw-register.js","bed57203662bb83bf93e99c7981a3547"],["/tags/CentOS/index.html","742b6a725e0efaba5bae7f06d6180e8e"],["/tags/ELK/index.html","ce6a7dab009b60a873f7c24ecf6543d7"],["/tags/Hexo/index.html","2a91533c35e144c9ffb4ec67ac26053f"],["/tags/Jenkins/index.html","f6e0716a83d3c9e18007b923f78db513"],["/tags/K8S/index.html","272b2add2d035909ab153e8897f5fbad"],["/tags/Markdown/index.html","e66e34b2233c36a86c563482c9db81d2"],["/tags/Python/index.html","c0075ba37e18684224721d8859d390bf"],["/tags/index.html","5a0629bfbbbe11d5a76b30667468b51f"],["/tags/java/index.html","f72ee13a9647d474879ed74dea569cd9"],["/tags/zabbix/index.html","6083c7fa86baa37862052b882387b24e"],["/tags/zabbix/page/2/index.html","7184a4da58f8869efe0b85983d4ceccc"],["/tags/工具/index.html","fbabe70fe3d55c72817348f2d4b921a4"],["/tags/感悟/index.html","cbbd86055ccef20ce950df89f78b2614"],["/tags/阿里云/index.html","e8a7d400465bdf25bc479fba41507773"]];
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
