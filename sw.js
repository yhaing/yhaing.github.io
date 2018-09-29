/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","c12bafef447d37ff1ef4190e4b10dcbb"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","d2f81c958e2424fa0cbddceb159f30ff"],["/2015/01/20/如何整理个人资料/index.html","bd617468475ce2e41d4de930317adcde"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","680c54cb19ee755a841dfb9c882deaf1"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","9b147214f76b6c3a692e6856bfb731ae"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","ae289d3690c59b7938cedc36b47bf7ed"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","13595370ed98456f2ba1be0eb3d798d5"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","f8f62bcc34bcf667287db96d7a370377"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","f019fc5e7c59dfe08fe8a4e058f2cee9"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","057cb93eec3515867a725bf5fa09ebd8"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","53ebfbeea75fe287e63db68f5fc93961"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","92256eb349811f92986da9162af6a461"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","a91de112ac01f72ac6cb29804964df60"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","e37a6fdba1478ad253b7c382b36de24b"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","f5ba784c9ad89d3452fcba2142610646"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","b534b218d03ab582302b5b5c479462d7"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","f14ea1230b374579577eef178e80ae10"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","a3d0ac1636901080253adac4c473610c"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","f2d5ac395a5dc816a8a0d034400eed7d"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","779b7f5be3c09b4d05e85ca2faeba0f8"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","c508e6a6a3d7e7afed05bf12ab45cb37"],["/2016/11/27/Zabbix Web 邮件报警/index.html","1160c6e22a1b3668760deaec0dade162"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","5e84cb534071628496556626590b4cf2"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","0fdb476b2f0656881f76a4d1c78f9b93"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","64c57947d86cb90ad99576bbc4570961"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","abcd0025857d2a70d7d9817195657718"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","382d90ffbb5518191559060663f1f0d7"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","f07ffdc4f018a465d028c50eb05dcc80"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","3817aaa2cd3b6436e4133f07a8746826"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","d20363f9cdc97b5aa0074875da223192"],["/2017/03/23/Jenkins 自动化部署上线/index.html","f0255b1b6b6173b3543015d6930fc938"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","7700b07934be315bf593dd696ecd35ee"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","a00cb985e281048b915e3987b214843f"],["/2018/04/10/Java-JVM/index.html","cad877442828b5d3302bb5c44d1a0ddd"],["/2018/05/24/Python 3爬取百度经验数据/index.html","4e7abc9984c676cb376d21ac1fbad2c5"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","e32f6729666e2c214863129396596f97"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","27db1fa6bae825938d78e87207317579"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","9c360d578d4211b7d9f56e83e39f35e9"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","74599881c314a186acfc81b1ea559e94"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","df78806b19ed4f792fce1eae9eafd0d4"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","1935e30f90b997f007f0c86fe608769b"],["/2018/09/29/Git使用教程/index.html","86a8101e9f8a29cf7b472e4e04788b41"],["/404.html","6911833f0134c3331fb4a754e43fe8d0"],["/about/index.html","fc01dd6b10d298aba3f7b09d26f4e62d"],["/archives/2015/01/index.html","371c64f601ffd09dc76dee679fabf283"],["/archives/2015/02/index.html","3022e223f654ecb4204f4207b9cc525d"],["/archives/2015/index.html","91dd425a8cd1ad349df48033048b97e7"],["/archives/2016/10/index.html","c70124198f2cd9d80c827c46bbf598d0"],["/archives/2016/11/index.html","174a0082df44bc9fd117d40a8a27629c"],["/archives/2016/12/index.html","bc20bf8986d150781eb186709d019fb2"],["/archives/2016/index.html","4890ba7265ffc6a22374b349196030e6"],["/archives/2016/page/2/index.html","a407b475a9e7f7091fb57d59397459b4"],["/archives/2017/03/index.html","ec3ec6835331f3bd714f99bfa1d3c107"],["/archives/2017/07/index.html","52a7549d16be99dae101d34b2ae846e5"],["/archives/2017/index.html","441ec1907891a20dcb7d76b5f5792e1b"],["/archives/2018/04/index.html","b27e70ca20d2f4b52f677a41bfae5636"],["/archives/2018/05/index.html","41d2b83aa269b1d6efcfbfd992bfa9ee"],["/archives/2018/06/index.html","134068127cf1d24f5be0c6dc773628a7"],["/archives/2018/07/index.html","528a2b328db8cce31c5f307db0ecf8cb"],["/archives/2018/08/index.html","ae47f18736abaae406f6499075aab5a7"],["/archives/2018/09/index.html","648da8de784c959be3d28d5b5be77f75"],["/archives/2018/index.html","e4ac9b7edc159249bb9d5351fcfc9497"],["/archives/index.html","18f0fef57eae761d47e78d0f6a2db37e"],["/archives/page/2/index.html","1f5b67536a47395883df090b40f36aa6"],["/archives/page/3/index.html","5b59fc1ab840a41e5dcbb28ec19e8a38"],["/archives/page/4/index.html","2acb0d582069ab862decc19bf2d89ce4"],["/archives/page/5/index.html","eff72fa90bb723dbb32b1054c513a72e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ELK/index.html","c5c2dc86d63a578ece4b168bd7f8a8f3"],["/categories/Git/index.html","296f4a3790607bf477c77520e767ac4c"],["/categories/Hexo-Next/index.html","e4b5ec09c0132511d241c6178bd54063"],["/categories/Hexo/index.html","10aca4b6998c6798d9f1d3caefc179c8"],["/categories/Jenkins/index.html","b320eded3c5d61921edad633a501902b"],["/categories/Kubernetes/index.html","0c9077b12d2408ca0336ff84e509dc3e"],["/categories/Python/index.html","9a0911ae35718a3e7b55f1b2310dd298"],["/categories/index.html","8209a04e8cda3d3ce0829578882f1116"],["/categories/java/index.html","8893ea1a040fe987d0ae004c5416c774"],["/categories/zabbix/index.html","b117a0a121739ee87b5d90a7db96ce32"],["/categories/zabbix/page/2/index.html","0257aed46e7d51e2db0d46049942286d"],["/categories/工具/index.html","d1e3f410ce2ae3a46efcfd47425db69c"],["/categories/技术工具/index.html","5778dc192cc71d4e621df0fee32eb4d5"],["/categories/服务器/index.html","69a87d4cd5dc130fd30b8ee2f7832081"],["/categories/架构/index.html","55133eb9648f583533468350b099881c"],["/categories/阿里云/index.html","30ca279c51f8ce4193a5fba85c9f8cf6"],["/categories/随笔/index.html","95c64db184ef9575a7c319b395f1d3cd"],["/css/main.css","621748ead3674e417beff36fc020fe84"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","cf659bfc3aca35bd71d3e34fef5e0d44"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","453a8fe482e99d100c5ae1644fb89e7e"],["/page/11/index.html","d70cff4595ced83765f6825ae6a6b322"],["/page/12/index.html","9427e84d48bda21dc0a9a8cd484b668f"],["/page/13/index.html","5693831afe2daa559b346301b92b698d"],["/page/14/index.html","86e731035ad6d9880f74c422d7aa62f9"],["/page/2/index.html","7341f1e76247f5b0265b20b3cff13d84"],["/page/3/index.html","9723e3a05e31d3b877b7ea2920d1653f"],["/page/4/index.html","e5b35b698c0e199478aaf011f5b60c64"],["/page/5/index.html","e2dcc58ac6bbc38cb693a493d13d5961"],["/page/6/index.html","58b7505aeaf53cb2a77c3359188a3350"],["/page/7/index.html","d040cedefee636d8883d99a14dbb9ee4"],["/page/8/index.html","d55dff1c9e045cc380965c8e85a566ef"],["/page/9/index.html","646cb17320d8d9835042a2cfff40b614"],["/sw-register.js","33f885e3ec8d888a29864416c5c476dd"],["/tags/CentOS/index.html","88ae21ab0a98413f3ac4e51aef23d090"],["/tags/ELK/index.html","4bdc77f475f24c7ce97afa1b7049ff41"],["/tags/Git/index.html","e934c174a9585e597e0d0c23eabb54ad"],["/tags/Hexo/index.html","bbe9cec4e9f157d4323c09cc36ec6aa6"],["/tags/Jenkins/index.html","827337b80af5b0c013dad77e6a117a8c"],["/tags/K8S/index.html","18092a6ed3aacc9cfc980831b72b1548"],["/tags/Markdown/index.html","43adbbe2be92397ad72d048666e5dcf3"],["/tags/Python/index.html","228ca80ebc2cfcbad216af08e01420bf"],["/tags/index.html","ccc47ce46f9cd1b2ac0c8be71bf35d74"],["/tags/java/index.html","d526a1366e69c96f3fb9047ffac5188e"],["/tags/zabbix/index.html","93f6f15b30a02e2ae6c5bfe496c34444"],["/tags/zabbix/page/2/index.html","b4a44d7b89f5ef99c8230a8fba390989"],["/tags/工具/index.html","0f2830431487c42cc5e7278efa323ee1"],["/tags/感悟/index.html","750b5bd0aa65afb003a9fa4b24c10e14"],["/tags/架构/index.html","b46d0f077675388b3ce7eeb9b482460a"],["/tags/阿里云/index.html","0fce1e57dbd55c271e048498a27e647c"]];
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
