/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/Markdown快速指南/index.html","9d7069190420e21854b0600023311f2d"],["/2015/01/19/markdown常用编写语法/index.html","a495606af5e96205449ccb7433d4cc04"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","82b034e99d6c51568fe065500e4f72a9"],["/2015/01/20/如何整理个人资料/index.html","0786647ce93ff238779014ae2e2fa942"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","18be66c609af6776044da7b4432eaffd"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","caf4b66b4c5fe17cc9074a1c95d29901"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","08633ae40003ed92750e5fa3f1c67861"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","9e8a3ed34a2d601bc947c20b36c895d3"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","ffd36f09aa17570e32d998e453bbe19b"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","83c51379272d8456486bd6cedbd7bfdf"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","2951b409ca7c96e5a3668e63a6e8d6bb"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","799c34db7d537c8c1b45f737767b6c55"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","2626af1c425bc7f654708374f96e7bbd"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","9844261c6d8a1c5376f493b0c1cd9265"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","55456a8707a2eb4edf2d339e3a37b5d6"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","54e83e1b41152d57ad19093e71cf4f62"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","7a0557a155f00a844ccc1e3f8520b9e7"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","6a7fe7c34c3dd20971c28f3da6657cc6"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","458a7f1e9e4cfe9ec82600b87d317f7d"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","adf6115d0282556aa7c370148136c30e"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","f8150e1f1286244e6bc3ee9ff053a2d7"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","d554820450684850bdfedb58020b8c55"],["/2016/11/27/Zabbix Web 邮件报警/index.html","8b1149b91fd52045971ee8ba92a71775"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","cccafe6559314309e389fa5e9b7a5461"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","dca68cc49e48024bf749f1bcb3f69910"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","661c80b8275d96a24a4f1ae21d0878b9"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","e93c7110602fcb24ec4d5f779d8c423e"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","7be089e6cf4397ef864cba8df8c089e8"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","98223083022e5e52219f814d821ad5e4"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","ab7b4b56531032d0f7d186ac69aed555"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","d3b2b10109b37b07d1a69b9bdd9e734c"],["/2017/03/23/Jenkins 自动化部署上线/index.html","a96495bdba0f5c09840b796f9e527d6d"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","eaa497a0395984a541a56483771ae13e"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","b926ec27f529972aa98009a0dc05fa5f"],["/2018/04/10/Java-JVM/index.html","c2c4ef48cbadb631cde3bc907df97db1"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","548385b485dfb1b3744e14433118b468"],["/2018/05/24/Python 3爬取百度经验数据/index.html","70d5d2eacb0b480ab4a4dc6289c6cf33"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","9f8a1c45cbf5f79bfb3695ce004bd4af"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","b10fee326e8fe716838bfca0b785e1fa"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","3a5f9873420516fe70f609f8d7f13492"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","e11da6872143948ae421f461ef47797d"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","00faf2eab076da9193a7843355042c8a"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","3b14b002220339acf81fd7c6d6faee29"],["/2018/09/29/Git使用教程/index.html","7529d2905b7791e86073411f18a24703"],["/404.html","14ae365fef2a56ca7329f67d4e66c454"],["/about/index.html","18d006c93176e874fdac8b5730caae01"],["/archives/2015/01/index.html","b29e3b2ce16464449bc70272dd47a7b8"],["/archives/2015/02/index.html","c99ecc6a25db09b8ef4c6dae4f8f4329"],["/archives/2015/index.html","11fbb60bb42a7b3c4020e47dcb5a8362"],["/archives/2015/page/2/index.html","76ed6666c13722b16b3681665ba78e19"],["/archives/2016/10/index.html","7f18a1a67e204f69abbd50261f96b738"],["/archives/2016/11/index.html","e2d05f28def4ed288880b400396f4b08"],["/archives/2016/12/index.html","5c5bcb5bc257dc922db0404188210618"],["/archives/2016/index.html","d571553cc3574654801580d5cd9a47ed"],["/archives/2016/page/2/index.html","c53f3d309402dae4fdff3f3a81a9bfc6"],["/archives/2017/03/index.html","b1b69e91a82b9efb2051960f55870fbd"],["/archives/2017/07/index.html","7034c3426b9f858640f8a87bbc2483bf"],["/archives/2017/index.html","f37a7329596f6da1af9d583589531874"],["/archives/2018/04/index.html","af12569a7f27bba805a010875849bc8b"],["/archives/2018/05/index.html","7bb12293ee220830837d801daa55d44c"],["/archives/2018/06/index.html","9a8b7f6cd642706a58a3d8a7f3883099"],["/archives/2018/07/index.html","07365f29b5e5e12b2d0811b2b1ace379"],["/archives/2018/08/index.html","463663c4580cba008c185f506232f53a"],["/archives/2018/09/index.html","6d2a99a4a00d3ba97ad022536235ca02"],["/archives/2018/index.html","8c099db4f165d4d2b8a5e46bb3a9b52f"],["/archives/index.html","798c618eaeffca5b611be5328c5004cb"],["/archives/page/2/index.html","082393df215b36f9609a740b92f197c5"],["/archives/page/3/index.html","51d14781d4f94b6f81a11cfab0ecf148"],["/archives/page/4/index.html","ba5b1be5608114bc90c2c8558782e7ab"],["/archives/page/5/index.html","5128fb4cf8cf6b4ef43613dd6919a5b1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ELK/index.html","c74895c042a658a8debaa3017b5492ff"],["/categories/Git/index.html","03d6f8cff50951f857d6e73757b9dbce"],["/categories/Hexo-Next/index.html","15c22a1028d6db03a8bbfbcb5304d0c2"],["/categories/Hexo/index.html","197dc8464b02b9f3b2de964ce728e3d2"],["/categories/Jenkins/index.html","28ef32dab04eaac43ae5d75e35c4d207"],["/categories/Kubernetes/index.html","2fe4c952a38d733c9d902e2db7a06304"],["/categories/Python/index.html","45bae9b9ad4d2f040dceb97aa56e1451"],["/categories/index.html","faebf3110a3a803135946dd8357412d0"],["/categories/java/index.html","717bc7fdd901b50685d5e17d8586e0d6"],["/categories/zabbix/index.html","e0fb7b3bd64b3325b2a759b52de7c640"],["/categories/zabbix/page/2/index.html","c1aebe799420f436fae64df5898e7939"],["/categories/云服务器/index.html","3c4d76f3dbdf64257b7eae3e3ea09ec2"],["/categories/工具/index.html","fa670e96d398e12d98f3533429ebf501"],["/categories/技术工具/index.html","2a46df4e2341d93ea7a5eb1d231908b2"],["/categories/服务器/index.html","ce78171649503ff487dd8d798746662c"],["/categories/架构/index.html","5c00ef7ef394d365f5934895eab29d50"],["/categories/阿里云/index.html","c41063c91338dda602b3cf15d4f8ed04"],["/categories/随笔/index.html","601eb3e1a2ce4ad2431aeb7adf44334f"],["/css/main.css","d1a6e613d8833f19527adb1323ad9257"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","f020b2dcd3d2fd6f76a0aff6c0196245"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","7f7b4bd72591650543c9c98d2d3f6907"],["/page/11/index.html","03a2c5159c641ae90c4b30fe80f8a776"],["/page/12/index.html","eb15c6c9f9cb96bc39c39e6c13c3ab50"],["/page/13/index.html","1b3b7ad979e3a2b315ab5f2a52bbda6d"],["/page/14/index.html","d1c230e68e22700096b6706760c72e8b"],["/page/15/index.html","52d1f9a0ddccb869b9e9bc235bd6609a"],["/page/2/index.html","847d63a4f47500fc24e5d784b944b3a8"],["/page/3/index.html","6ae8d992349ca0026d1d85654d12e634"],["/page/4/index.html","4ab158051d56cfb1f7d4b1aaa80861c6"],["/page/5/index.html","198f91a1761480dbd209ee34b8f3b31d"],["/page/6/index.html","ea7e9fc91d1fabc03df8ec72b0678cff"],["/page/7/index.html","73bde6d8c3208ba036b95c30348dada5"],["/page/8/index.html","8cbbd55504dcc817f17ec5a69bf42350"],["/page/9/index.html","f8f6d020f620e4a77b0676615e1610ee"],["/sw-register.js","8c796b24d3869fd48f5fc2364e5e9e48"],["/tags/CentOS/index.html","48aa88cfba06c8df7f63810ad00e68fa"],["/tags/ELK/index.html","50b7115236cc2378d080a35e2fa01be6"],["/tags/Git/index.html","57a586cc25790651476c7a41584eaa87"],["/tags/Hexo/index.html","1b28ccb68e9b9d2b365a695a88c6425d"],["/tags/Jenkins/index.html","d6e69b4d80cb6e88bfef78f5b455f0a2"],["/tags/K8S/index.html","544558e88bad30b6acf83958580d8678"],["/tags/Markdown/index.html","ec0ee4ac9dfc39a9dbfb06741aea384f"],["/tags/Python/index.html","41219db90e497c47df089a3afcf84d60"],["/tags/index.html","ecfb7a5c11fccf33a3ffc2419e1aba45"],["/tags/java/index.html","84c7a403a4c50fcac6a882e15b49dc02"],["/tags/zabbix/index.html","ceb98b3629c8f4f21943545cbe8cdc25"],["/tags/zabbix/page/2/index.html","58f832b0a8b0d2b2bed4b3239111b276"],["/tags/工具/index.html","ee15a253972da2ec02e9b4eac7ca7259"],["/tags/感悟/index.html","c29487ec1aa93b456b9580fd27227bb5"],["/tags/架构/index.html","870506fc0f2b7fa8bfce298306e73c6d"],["/tags/语法笔记/index.html","061ccd14e3a919aa94f9df845ef76b84"],["/tags/阿里云/index.html","8ae1b58cbe75bdc8b6c04899913a9c41"]];
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
