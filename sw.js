/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","a53fc52d16d906fbdbbf6f6bac6ec3c2"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","8d36a003a881def4f7e8884477b63158"],["/2015/01/20/如何整理个人资料/index.html","0fd3bf77f607b8f7de94b5fe14ce7ddb"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","265ce60183d54f40a6e31da6dcbff118"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","93513b956088246b41f60926aabc502b"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","271c281f50e6df5b8737441d320f79b5"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","b5f9cbb365c9ac52e8daeaa6c0d3843b"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","a90bc09ce139077e53fbd60171c889e6"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","d7d58bd1047d23154b5523cd7497b4b2"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","4874a09779dd64ad8742f5f02e5a84f5"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","bfa600ac18675b0800791b2f0e15b01b"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","d832dd2068734c9b9ce96895ef86d211"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","5958496a103fe6589dc0cdc5bc9d54df"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","40cc2d47fa42493ca971a1e0ef7bd5e3"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","735adca17f86b224044728c5103db975"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","886bd14736fc68e6f00b89f0e034c94d"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","eeac3a70af62fcde4c2dda440191919b"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","5318d2a0d11e83fd68011963d0a5a92e"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","3489dfd0691cefd75ea240c4207010c2"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","e4732ee4e883cae51a3c275467f2ffab"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","1cbd60edec1a61c0f2a47b791f9ff350"],["/2016/11/27/Zabbix Web 邮件报警/index.html","62e55adf2d201344680210e0d2aa4eef"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","efc5dd33be09e6c95c26bc0deb80530a"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","4c181a4f0898deb4db36ba72229759bf"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","b7530651f9a42267fd5140a589050c3d"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","a5f7fc21183776575f54253dff5adb59"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","fd8ec2a19efdeb4aabac10d4cbdaa2a4"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","d8020fc0e627ed0ee524a5c496a37360"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","4b5f1329ac4b90b81d873e4eee04b443"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","4def6ee8881595543906c6317fe72acc"],["/2017/03/23/Jenkins 自动化部署上线/index.html","62fdcb499652fc129686f6e45311818f"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","931177b294ca5379c35364e7600f4b27"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","0ec7763c55550e6767846e552b7dd155"],["/2018/04/10/Java-JVM/index.html","275c2fe46c4aab376129bf8c9ee4abfa"],["/2018/04/15/蓝绿发布、滚动发布、灰度发布等部署方案对比与总结/index.html","6a4c15b4e8b65b15530a486668e94d3c"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","fb47ac838940f8198d654723e599abf8"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","5a117d077e63f1fbbd8ed6513c6f2e71"],["/2018/05/19/一起学Docker（一）--初识/index.html","c22ec06d852d417010cd2c8514a6398d"],["/2018/05/20/一起学Docker（二）--核心概念和安装/index.html","28221b1b04e49773d41a4a5fe2af3543"],["/2018/05/21/一起学Docker（三）--镜像的常用操作/index.html","5f1b493ef9a8f963a1c562bc9af5d979"],["/2018/05/21/一起学Docker（四）--容器的常用操作/index.html","2aeb037daac29837ff3d6a05b7058e71"],["/2018/05/22/Docker集中化web界面管理平台-Shipyard部署记录/index.html","c16011d5fe73d61a20ab4571529e24d9"],["/2018/05/22/一起学Docker（五）--仓库/index.html","1c098b5e1079571c1b4610fca6339529"],["/2018/05/23/一起学Docker（六）--数据管理/index.html","dd67999f5b616bb960e36a4955f6ddd6"],["/2018/05/24/Python 3爬取百度经验数据/index.html","56bc61f0e45b75cf0b55f0191e530b66"],["/2018/05/24/一起学Docker（七）--容器的网络/index.html","71331e34d5671f582f2fe9c05ca5f5fa"],["/2018/05/24/容器间网络通信设置(Pipework和Open vSwitch)/index.html","f25b93883412c6f053b6d9a3ae37e84e"],["/2018/05/25/一起学docker   (八)  --Dockerfile/index.html","b66efdb9e8f42a138e5c1f1616630913"],["/2018/05/28/一起学docker(九)  --持续系统集成了解下git/index.html","c88ff36740b1548a41551799080927a5"],["/2018/06/02/一起学docker(十) --jenkins的使用/index.html","c19bb55f36b9fa066000e9c4cc9f6b2c"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","df992c0e4e95fe910ef4c1cf98eb5b04"],["/2018/07/15/CentOS 7 安装最新版docker/index.html","f8a901ed5401e3bad205614911b852e2"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","931060a1df110f4c9cf90fcafc6c06e3"],["/2018/08/15/如何用9条命令在一分钟内检查Linux服务器性能？/index.html","d9f27281f65c7c387d066580373fd6d3"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","0e4e111eab662063fd7f45ccfa45f51f"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","8e1fc3eb3fe1d2ea3f525a4b0f03e787"],["/2018/09/15/cpu内存磁盘io过高问题处理/index.html","55e4652b9bdeb7fe1ee999407b69a418"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","123f192cb9e91a01be2c588839bf1d3c"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","5b20a56ca07c47fce6073a8616279d6f"],["/2018/09/29/Git使用教程/index.html","ebe2c4c00fa75554dfa2a4f48ca71f52"],["/2018/10/01/DevOps 漫谈：选择基础设施部署和配置管理工具/index.html","b846e9da08a6058bb6de770d0eaed296"],["/2018/10/02/详解日志的5个级别/index.html","6db5f364e8c339dcec2971af21fda865"],["/2018/10/05/毁掉一个年轻人最好的方式，就是让他成为多面手/index.html","80d456a872f0786fc30cbf47d3774574"],["/404.html","792966516f549ecf7c969e9a1ec702df"],["/about/index.html","9c017d630d6c9179454566b0e5fa7b8e"],["/archives/2015/01/index.html","0e4c297802101c5973423598aceb2866"],["/archives/2015/02/index.html","618cf3105d058fb53a5921adc1267260"],["/archives/2015/index.html","640809e6395cc3ce190c7dc9a5cdfd02"],["/archives/2016/10/index.html","efe87e68d3f30bd503e8910b78dbfffe"],["/archives/2016/11/index.html","908bfd22eff2531c3ed1ff28fe1e17e8"],["/archives/2016/12/index.html","7e1ab6e0dde7ce554d5a136061db7d46"],["/archives/2016/index.html","85d7fde8b28d5837ccd8e77b1f030f59"],["/archives/2016/page/2/index.html","00102d45a5930475339f951926c7c685"],["/archives/2017/03/index.html","159c24fbf70c3a9cb9a753bcaa13208a"],["/archives/2017/07/index.html","0190a691f3e457559d637cc12254e4b6"],["/archives/2017/index.html","0781c9c73a866c687146849a6c89ff82"],["/archives/2018/04/index.html","0a6d3df13378ad0a93c41b827daee0c3"],["/archives/2018/05/index.html","5cc16f109a9878871e4d13f1b3dd43fd"],["/archives/2018/05/page/2/index.html","4d8f29fe6af877a46a419473f9af02eb"],["/archives/2018/06/index.html","67c8b637ce0a4b938ce266ba4de649a5"],["/archives/2018/07/index.html","f8f73be0ebff5871164eb9ac8b19541a"],["/archives/2018/08/index.html","877366aeecf64bcc04943c87d45f6a4b"],["/archives/2018/09/index.html","e691b885a3ad474f5efad95879f359c3"],["/archives/2018/10/index.html","a85a65efa9317c4962ca58e676725b98"],["/archives/2018/index.html","448379613b7b0fe07e3b65d4444f3bed"],["/archives/2018/page/2/index.html","e06e2ad2d91cb394dac4b3792ba7481f"],["/archives/2018/page/3/index.html","7e7b9036e14f45cf51cbbd190e5a7c7d"],["/archives/index.html","94097f95a938c4f9a14bce977dca3a0e"],["/archives/page/2/index.html","4974ff33b1763319c1a41f3b14dc0439"],["/archives/page/3/index.html","cdd6ca95aac43b54e759b7717d966921"],["/archives/page/4/index.html","9bc260fbcbfde8704e767d62689829ca"],["/archives/page/5/index.html","f06c6c69945c573f0104309c714270ab"],["/archives/page/6/index.html","b1667880df7a557d2adc1d248f66b843"],["/archives/page/7/index.html","9ccced0cb2b5f3db342774f86b1661a5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Deployment/index.html","05fec0d2d9887e0e3affd70c585758da"],["/categories/Docker/index.html","3c45925344bb807cc8028fb09a075c9f"],["/categories/Docker/page/2/index.html","390066704afc1f8d9814422c27cf6ee6"],["/categories/ELK/index.html","d8bdf1d4ce5bdabeb6bdcc4d88bdc4bd"],["/categories/Git/index.html","ef105c93497037e2e0383d19d3f2e2a4"],["/categories/Hexo-Next/index.html","d491154765aef2ca781ddfb14de571b8"],["/categories/Hexo/index.html","d1f6de1ac8836ed0f116b18caec48c33"],["/categories/Jenkins/index.html","9ec111b0bacbe4085d259e7fded785f3"],["/categories/Kubernetes/index.html","0d71be2dcf8940c0bc4551b9cc831060"],["/categories/Linux/index.html","12aef0a4502d67d96158b3c3e090529a"],["/categories/Python/index.html","6ecc11f6fc7efd14f910a16c2202e151"],["/categories/index.html","1ec844153612116b9c1e9e7046cb3846"],["/categories/java/index.html","40053d60993bade9d219796561362cc6"],["/categories/zabbix/index.html","b40ed245ee45681b50cc5b2d28722cce"],["/categories/zabbix/page/2/index.html","60fe8ad84bcb6ec497e23770482c19e8"],["/categories/工具/index.html","0900965f9a3c9800226ccdb1c96822e9"],["/categories/技术工具/index.html","a28c3268c8274ca98516d3a6a6e36ecd"],["/categories/故障案例/index.html","2792a7750403ff6d47e0dd2ba4ece836"],["/categories/日志/index.html","140c2ee853da734d4e3ef9c8c298457e"],["/categories/服务器/index.html","c24102f392d1724ac6e58bf4364c49ea"],["/categories/架构/index.html","f1b799695b18d86eecb518d5ac60dee0"],["/categories/阿里云/index.html","3bf1be39240df007a874e6b56ad788cd"],["/categories/随笔/index.html","3147d1b54e562711afa9d34abf42743f"],["/css/main.css","ee4d09692f1a9975cb91d644b4d00265"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","68d609fc9a2a4fe7516391ae90f664a9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","4c8732848b673bfbf2eb921998b88e6e"],["/page/11/index.html","2f76b216fc5b69dc29ed770234578998"],["/page/12/index.html","d4eab5f8948967350353aa413d6cd734"],["/page/13/index.html","212d76edab8f8ab50dd81672cf602622"],["/page/14/index.html","86ad3581dd6b2d31b6ed04acdff6b39e"],["/page/15/index.html","8dd66653c00970fbeacc0c30c617202b"],["/page/16/index.html","2358376bc982988ee764562a49894ecc"],["/page/17/index.html","0ac5626fe77d5997eeaafe5db0e19884"],["/page/18/index.html","50e198ac4a5dea5c88260efed1248327"],["/page/19/index.html","0a898dae133c21d5e7c97e0c40abc1b8"],["/page/2/index.html","05fdbca02de85a4a52d0855a28d02be5"],["/page/20/index.html","5edb4e9d5b0a8238f1b5546c69a0caf4"],["/page/21/index.html","10af4dbc5267f053510ae2b50fab3427"],["/page/3/index.html","448896b3995493bf967d42ac385f5f4a"],["/page/4/index.html","30babb6347c9ab154eb1cb46ff064260"],["/page/5/index.html","d3ac56c0d10f96f6b39a3eaf3a1f7cb7"],["/page/6/index.html","5f82b84e418bb54d9612901de538e8e9"],["/page/7/index.html","10495477af8c4a9b4fd81a428e987bf8"],["/page/8/index.html","1c77a647af9f1021695d2642af63b1a9"],["/page/9/index.html","dbfa76a04c69d523afee02b883ac902b"],["/sw-register.js","5285c8b96afc4f7d941e2a1c2571c0d6"],["/tags/CentOS/index.html","91bcbf07a6a806d8a49133989f6384b0"],["/tags/Deployment/index.html","115d309703997087bcc214fccf06b981"],["/tags/Docker/index.html","c9e3eff4d59201a0596aaa44c22f49c4"],["/tags/Docker/page/2/index.html","6992272a6af3bc78595847cc8e211550"],["/tags/ELK/index.html","f288d7a9e66d53cb4936d2260bc9ea89"],["/tags/Git/index.html","dc242f244c8648bf1b382e9effb32902"],["/tags/Hexo/index.html","0f46e128cfceb6c206e9f73676e9bc94"],["/tags/Jenkins/index.html","d8efa736365e489ee4b465f0933050d5"],["/tags/K8S/index.html","b11e2a444e9b893155556016e0bc8ac8"],["/tags/Linux/index.html","79ae0c3422c25809692dd5bbe9eeeb88"],["/tags/Markdown/index.html","d87c04abb2e0a3ea68687653e0176145"],["/tags/Python/index.html","94a1c28323911e532efc50ba951099e8"],["/tags/index.html","5d977408dac589444b67265686bcf542"],["/tags/java/index.html","a88fd68815e740edfd57499d37a8aee3"],["/tags/zabbix/index.html","fde7ab6b32a499177886d4f1e532d241"],["/tags/zabbix/page/2/index.html","0fe77ad523f3daddf59b103204306070"],["/tags/工具/index.html","1bf4a7813fdef258e04375b148b1cb84"],["/tags/感悟/index.html","f79d228b7cfb80f66bc57c489d4df32c"],["/tags/故障案例/index.html","8348e18fc88261b6e15c656e2100dd93"],["/tags/日志/index.html","ada0be39c3828eac8166349c7c5658b6"],["/tags/架构/index.html","f2464f6ffcd75e04d811d4740f52c1fb"],["/tags/阿里云/index.html","4672af21959708e991cee7554d4cab61"],["/tags/随笔/index.html","e67bbf52791f5ebb29a69f5ee75952d8"]];
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
