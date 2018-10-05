/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","ee4fe5ee3f4d2c166bd4fdf41b681d60"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","36113763e9487d7fa9da0024a4330479"],["/2015/01/20/如何整理个人资料/index.html","2d909650ebd9d4c105e28dc7097098d5"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","bb4f1348ac4f3c3629bbfaaf94bee51b"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","58a15b6684c7c2a6860c8e888ac87e95"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","6dc1eeb507afd089121d2283f8d96833"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","33e0adafecea9da373e6db9ed22eaf1c"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","b478b06d44015fa2e2227d3513e43fe8"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","8d39e594716c20b750b4a703d2ed2b78"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","bd2a9bc56b5248156373f070f2d4bfb1"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","a47fd64272ca6cbf72cf7f7042290edb"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","e152b67ae0e0b9f4091daaa5f324a4ae"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","1460faee1718675839017f08107c7648"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","735075999a49c64a2ae34ab023547938"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","05b15c8b0ee15b2693ed9081198de239"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","a5c85a04045cb595ad476b54447dfe97"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","0b60028d6fc11dc539b32fe2902f8473"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","12a4949d61b06c9ea833d8abecd66ad4"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","884ad4ad353c89ac6b2d4daa51270928"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","55f514722ce3ec33164f88cf18171563"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","b98a9ee55b198eeda2ababdfba2ed67f"],["/2016/11/27/Zabbix Web 邮件报警/index.html","599d6b6392747673a43da94a8ab5f6a8"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","1e11476a01bf2bf4bfb39f1f072eb4eb"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","98e9d9aabc02a079496342e38e795771"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","2cf17a9ec6c68900d8245481be47db31"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","c0e89fccfba6851fd60cf6a26a108bea"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","8653b09bd51d6da40c51ac28a3b8bd13"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","07c85e9dbe3d2768f7a31b056ad426c9"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","73a51f0570e18a2eeb490323eb11a92e"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","bccbc22fafde6c6f35b60fa524528434"],["/2017/03/23/Jenkins 自动化部署上线/index.html","48f6325e599aef5e2fb07ce5b6a094f0"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","840a25bafc056213c626069d367fd0f3"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","58e322acb5dbd540922586ae0f344462"],["/2018/01/19/一起学Docker（一）-初识/index.html","4b04b50068aa9e68eeedd614ceba1ce4"],["/2018/04/10/Java-JVM/index.html","cdc05e535db881795ce4402cb25c203e"],["/2018/04/15/蓝绿发布、滚动发布、灰度发布等部署方案对比与总结/index.html","74bf88ba1909bbbc0eda68d7b8cc77df"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","18b098e797094064e1adb7604a09ce57"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","faadc61e87a9aeecb4b07b22745df3ce"],["/2018/05/24/Python 3爬取百度经验数据/index.html","46b1d329ebdbfba930db67a42e396d03"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","8687988432d4bd4913c26cc9b53d0a42"],["/2018/07/15/CentOS 7 安装最新版docker/index.html","a3f5cb262652d62334437891ad48910e"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","dc4d1c726ac9c36a0e3f834249b4faaf"],["/2018/08/15/如何用9条命令在一分钟内检查Linux服务器性能？/index.html","5bf9ab568075e63b1c0cf64ed25ccd0a"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","b703d00353bfef0e9ef866a68a29645b"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","6fd024dae871a7ccc1966abfa1723c1e"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","f59d831245a63d78927b09c205136737"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","8276c1def2f080626da956ad643af3ed"],["/2018/09/29/Git使用教程/index.html","b68bdd4f57649c0c089db6ebe14b7435"],["/2018/10/01/DevOps 漫谈：选择基础设施部署和配置管理工具/index.html","a467a85537792487397f41fd5290b0ab"],["/2018/10/02/详解日志的5个级别/index.html","73cbc987b065289bdd190aff58f8b452"],["/2018/10/05/毁掉一个年轻人最好的方式，就是让他成为多面手/index.html","8670fdf9523602aa34dee835db9c7c37"],["/404.html","a896da12b317d18eace83a96d7f72ca8"],["/about/index.html","572c3ea3b252d04f23bff9bad18c6445"],["/archives/2015/01/index.html","f2c41536b83dd942849facd4c99770ad"],["/archives/2015/02/index.html","47a40e3bc92a1435fdf0a4e2f2f61937"],["/archives/2015/index.html","b328ba7924c949e657068c9f02530865"],["/archives/2016/10/index.html","bd4d87f337c9afd7ea3b3a36711d64cf"],["/archives/2016/11/index.html","39d7fc94f347d494890f0dbcc1c49f18"],["/archives/2016/12/index.html","431d4b3a2effaed3b039394590904700"],["/archives/2016/index.html","3ba8144bfcd98db7fbfd4d00d2a673c6"],["/archives/2016/page/2/index.html","4b42889db31236d561422dca08df2ecd"],["/archives/2017/03/index.html","6da0497c719db3788fc3ebcfefcfa6aa"],["/archives/2017/07/index.html","05c6ae00265a0710199d20298178fc1d"],["/archives/2017/index.html","fe413c7d450305b344fd74bcb9f9a2d1"],["/archives/2018/01/index.html","76f89c304e26c648723c1f5dfca1f057"],["/archives/2018/04/index.html","99af15ce3a2907ea9656da1970cb332d"],["/archives/2018/05/index.html","e0e18f3d249aef8bea20dcd935d1088c"],["/archives/2018/06/index.html","b6e823e24e24649e09bf1c7663febc03"],["/archives/2018/07/index.html","80fb717b4d21794984d93956244e49de"],["/archives/2018/08/index.html","5a8223fc74f26f082ea352f5a24fa361"],["/archives/2018/09/index.html","4dcba41ad0bb34b505367cce32e1fcb2"],["/archives/2018/10/index.html","a7a1a360fb2b8777943dcaa2093a7463"],["/archives/2018/index.html","0902c37fa57d1856c8b1f9f29d9866f7"],["/archives/2018/page/2/index.html","e86bcbe4f649722aa7eb4660640eba3e"],["/archives/index.html","da9c89ff5372a499ff966138ed8bab72"],["/archives/page/2/index.html","5dab348724e036467667c382898a2e55"],["/archives/page/3/index.html","48886900811252015b53fa2a19d044a8"],["/archives/page/4/index.html","645aa20edc8b3bc153a94494c23dba93"],["/archives/page/5/index.html","bd0c9c6a96419f78138fad3d5dcc596f"],["/archives/page/6/index.html","a73cab1201253dff82c2e76c47bdba89"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Deployment/index.html","4fd1f6f64f69c71ca7b55bd1ed650d3f"],["/categories/Docker/index.html","6ba8926365f76f7a4af706a7b2be0540"],["/categories/ELK/index.html","4b395ee8c146ed4de308dfee2f0d69e8"],["/categories/Git/index.html","21d5920224adf7eb5c1a7a05e6042c80"],["/categories/Hexo-Next/index.html","131de1af0ba393b270009f1370125a6c"],["/categories/Hexo/index.html","a56303bbe217e1545c3287ad28bf5962"],["/categories/Jenkins/index.html","17ea93d4bd991f9b1a9f6e5265d07526"],["/categories/Kubernetes/index.html","d2a006c38b61163835e85253bb11277d"],["/categories/Linux/index.html","908805402c63b1e3267e7a6151e94661"],["/categories/Python/index.html","a78f2474cb501f33b975ce440f548b26"],["/categories/index.html","8d7e3810856b88043404f284577a1a8a"],["/categories/java/index.html","85dc06e3f81105c3471308d059d11751"],["/categories/zabbix/index.html","30b62a199d0d5c29d02919d98ef3f567"],["/categories/zabbix/page/2/index.html","3c17712e7c5fde216becc4995d549ee6"],["/categories/工具/index.html","07cf3285546ebfd5ef4e37503e7e118b"],["/categories/技术工具/index.html","37fc0f44e2a42a1fec4aee0caee06413"],["/categories/日志/index.html","a58baffcf0dd48ec5f43e72608adfcf6"],["/categories/服务器/index.html","043c0b4c597bf54490258304a11c97a1"],["/categories/架构/index.html","efa32ccc9b6c8ec241b5cf03e689c62c"],["/categories/阿里云/index.html","08f72428a927a77c1cc0b764352886bf"],["/categories/随笔/index.html","194c41c45230fa96aa8128608142ca9c"],["/css/main.css","35340a3d466430d921bfb2ca54966319"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","4940fb04fef52e83ddd92d17195d28d6"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","0adb21a6ffd4218ca5da4516e9a7cf4d"],["/page/11/index.html","0b5d8276a4fceca7c103a273a39bef5e"],["/page/12/index.html","49216a0b2a39ca80cadf64030e0df9c5"],["/page/13/index.html","7be5a12c7f6b77dcde004b3429f40ea4"],["/page/14/index.html","05348cfe8564e253f54b41b706d4bbc0"],["/page/15/index.html","478d92cb5af3f8b1a40e2f94b820fee1"],["/page/16/index.html","734669677530d9a0a0ea436e54e01510"],["/page/17/index.html","5349d16afdefa35f8fc6ab5411c6c31d"],["/page/2/index.html","41dc6f3e7f1a171b5d251f0315424abf"],["/page/3/index.html","39919996152db22fb11b6eec218e032a"],["/page/4/index.html","6a92ab6631bc032f10a93d512aae3416"],["/page/5/index.html","9526a2232b01528beab2197a6f95b45c"],["/page/6/index.html","5dbc54337aafb64d0e00dae4f8f4c2eb"],["/page/7/index.html","3fcc1ccf62efd61973b805dc210a7f43"],["/page/8/index.html","22b5a1ddb0132fa1e04baea3fbc387b6"],["/page/9/index.html","dced6aeac12bedf5e32f47ed1e16f0e9"],["/sw-register.js","9cd791f91eac08d13b0f201861d851d6"],["/tags/CentOS/index.html","f5f3dbc994531235aedf5433a46bd31f"],["/tags/Deployment/index.html","37b74b8aea46c077b40f352e795770e0"],["/tags/Docker/index.html","219c490b209ee04da4f7d24c4c213b66"],["/tags/ELK/index.html","ea691d8266bee1f9ddff2565072d1f2f"],["/tags/Git/index.html","048a4e2492e28747c6b748255baadcc7"],["/tags/Hexo/index.html","fce71c6bbd3c584c5dedaa82e1ab1387"],["/tags/Jenkins/index.html","5ce4eb6cf01e6dace7b343b53c70930d"],["/tags/K8S/index.html","3fa423b58a9cfb70310345e60d79cc1c"],["/tags/Linux/index.html","83a07b3d85fc956e727784e705f2bd05"],["/tags/Markdown/index.html","3e9469e376f2ae00fa67b402b891ba2b"],["/tags/Python/index.html","f96f49269873666d1c64130d4551f207"],["/tags/index.html","67cde53b874b80a59409125c4de2c4ec"],["/tags/java/index.html","ab8772ff4c4752d03d807e48b43d06c4"],["/tags/zabbix/index.html","40d011637e8c800ee4e4727be867020f"],["/tags/zabbix/page/2/index.html","6f76d97658dbf0a322f10658f64eb8ab"],["/tags/工具/index.html","7f1769ac5ad29f4375a7920765d8f0fa"],["/tags/感悟/index.html","0e1c6b2cd5c7ea1c4cd4a60e4caf6bb7"],["/tags/日志/index.html","685ea0d10414015cc6ec867b275a07e1"],["/tags/架构/index.html","a7ae73c962abd8a421df7cdc81af4e53"],["/tags/阿里云/index.html","1277b0d3baa0cc6e6941821be0d3d617"],["/tags/随笔/index.html","1ca24051a2d41175afd5d093e14fcdf4"]];
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
