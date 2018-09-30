/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","4487f18e70ca5dd1dbff9b0eb013a0ef"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","0c6032d45f905e7fb66d2b4732da1d08"],["/2015/01/20/如何整理个人资料/index.html","eb51e4594532f1e750b04f78d7264316"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","a493b82e48eeb744880cab5b35b711c7"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","733d47277fae228b9d914ea6a93f75f0"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","70dcedb86ad16b0631fcb639dc369e91"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","4e064f4555439d81ab14d691a14478e7"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","e91cab10ce880550b5fc5346af8b6583"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","be54545884bdd6bfa238b2a45265bb3f"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","d89ab9191b19710dd35c9d39d8b4eac1"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","02bcf6bd99657fe4f1be77ba7716c54d"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","65ddeea2e868944d80132f83b04cca31"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","28d122d455a2b2bea4ae6277ab669dbe"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","6b25bbb7eebff4bb0fb44cacc61650b9"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","16043df0e7854e9d6c185334c304099b"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","0b56f4a9db2b68bdd55f9323e432bfd9"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","8b5f02dac26bfff6f9f795b6bb220106"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","f2f4c7fb8fc2a394f6496bd2017beb85"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","a80da4c7758a7ab9fe18163798940d0f"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","f16fe701fb4df8fe0f1e55e9b4c8b2a9"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","83a4cf26979eec48027e9bd2b42118cf"],["/2016/11/27/Zabbix Web 邮件报警/index.html","89b54e8b17a810110de1ac2786acdb34"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","f820de32a80d79e19689baef813a5508"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","967bf683e7ce3772b6f4d70d7ad965d7"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","a7ee6bd9901e0dc0f3b66aaab2a5ee86"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","cd95d6c0cf9e21d5a106c84922fbe7ac"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","8412826f3f6f2f93f6ed2ac045c53021"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","38a1c8275050770149cba8a334bb723e"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","458854265af072a85cfff8019e4b0230"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","ce31499dae14fd05019a75626fbd8bdf"],["/2017/03/23/Jenkins 自动化部署上线/index.html","2f7bef9aa4b8d3c76f3463fe4ee34e52"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","4f247da5917fb6b1b0e47550718050cf"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","48d388996a41f24ff14d2af646dcfba3"],["/2018/04/10/Java-JVM/index.html","5e523d3a673802e76e63ac41657f2a00"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","6cca172a411a148120a1ec19f0c39ca9"],["/2018/05/24/Python 3爬取百度经验数据/index.html","731975d77f89ab0a75de1a16a131b88f"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","4e9cd063a4cf70660206ff50055aa131"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","c41b5ed4d2b1be379ec2717269a855df"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","ae976eec2c05950161db3b49cc23e9be"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","54acb307a209089fd0cb4dd3a9ed9289"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","205a8458a3b5fcc167aee8e951a05d9f"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","9b895b841d6d43b7978f7dd024061a94"],["/2018/09/29/Git使用教程/index.html","aa5a6da9c9ae40ae89f98e77a0b13c43"],["/404.html","dbd778d4ec615132bed9bcfe227e5fbb"],["/about/index.html","76a475b401a698afdec0c4bc791468f2"],["/archives/2015/01/index.html","ef064eaf5d157ec0042d645ffbf24868"],["/archives/2015/02/index.html","30a2f0ad0b6bf9058957249d7882aa11"],["/archives/2015/index.html","45ad7412e76f5101d2b9a3d8d766356e"],["/archives/2016/10/index.html","4fb6e471bf703764b0d5cefabd552578"],["/archives/2016/11/index.html","233158da8104c73fbce3b8b28233f2b1"],["/archives/2016/12/index.html","cee5e3daade7f2a15ef671415e61692b"],["/archives/2016/index.html","9122a09c3a3b71e8147ca3c4534c6673"],["/archives/2016/page/2/index.html","4e19d6e50c25660d303bcba8fe1d5343"],["/archives/2017/03/index.html","942516801e45569d25ef19109b42c351"],["/archives/2017/07/index.html","09f1cbeb58241ea7dfd3145894d058f2"],["/archives/2017/index.html","14338517946a58123ad5a9865b8b2ada"],["/archives/2018/04/index.html","37835f2b1df9a689c30674d79f17916a"],["/archives/2018/05/index.html","f0f71ee1ee9f77126b6e799f89b037a1"],["/archives/2018/06/index.html","c9a66522e2d96f298631dca62c7ab24c"],["/archives/2018/07/index.html","1494d97c7e545277951b3ec96939b84c"],["/archives/2018/08/index.html","3cbaeaee0159925fc24a76fce3fae76f"],["/archives/2018/09/index.html","5e43ec8b1ae558b72567e35788f19e14"],["/archives/2018/index.html","4e2d0244beefec37ec698ca9123a6ff7"],["/archives/index.html","a15194b224482d02bf2c071d4020e666"],["/archives/page/2/index.html","a3969f919b9cde7a7641cf1ffec6e8b3"],["/archives/page/3/index.html","2808864cd263f19e2587c88ababef773"],["/archives/page/4/index.html","0da14f53baa77f1f37bb673fc6f30915"],["/archives/page/5/index.html","d68190b96954eb2719ad4b4810aa6921"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ELK/index.html","9767df06ba12f0b8e9730ff52f854dde"],["/categories/Git/index.html","16ff2f5c391528b3ec93b6fc8e22e47e"],["/categories/Hexo-Next/index.html","52e87f06efd064a98088e87609bf45b7"],["/categories/Hexo/index.html","cfa6ab02142638978c5bda654f1ccd5e"],["/categories/Jenkins/index.html","ca0cbaa8e3e456a1a5624d435603e428"],["/categories/Kubernetes/index.html","c0b696a3c2197a4a1bd9adcdf61a9e82"],["/categories/Python/index.html","2e0b0e3b829e02361ca56c0a2090ab10"],["/categories/index.html","bd09eb454ba3e159d44ebd03fcfb8cb5"],["/categories/java/index.html","03ffd22caac824a128a454af7f613518"],["/categories/zabbix/index.html","ba12d088a5c2d339eff41d7a7e8ee5e6"],["/categories/zabbix/page/2/index.html","8640d4712d135fc262caf826b2c559af"],["/categories/工具/index.html","484408dcb83a1ab6cfd28458183432bb"],["/categories/技术工具/index.html","2d828caa3f5a555fb800f470f5eb160b"],["/categories/服务器/index.html","e09141562cdac0b1f37dc563fd585114"],["/categories/架构/index.html","42b6f922165ebca2beaaafab6d2b4f03"],["/categories/阿里云/index.html","d2ef386ea0f34daf9aad6b5aca375a98"],["/categories/随笔/index.html","94643c2bba4a1c993c33bed80f21d41d"],["/css/main.css","d5809a007d324a2b773a9b03d5ae55a1"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","874d4fc4208fd1a2ca48cd9b1d559873"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","2dbb6e0172dc5f88c254d5a3e4c4e753"],["/page/11/index.html","102a8f10139aa570cc11b8039bc2ccbb"],["/page/12/index.html","44a3c15109566b57fd7e57da4288fbcc"],["/page/13/index.html","8bdbfa06696ff91854e15197d0a307e2"],["/page/14/index.html","e19258f039cee4523e97bd4b6139189c"],["/page/15/index.html","5208e5153fb0d9ae42b08cc3f65e01ec"],["/page/2/index.html","51110ab1f8828a77a21d379318c0385c"],["/page/3/index.html","844c4eefd33968aa77a7d9f2d38b7a70"],["/page/4/index.html","03fa4501a470cb4e035a8954ae1dbdeb"],["/page/5/index.html","f544de52537710a7bd1f5f4b95f066a3"],["/page/6/index.html","e70a3afa38c0c746b3bf1c9c07c9ce00"],["/page/7/index.html","ca581121224f87a032490f5cf6c548cb"],["/page/8/index.html","8229416951bbaba59c2f08502ea4d12c"],["/page/9/index.html","f5e8a0204474403ae3cebd556f3ccd34"],["/sw-register.js","0b0551331378845432df6947d1b7e476"],["/tags/CentOS/index.html","a82d5e5fb6f23a2f1e1963e2b325c042"],["/tags/ELK/index.html","75f90f6f223fd82771599ac8e62db7b6"],["/tags/Git/index.html","77c37664c5e9904dcc0a5cfce602bdd3"],["/tags/Hexo/index.html","06ef2b68ff277e9fe10004da90142ab0"],["/tags/Jenkins/index.html","a1858a128b90c1bb19e1f3f53b101d42"],["/tags/K8S/index.html","37a6490bc753483949897724cd5a4b74"],["/tags/Markdown/index.html","3c6d0df1eb8dd283dfd39dfd1a7fb3e8"],["/tags/Python/index.html","bd1a2ee6d5334f5bafe97b4bf3ddfd15"],["/tags/index.html","0d672aa3c2a54dd8aa7a453f3c7dbe6f"],["/tags/java/index.html","b9631dba9923cba43f3a82b1c9ed53e2"],["/tags/zabbix/index.html","58ffc3be6500e43023e7ba3157315c01"],["/tags/zabbix/page/2/index.html","1a42d1ecd7eca0b2761a9f005cc6b9a4"],["/tags/工具/index.html","2f98f683194738b0d29b5c7641daae57"],["/tags/感悟/index.html","f887c4026996a709a4ed9f5c092d0e5b"],["/tags/架构/index.html","dbdbfc7bb18c02d4c9bf175d71916ef0"],["/tags/阿里云/index.html","ca715a83f9c6e205d9e010361649e068"]];
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
