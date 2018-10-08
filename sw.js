/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","93b8e595a89e38c1e511ed7d886c8ea4"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","4d55a8600aa23607b3e639640a431616"],["/2015/01/20/如何整理个人资料/index.html","edafbf745974bd39e683fdb0d38560ff"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","b69c186f15552e880c170a42e6141a91"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","55b875cb6609e47b01491a741de07aee"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","e635ae29fd5cfff5f8eaafc17695069f"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","fe2ea98bdeed7177b55173f032a98358"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","f211253d83a295e7899ee81bf8914755"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","f4f730c4e03b52b08e489c2db3ad06be"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","f70406eae3ba50947dfc03d743f020cd"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","f3c22d3d144110a5f71b172bcadffa3f"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","3e7bf434f4aa5e57a9bf8d20b045447a"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","f95a3386f4fede0b3741ac4ab9df668c"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","86279656bf9a92c2aeddeb54382f1668"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","89f324a229d0ff0f186ebf7d0e25f0f9"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","88f123d7e4f897d1f190207f8b8b55cd"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","7b560f4e6fe3f6f956452363c87292d8"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","428a7d4e8c2e93038838b2f7d1e15449"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","ab1f1501473fc01d5fb8ec77c367d0bc"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","eda41e6de53e73b3e4fcfb9fe8fe092f"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","2484c16e744e8af943d9ff5f069c180e"],["/2016/11/27/Zabbix Web 邮件报警/index.html","a87bf60024204d126937fe0391566bfd"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","07459c79078819bb6b5539543222323f"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","ffb7599bac6a314c831419ceb0696bd1"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","361828560015d847bb31f47a70a8d2ad"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","92ce16d5d3595f1aad36adfacdecd2a2"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","2e26989071df56c675b63f73f783cd4b"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","17bddd28b330d9e2b4f3b1ba4996a798"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","cfc8f1047f8a136ae1a7a23144305186"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","d19fe1942e0169cdcee541292492854b"],["/2017/03/23/Jenkins 自动化部署上线/index.html","b1fafd8a553ef073f0e9e9f5dce1fe78"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","141fbaf328c415fe039ca64af180dc31"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","fec264621ff328b6f44e6278cb4538bd"],["/2018/04/10/Java-JVM/index.html","c09b24bcdbb30efc60a664a248608934"],["/2018/04/15/蓝绿发布、滚动发布、灰度发布等部署方案对比与总结/index.html","87d4f038ebc63745740ed60a4e8a9ee3"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","cb6b149becfe3901e8364d53cde0836d"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","59463b737460d8045c6f87e7fcc7ae01"],["/2018/05/19/一起学Docker（一）-初识/index.html","df82c19fe2228a1f52910f73722c56c9"],["/2018/05/20/一起学Docker（二）--核心概念和安装/index.html","a064f822cc049b8b9683203a7f01fffd"],["/2018/05/21/一起学Docker（三）--镜像的常用操作/index.html","3d167fc655881a9cd374660672a99e47"],["/2018/05/21/一起学Docker（四）--容器的常用操作/index.html","3afcbdcc8cba06d6e31ca3e9ce19a1b2"],["/2018/05/22/Docker集中化web界面管理平台-Shipyard部署记录/index.html","96e4e436492cf089ddb20833c1c88bb5"],["/2018/05/22/一起学Docker（五）--仓库/index.html","d0f686ed0421c4fff84e2f78b58ef5bb"],["/2018/05/24/Python 3爬取百度经验数据/index.html","ac69e35a19381e4dd2d281306f05e34b"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","e31cd6623bd0f28ce24a8804f92520ba"],["/2018/07/15/CentOS 7 安装最新版docker/index.html","7529744115f77bfdf4a6c64f862662d2"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","be58c4ec2ce65854587bfcbb74cb3aaa"],["/2018/08/15/如何用9条命令在一分钟内检查Linux服务器性能？/index.html","3fceaa7f1d12db43763c6c4740d3291f"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","68773c021949141aa7a69eb3671e5a65"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","9b5ca32c52b97044b106b57d6a4c512a"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","727bf92ceff8aa4ae40b0b68f95a7f51"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","0391f67443acee72e1e615ab5d837523"],["/2018/09/29/Git使用教程/index.html","c7cce33ec10b28d5fc39e031cb95c4cf"],["/2018/10/01/DevOps 漫谈：选择基础设施部署和配置管理工具/index.html","08c3a616c033daab24f6f99188677821"],["/2018/10/02/详解日志的5个级别/index.html","f9fd3d89c0be545c23ecd42273e840a5"],["/2018/10/05/毁掉一个年轻人最好的方式，就是让他成为多面手/index.html","43b1442741fb7ecff47a95b5a884a047"],["/404.html","410f3df745ffc50e9e5df74ee065df63"],["/about/index.html","f573c4175e7cf03e6d31dc7418c4baa7"],["/archives/2015/01/index.html","449eebd7496d13d49973a3f5d474a8c0"],["/archives/2015/02/index.html","11e5feabbf1c35ad3c91fdc192c3f03d"],["/archives/2015/index.html","3e137954b8e639ea162097335aec254b"],["/archives/2016/10/index.html","23304fc2a107129a42e25f21f4982f08"],["/archives/2016/11/index.html","6168c7ce02685f3a9d02210ccd6e0487"],["/archives/2016/12/index.html","3b52c02bd1d9c432c7841f10b1fc4a07"],["/archives/2016/index.html","2a56555de68d34be2a098dc58a4eba3f"],["/archives/2016/page/2/index.html","a1be8ca23da9ea25683432f39cf1ed6c"],["/archives/2017/03/index.html","8ada891808ee709a2c28868e11dca0cd"],["/archives/2017/07/index.html","fd0eb08b9bd3b331c45b32f2d84fcbc7"],["/archives/2017/index.html","61d82893db9e2ea484afc1a7da334442"],["/archives/2018/04/index.html","4d9f2704975d336fd7b0c97c49403cca"],["/archives/2018/05/index.html","d9191ad604aba2f6e02362ff81ba95ee"],["/archives/2018/06/index.html","50f6b567394049d51cefa6bebfdf1299"],["/archives/2018/07/index.html","27576534735b8cd655feb2f695924706"],["/archives/2018/08/index.html","d46c80471dc3bef5ea3299562035f93e"],["/archives/2018/09/index.html","28cd0c376361034fe01b08c49fc26e23"],["/archives/2018/10/index.html","69ccc6a397b94a13163fb72c5c527e69"],["/archives/2018/index.html","6d7b0bce22139398ce1fac361d08a17c"],["/archives/2018/page/2/index.html","6589d040a2e8a143c50ed7bdb859b627"],["/archives/2018/page/3/index.html","4163e9a108631e59cee9326e09fb70b4"],["/archives/index.html","747947a6d8ba7c4effe19b58e2a1044a"],["/archives/page/2/index.html","bab6111904ca9fd6a046ad43d57d79bf"],["/archives/page/3/index.html","0c0936b236be24adc8dd2e685cc80d87"],["/archives/page/4/index.html","05df39cbab056c0f5a6bf85bd14f6333"],["/archives/page/5/index.html","c91c308aa407621cd6448494ef01abe8"],["/archives/page/6/index.html","0a8bfd5a899d980ae8b78e56282a15a6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Deployment/index.html","a44006f09e7df573bf99278688c47718"],["/categories/Docker/index.html","96d4b639a1389225ad37fb4f27e4239d"],["/categories/ELK/index.html","00f43565159c6b7fba362d245fdbaac4"],["/categories/Git/index.html","55428d6496a056c235d075e87a127130"],["/categories/Hexo-Next/index.html","475abb88bda25229b1ff0d667e35e8a3"],["/categories/Hexo/index.html","5f739f81b42346c478918d3509810347"],["/categories/Jenkins/index.html","d69b948cdcb9320a00ca9cacca9b8458"],["/categories/Kubernetes/index.html","691cb943e9548b97390c4154a9b661a7"],["/categories/Linux/index.html","bdbebe35e27a2cbcf6807d2b325c8680"],["/categories/Python/index.html","b968226505b170607ed85932a0baf04c"],["/categories/index.html","fe1b1db8e9eb167ad6091d820b59703b"],["/categories/java/index.html","b571cf87ca911cf6303c320752c1307c"],["/categories/zabbix/index.html","9dade4603f9b6f55e26acdcbe5e0de07"],["/categories/zabbix/page/2/index.html","aab120ef9d7f0e32e811f585db447fd8"],["/categories/工具/index.html","b8a8f0564e7c93858c1ee8fad79c1231"],["/categories/技术工具/index.html","5e00daa372890856ea5fd1478f3e6b9a"],["/categories/日志/index.html","a6230575c73c7fe3dfb33bf7dc3df6d5"],["/categories/服务器/index.html","6eca7e9b242e65ef05f37a578191c900"],["/categories/架构/index.html","0c601ab2078c351752aae3a260e833aa"],["/categories/阿里云/index.html","a4cc828c68d0e8ae770ca287c49f46c4"],["/categories/随笔/index.html","19713b6632c0e5ac4413450fe49b576e"],["/css/main.css","d4df10c044c1010c2eff74c429196e6e"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","94af127cd535a2e65f4b73f2d7d18e6d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","08be078f6e7d1924623572a6ea9b68d8"],["/page/11/index.html","d0b257fd131b81900e9a836cdd9617cc"],["/page/12/index.html","1ff972e4f4612c366550d9b869b3cf8c"],["/page/13/index.html","b084b4550c514fcf8c75fe0414966b3f"],["/page/14/index.html","b9c7f22877570119fd3d49f829d4b5cf"],["/page/15/index.html","bfb3c8b77dfed993c0f79ac5fdac26b8"],["/page/16/index.html","a7a733f934fc10486fc3812584c9f6cb"],["/page/17/index.html","7ff5588005794be5119839b4f9f06ec9"],["/page/18/index.html","eb1d744d3fd4d65d7cf285f208a9484a"],["/page/19/index.html","116ca9056e6ec36536535d634b7698de"],["/page/2/index.html","eaf121513b082720a42ec0ba97072746"],["/page/3/index.html","46c41dd9cc83e84cdec705fc514034c4"],["/page/4/index.html","723b50c9a899ee3607085f81f26fdbad"],["/page/5/index.html","ef50916cc437471e58eb67e89d30ce92"],["/page/6/index.html","280b100e1fb306e76fb17f7f37e984a1"],["/page/7/index.html","96f721a2fe20e7b6bfe4af29da43afea"],["/page/8/index.html","ffbf362ca58268e95f77a48721972901"],["/page/9/index.html","2566d32571ca2145350fa583df73ea85"],["/sw-register.js","c03e89d0fe05609a126d221f8e3b1055"],["/tags/CentOS/index.html","70205e9e0f24104a75cd0a429ce1095d"],["/tags/Deployment/index.html","0569520f1f5d0f399a0288bdc902cd03"],["/tags/Docker/index.html","4009c5b104d4b3085809b034c0da5e38"],["/tags/ELK/index.html","a82091266e3ff679f69310f49e956e4d"],["/tags/Git/index.html","daf2b03155d70022416c62797b8f3abd"],["/tags/Hexo/index.html","b0f8c1052abbb3a5601dc260513552af"],["/tags/Jenkins/index.html","9833a9afde50586b99bc84cab2b4cf65"],["/tags/K8S/index.html","8f33096e59febc4130641b8dfa69cc22"],["/tags/Linux/index.html","0453346dea0dcee9308a860d394e9732"],["/tags/Markdown/index.html","ae6282e91ac435908252bd21bb278417"],["/tags/Python/index.html","cc363ad3dd818bc356249798a36e5bb0"],["/tags/index.html","0c85847ce9ae139d510d170c6d5cfc90"],["/tags/java/index.html","d42d44796559b5d2919b49183e91ad86"],["/tags/zabbix/index.html","e6042d14bc082afbe90947125715b913"],["/tags/zabbix/page/2/index.html","cd1c579bbf66cfb59358737ca907e296"],["/tags/工具/index.html","a9501ce09a7f6fd0b0cf4af12e3f4b93"],["/tags/感悟/index.html","518fde6b902f761c5174c8d903e324bf"],["/tags/日志/index.html","10d9ea934ff80419a8ca1cc3998fa21d"],["/tags/架构/index.html","eef6cce21e5675d86911c558e55c01ef"],["/tags/阿里云/index.html","5aa2664fe46bdb86e8fe74abc24d49ea"],["/tags/随笔/index.html","b13d35e3b63209a9a50abb6e88bca2f1"]];
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
