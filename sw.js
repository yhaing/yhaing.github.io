/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","b54b45b830c9942a8d071ced3e804c08"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","ab9288b4eea97da440aa589f3f0d443e"],["/2015/01/20/如何整理个人资料/index.html","66c495ddc4e1918edae1a4b1e0fdd0ed"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","bd1e72c80b6c0d499f81f045ad06dcc2"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","6135c6570e34d8bad36696e533dac745"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","364d27f47a340890ba2bbe31ccae29f9"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","5d89b674d44fb113ceaa9ae3ac4af2ee"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","dddc60afe6335a02e66d2b57a7016323"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","2074837d820a3948c3fe47d0c510e324"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","c58e59476a520524a3940863998fff59"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","5dc3ebcef5f6473985222263fbc11d5d"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","546551a83e2e61a90c3d48fdc7db0569"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","c6fc1afe7c505e3a4e17bb7b3027699c"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","1315e460edc99df27a28f80a544b4ba6"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","e6b969848636e48d87c98b9025409d18"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","7a470f82625efdea416de986198b574b"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","2c4e2cc0c70a0fe1432ef5672b85a6a0"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","d5a7dd3ac8670a3b601efaf96e2b29f1"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","8585e3c811fe886e258172746cec1029"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","8ec3f5277424149df11909bc5e1bce7f"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","db73692308617c91d71b01f6dd51e3d3"],["/2016/11/27/Zabbix Web 邮件报警/index.html","e1f07050c96ee89e49033965cfd9b0e9"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","e4cfa81c0851cebfe737aca814ec777d"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","582b4b9863c8cf0ae107367f7da28bd6"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","b2489ae77735a90a752b697fe6e64e3c"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","50bbe0e8981cbb9be6241c58f3f938a2"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","8225cd7c51452ca1dc18147349b0efa4"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","13ad6c031b7e7af95ce92d415519952e"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","a24bbcd43cbf2bd8fc50ad468cc0b9e3"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","fce8467cdee242fbfdf24eaa4b0b7f8b"],["/2017/03/23/Jenkins 自动化部署上线/index.html","c894a7743e578beda445eac875f1bdfb"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","6d14ec58c396a26e4e2e84a0c890f53e"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","5a026ada97b88816ec43cab2c3ded79d"],["/2018/04/10/Java-JVM/index.html","500f25717ab543323c300f1600afe5e1"],["/2018/04/15/蓝绿发布、滚动发布、灰度发布等部署方案对比与总结/index.html","8819416661efc6172129673daaa7fdf8"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","c5d394c882c92576b27b089bac4135bf"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","66c6f8324a270969dd839a32aa8c8bfb"],["/2018/05/19/一起学Docker（一）-初识/index.html","30c2e75b661e21a608544180bd3be682"],["/2018/05/20/一起学Docker（二）--核心概念和安装/index.html","3f2b667e2cabee63f974df8e6367cd05"],["/2018/05/21/一起学Docker（三）--镜像的常用操作/index.html","1153fdefbc4a42dbf3ce8bb17bf06384"],["/2018/05/21/一起学Docker（四）--容器的常用操作/index.html","a4bea5ac48371385cbf3a97755743bee"],["/2018/05/22/Docker集中化web界面管理平台-Shipyard部署记录/index.html","2c8054b4e518e156b5f3a6ef7fb18045"],["/2018/05/22/一起学Docker（五）--仓库/index.html","dedb83c7af142245da096db81419f606"],["/2018/05/23/一起学Docker（六）--数据管理/index.html","e6394a764bcd916e2851ea8a9e4196f7"],["/2018/05/24/Python 3爬取百度经验数据/index.html","a2ed8fe8dfda8f5845fb5a25da0fa1bb"],["/2018/05/24/一起学Docker（七）--容器的网络/index.html","0448ec6da1516b3035db55b5cbb00730"],["/2018/05/24/容器间网络通信设置(Pipework和Open vSwitch)/index.html","b99ffd8f587eff92224fbdcb2cbe54d0"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","0671e5a3f94e03de508fc9742e834f03"],["/2018/07/15/CentOS 7 安装最新版docker/index.html","b9d973428db6c656d065c506da5f3046"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","51553a21a6dcdf8a7eaeaf541d634777"],["/2018/08/15/如何用9条命令在一分钟内检查Linux服务器性能？/index.html","ea7ecbd7cec98c0428d9b42f12a8493e"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","9a700438f1f090a6ba5f452c805e4913"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","4f81be9d6003e6f6d6c00e27d8c6dfcf"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","db0c4f2fc514f5745c6d5872aab6d2ec"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","80d0477fb0e5592eef73462327a7d54a"],["/2018/09/29/Git使用教程/index.html","3617c841e63ad44f6238e11e3e972bb5"],["/2018/10/01/DevOps 漫谈：选择基础设施部署和配置管理工具/index.html","f2535f369951c20d550bcaabc5acce91"],["/2018/10/02/详解日志的5个级别/index.html","59c3180279639506546179cd4e36c33a"],["/2018/10/05/毁掉一个年轻人最好的方式，就是让他成为多面手/index.html","67a34b1512a5edf9888b96d90065f7e1"],["/404.html","ff2357190697699de1f201270436f4db"],["/about/index.html","470ab3cb43af3b1be22abaf2f1c6fdf2"],["/archives/2015/01/index.html","ec5553945e98fd0bfad3e2d2ab71dec3"],["/archives/2015/02/index.html","866053cbc7a1c345039f7d5b3e7edb0b"],["/archives/2015/index.html","d7e8e90d2a3e7369c1f8a0fcb02c7f57"],["/archives/2016/10/index.html","288b30de621da2889562f748c3de483e"],["/archives/2016/11/index.html","fd276a85b4603aac4fcc09d02b9f391c"],["/archives/2016/12/index.html","55359e0b29b46da24fec48cb4bf9285b"],["/archives/2016/index.html","33bf681cfe47d011e064bd13236144ad"],["/archives/2016/page/2/index.html","c2b7b65245c74728c225f555222cb22d"],["/archives/2017/03/index.html","5274c6d3955331d227382dc275be1ea4"],["/archives/2017/07/index.html","94d0c70b5807d2cd954cb1cc4689c518"],["/archives/2017/index.html","64781935b106e7917dd593819a3621dd"],["/archives/2018/04/index.html","2f9a131dad35b32941da01ea329a1b60"],["/archives/2018/05/index.html","9ce97755cfefb61f74530b6d48771be2"],["/archives/2018/05/page/2/index.html","18090bfe98e48b8656bb0ebe87ddc04a"],["/archives/2018/06/index.html","583c1eb5165c84f57ea428fd30e6d405"],["/archives/2018/07/index.html","9108013a00066ca7e3e2fe3f0884f393"],["/archives/2018/08/index.html","ea178afaad9df53606abaf8507012a84"],["/archives/2018/09/index.html","08ecf8de394f9141f50c144cf9527070"],["/archives/2018/10/index.html","dcb957fb98bc6400cf12f2786fa555ef"],["/archives/2018/index.html","64bab18198ec131b2e834f293a567b2f"],["/archives/2018/page/2/index.html","ef46482373174337ef20c585e944cf91"],["/archives/2018/page/3/index.html","14f5c0bec34c4b955a90eced373da1ef"],["/archives/index.html","f84a49fdfd0451e07e778d8b497a3f14"],["/archives/page/2/index.html","149f9138c7916cc74f9f0faaa56c8786"],["/archives/page/3/index.html","f328e66f55f4dda3f35a79a6767d8c14"],["/archives/page/4/index.html","77618d466820020ab9f929519ddf7624"],["/archives/page/5/index.html","bfe4ed41039cd58779c301789ba92ca9"],["/archives/page/6/index.html","42fd1211644b8acd456d624bbee261ed"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Deployment/index.html","e82d6afd6b0e6ba8ee0192772391b3e9"],["/categories/Docker/index.html","fb22cd7899fbc2e2b15955a083f758c6"],["/categories/ELK/index.html","1427456d95e56ea1b5f734c832d39cc7"],["/categories/Git/index.html","930f220d3e2bc11b1f981af1568e9572"],["/categories/Hexo-Next/index.html","10998bcde9586614c970513995955e78"],["/categories/Hexo/index.html","73ce8349da28a3792b318b1496181616"],["/categories/Jenkins/index.html","9c4c54918a110c59446f3d4cb20b5c32"],["/categories/Kubernetes/index.html","60c3b0b6d5ff69adfdf039cc105c8c31"],["/categories/Linux/index.html","953a606ec95303a31480bf830f3cde33"],["/categories/Python/index.html","713cd9ae7cadfd51a5749069aaed9862"],["/categories/index.html","977d4a19ebca165d13a00b292e6f62a0"],["/categories/java/index.html","09b894951274a98134d705de8cfd0494"],["/categories/zabbix/index.html","b4d6ba218ef0381a7e70f9b3773928ad"],["/categories/zabbix/page/2/index.html","7ffe30d5e2caa8e2287e1cf8f0ce9473"],["/categories/工具/index.html","1bcf02c6763463c1e7b143e128971c55"],["/categories/技术工具/index.html","ef9120a54818b9ee0785059080a44196"],["/categories/日志/index.html","f5109d7456389347c7a4fdc976e0f0f5"],["/categories/服务器/index.html","001af1c77155c954aeaf4dea5d9db2f5"],["/categories/架构/index.html","be2bff0aeb5bcfa117cec0a53db2243b"],["/categories/阿里云/index.html","2a45e0428f122857167164fc7e450ed7"],["/categories/随笔/index.html","dc6934ff958b26d8d31ebc65e2993ed1"],["/css/main.css","977dd5c683772c9d4b6145452a2c6f02"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","3618477a460ba9c1b67e65d25a86a8f3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","af6363fd789f364ceeaba0558771f708"],["/page/11/index.html","9c8b323e9bacd524d20de62756d0981c"],["/page/12/index.html","c800eda3cdb90133edb71f31de71df12"],["/page/13/index.html","51354aac6845725ca956f464d1196b73"],["/page/14/index.html","688801b9b4e313a1fb7d91e6e49428b4"],["/page/15/index.html","c3e733da74d3625c27d46160d64f9877"],["/page/16/index.html","ac9680f907a0ba47a74d4f44496eb428"],["/page/17/index.html","bf9ebf69f3a5659a73888f9ccefc7240"],["/page/18/index.html","8584c5f104a2086f82aff9cb8a82ef71"],["/page/19/index.html","8455a45ed4984e11d608a32882768fae"],["/page/2/index.html","a0eeeed0fe34487ddda3a026ffde9fb1"],["/page/20/index.html","c57829df3ef1a52ea656257fb5fddc52"],["/page/3/index.html","f4fcc5acc7591dca9917fc60eaabf63a"],["/page/4/index.html","3d92f5221a87d382da5dd92ee039cae3"],["/page/5/index.html","ec8dd70282fbb8fb3ce6de4cfb4507c8"],["/page/6/index.html","58b1d10d672e1170715489f3069aef87"],["/page/7/index.html","1eb0d5bcc43aafd16f91ff648e6cd7d3"],["/page/8/index.html","ca2a40d9a66a167cde892f235701dcce"],["/page/9/index.html","4795f5d7f3ad4cc308a0be0458c894e2"],["/sw-register.js","638152f63cf7024b716eb94097d10a05"],["/tags/CentOS/index.html","a17f149ed5f685ec9b1e71ab2c38a46c"],["/tags/Deployment/index.html","dba981c91b75375b6242a5b964758a82"],["/tags/Docker/index.html","66af028d8d9065d21ca44a6203124cf0"],["/tags/ELK/index.html","1f76ccc4debdc4d27fad5f13bd537ae7"],["/tags/Git/index.html","0600a44028db5adbbefbc7f3bacb2ce7"],["/tags/Hexo/index.html","218270a6b29e1b409f3082e4faa692a9"],["/tags/Jenkins/index.html","4f8dc1fdbc034e1add6edb1086b48a7c"],["/tags/K8S/index.html","024d724456598c48212e5b5b3d95c92b"],["/tags/Linux/index.html","4406f0716d481a7a360e1b754388e9d7"],["/tags/Markdown/index.html","043f3637ddbb61fa45265a9c90e22e6e"],["/tags/Python/index.html","e972efca34a382d9ed549db35c96ad97"],["/tags/index.html","a2df27c52337eb6e3bef5197763a65e8"],["/tags/java/index.html","a9b735a7daa306b64dd714ac81819a57"],["/tags/zabbix/index.html","c24570e006e2c1c34b7b96a8dc8f2e66"],["/tags/zabbix/page/2/index.html","f3d55f1911f1ff72ccd076399c685b58"],["/tags/工具/index.html","8ab71020f86501c4a0ed14f5a332369d"],["/tags/感悟/index.html","42b8893788892574e3731e557f76bcd1"],["/tags/日志/index.html","7a8e3a9ebc14953c2e8a445696468fce"],["/tags/架构/index.html","9ed409824e96203a3b32f984e569d9ad"],["/tags/阿里云/index.html","9fbcdc7eb0f8066db89cd5b0e1ebab89"],["/tags/随笔/index.html","e232164ff250920cebd437a6ce3dd78a"]];
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
