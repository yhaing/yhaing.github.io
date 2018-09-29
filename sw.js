/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","5675f5de04d3e7359265338965280b72"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","74be678bfb616071fdd16606a8ec4e3b"],["/2015/01/20/如何整理个人资料/index.html","6314bc069574e8d0811ed43f3db6c75d"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","a9c797a16724c1809b4ac43cbcb0da7f"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","962bb0c656400337ebeb9e483b5093b6"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","de8dff26da8fa7b7b29c2a7daddc625c"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","60bc45329baa42893678091dc515a596"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","d7f7ca6a90965654579c7894048f6192"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","f3387164d04e605af507783a8fb67ba2"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","f07908021cb2613669c989fb37395e0d"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","f5177098a1afc31f4d1b497fe76b663b"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","9c05c75933d4ec869ee92b5e33c3d752"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","a0b224d54cfb9af7afa6bfed2fb15b88"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","71b736dc10b1a742c2f9fda1fc120997"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","abd0373b9ef342a2e4deb37b38d850e6"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","9ecb3a21d66d895e6bb61bd82e851d48"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","2292e7b960fa31021c48a1303c4bc1b3"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","18653ea92908330737b4473869069971"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","8c930fd0260886c251ae0d45ada319cc"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","9bc858261e1d7f7df2d527955362bd37"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","4f52740f4e19f1a12e998167bd7d4d3e"],["/2016/11/27/Zabbix Web 邮件报警/index.html","6c57a621fd1b039f0abe4f0c075ddc34"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","e8e97529b297ab50dafe7c1c6cb27ff6"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","90afc0c9859b7d7bdb68b594366a99d4"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","02f13bcc6b7c53b4d02792dc818a09f3"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","5adb4f8b052e00e24fb8edf7562979fe"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","efa9fefa62324b5b8560f33c8981618a"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","82b8097d2dada6592eed9e40dd00f9ea"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","5425b17ee0ccd22f679527a342fadc6d"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","d2a15ab4b921e11ecc14dfa5b8c28166"],["/2017/03/23/Jenkins 自动化部署上线/index.html","d9df59d76c2546f1e830820f953e5198"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","2a5cf3dca5c68525167977f46b727f73"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","6d53f84ba5caac3d3346d9088dce3a30"],["/2018/04/10/Java-JVM/index.html","aba67315d0dbd05a8755a2085cc7f311"],["/2018/05/24/Python 3爬取百度经验数据/index.html","637aedf1175128366db88a040218d107"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","5116dedf3bd37a6b74129a2328e8a5fb"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","0120e581d2de2f326c767ad2fbdb2938"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","4faf11cfbfc04856e6d00abfc640e245"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","53ef570d30cadf06830cd0a90180f926"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","fda19699953131c48402b32521a165f8"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","789035457783fc5dd975c9f1897c030c"],["/2018/09/29/Git使用教程/index.html","001bc669b5cdf473552d37ef718926e5"],["/404.html","09e94ee28c73573bf26fcc79f6002252"],["/about/index.html","be78e2ea53bf4c92ba51a302ba6b696f"],["/archives/2015/01/index.html","f770b3b59423161c11d6922ed983d702"],["/archives/2015/02/index.html","5fec086467ae9b992e684d6e58bf5305"],["/archives/2015/index.html","cc9f0b982762f30eb2c6e60e6e599c39"],["/archives/2016/10/index.html","7c65cbf29002ad508237002ce7c38eba"],["/archives/2016/11/index.html","96f772ae2338d8bb694e1f279ff068c1"],["/archives/2016/12/index.html","29295da741b51db6c10f49e183700dc0"],["/archives/2016/index.html","1829b90d2886cc6540e7265b4aaf8630"],["/archives/2016/page/2/index.html","ed53d62b1bac49d2ab7fe8cf68efc072"],["/archives/2017/03/index.html","6cf97e250567b58a0ce6013e4fb3f6de"],["/archives/2017/07/index.html","ce8e6cbd12c5fffbf2f5a9f83cb5efd9"],["/archives/2017/index.html","cd74c96ff4633034ef5d5d1cc9e4587e"],["/archives/2018/04/index.html","dc2a753a3ef9947948a04e82ff615b79"],["/archives/2018/05/index.html","2e38931a894ac2c4fa6d6dd559638a1c"],["/archives/2018/06/index.html","630e42a20823607142f900fc28bfdd00"],["/archives/2018/07/index.html","e8d965a946347a5be6365b611927a4d3"],["/archives/2018/08/index.html","3f63f0dbf264b45c85ebc44ed24b1eba"],["/archives/2018/09/index.html","7c7f9f591b61565e297fb8daa42e6c30"],["/archives/2018/index.html","bb21e4bcfbe5b1552844072a5e00387e"],["/archives/index.html","1b4b1f081807c9157aaa7d92a2b7a919"],["/archives/page/2/index.html","84ddc4887dc2d066a8eedf57e3b477ad"],["/archives/page/3/index.html","b5e059e578e1a197f3125ffaa1254f09"],["/archives/page/4/index.html","c6a5319c93d364305e38e1b62688ff0b"],["/archives/page/5/index.html","ab4683753f60400610e83eb06aad294a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ELK/index.html","1ecbe758141ab08076822b8d307daefb"],["/categories/Git/index.html","bef3c836f60b678292d980f91230e463"],["/categories/Hexo-Next/index.html","342d669abdc3cc828ad61df2e6f215c4"],["/categories/Hexo/index.html","62d8b1deb2b47ce20dfd6f87f9060236"],["/categories/Jenkins/index.html","408bec1a824779e7167194e336c42fde"],["/categories/Kubernetes/index.html","06750a63dd9add3f16ab4341f99dd852"],["/categories/Python/index.html","a5e3f92833540cfdaca0ee0c020a4b5f"],["/categories/index.html","89a9b260c4d8af82a41fc0b6674e6ea2"],["/categories/java/index.html","8924717ffddd3b78d5b33d487e2e27bf"],["/categories/zabbix/index.html","bd6cd57bee761dae74e0c4d3f9611faf"],["/categories/zabbix/page/2/index.html","3f4bceb4428b9bf82534204fdcd8c7ff"],["/categories/工具/index.html","47f14bdc1ae620a840af041afcc06cb8"],["/categories/技术工具/index.html","1c3fdec5de3498c0cb8cfc77cf0370d7"],["/categories/服务器/index.html","1145b6f506ae929d251d68e5ff2b5e8e"],["/categories/架构/index.html","65468b4128e0475a221f5d4d05b294e6"],["/categories/阿里云/index.html","5a79453aceef2af93c4fb6024daef8bd"],["/categories/随笔/index.html","7bb89afbd911ea66af0716387627c9d4"],["/css/main.css","e1cb56d3041c14965c273c8f60b3e01e"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","8b87c645e713c967b6f9d0679443b653"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","df010708d2c3d57d04227315e1278475"],["/page/11/index.html","5402e8b35ea7dfb4c0e88ec2172efa4a"],["/page/12/index.html","248fa210835eaa8e36c287cc65390ad3"],["/page/13/index.html","45b40d646bba89e0de84c22bb2ccf679"],["/page/14/index.html","5232129ed0eb6e2b6c1f03ab414c5b7d"],["/page/2/index.html","3e0c0fe359cdaa32776d5169c02aacc4"],["/page/3/index.html","e63dd6b3826d9687af9c4b611b895368"],["/page/4/index.html","04da6a096b4b6ecb96218eff06ee3bef"],["/page/5/index.html","b09d1391eae53a74491a1975c54565a3"],["/page/6/index.html","2455ed406464e6611afb9c3c46745775"],["/page/7/index.html","8f55e4c0357ccef838fcea18ddfb09b1"],["/page/8/index.html","59caa4e001e0a9380da1cf753b40b50e"],["/page/9/index.html","3bd61afc4275f1802384ecccf5fd42f7"],["/sw-register.js","03215e01052bf42915ea2e3fbeb972ef"],["/tags/CentOS/index.html","e7239fbebb5710faa724cf79c6571856"],["/tags/ELK/index.html","25ddbf882be09643ab7d801a2db99ab6"],["/tags/Git/index.html","972eb12772c36e250337803684ca3038"],["/tags/Hexo/index.html","0cfb5939aedd9191ceb113b6594effd1"],["/tags/Jenkins/index.html","39a1d56cd4d299d304caa3395d07a597"],["/tags/K8S/index.html","5d84364eaef25796b592574ae57feeed"],["/tags/Markdown/index.html","271f1ccb1bfbb0209abe83bec6978e2a"],["/tags/Python/index.html","2a150b620884e6ee2417743f1f1a758a"],["/tags/index.html","a23120ffaeaaf25a40207dd4a52ae80a"],["/tags/java/index.html","e179ac179729ff84b80fb1b1219c9584"],["/tags/zabbix/index.html","f9298ca365444745faf7feb85d0faafc"],["/tags/zabbix/page/2/index.html","e88bb8725c1d5c541dd1cd7129cd5072"],["/tags/工具/index.html","40bd3659fee2e625c66b986086085dd7"],["/tags/感悟/index.html","f9f463541283eabc92157f826552b987"],["/tags/架构/index.html","311caad5d17a8d466109a179355a6a2e"],["/tags/阿里云/index.html","bc79415ca4a0eabe4ce169b353f9a4bb"]];
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
