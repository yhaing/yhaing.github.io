/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","5ba8886734865f0ccc8f3ba6aa662303"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","9a9da3fceb0c0dfedfde1dd5fcbd828c"],["/2015/01/20/如何整理个人资料/index.html","77d54bd824b8dbc442274c234a38af52"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","579f82f3ca246025d0cae6d8493547eb"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","145c9e5c2bb9a643d350ca6afa8d7212"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","e322f7dc05316049cf00dc172170b415"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","01fe5fee50c6e050c59b0d61fb3da25d"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","3921f1d9c4bed38e1fe979f9126518a0"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","317463e596db8049df24815c3c87efb0"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","4ae007f8fb66710932733dd7a7fb6ae0"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","52bcc744964efeb8d3a13f225c51b76e"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","baeee7badc1a36108d6008b0fc80b695"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","396750ff05f0f6fb63736e634caad862"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","dfab1ebd74b65b45b18b95b4cb9e611e"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","5cf3fc681a0171793c5cea0d57d64bb5"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","848c8b5f8d5278e1dcc27b8961f6b751"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","60174462f1d33f7585f05f78f36990a8"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","d43a92db52b9ec52c770228faa714302"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","4a6dbb2666cbfa7f091513e808c8b30b"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","71137dd1e94393f6c16a08be64c47a6b"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","471df2d94e8a434de285c4715d2bbf8c"],["/2016/11/27/Zabbix Web 邮件报警/index.html","010f70b7c6c00ee285e7a9a1aee3f45a"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","7273c456c07a364b4240d27f41378279"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","583f8ddc80020e40be2ed22ca6d205e7"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","77b08ef62e20b1ee22b8da4f82a6abcd"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","38ddbc362bfd555e5fc72a9c8fe63164"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","2906f37960785b1b4428862c8680bd88"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","ca830351fa75e6565506859c3c72c275"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","621562cacb7b1e246a6142afa6de7d8f"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","e82c7076fe58c3a59f0c43a9c33c2797"],["/2017/03/23/Jenkins 自动化部署上线/index.html","984b1103187a92c8d4235a2271985d64"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","53336dcd4b7ccc7268be6af11d811fdf"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","f52958f98f62eef3e4192970c1e2b0c8"],["/2018/04/10/Java-JVM/index.html","ad5dad85f10cabb774f9926c06781ee5"],["/2018/04/15/蓝绿发布、滚动发布、灰度发布等部署方案对比与总结/index.html","9e7d9eb5347239f87c7908c6568e3af3"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","137eb93c30c3b56249656a277045dbb2"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","e0cf583e4d4a7310632256fc737c8c32"],["/2018/05/24/Python 3爬取百度经验数据/index.html","f0bb7a799e952f6f5f993a6b5c337a17"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","bc68c3590ecc8701ddc3ec7079e94e75"],["/2018/07/15/CentOS 7 安装最新版docker/index.html","d4ab492eb7a7631428677d7d7a6e9b2f"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","df7bce1e735b85964ea783ca161dfa6c"],["/2018/08/15/如何用9条命令在一分钟内检查Linux服务器性能？/index.html","d94a940a199d8cfb41eb4ad885cd318b"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","127df49431ee7810be48314eb8d125a4"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","ae4029c6d07d037d0131613d58df19cf"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","bb873d20c139cbfb5276f4c08c5b1d54"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","707f27b7f5e1d09eaa0250063c3f25c1"],["/2018/09/29/Git使用教程/index.html","271979c5bb44530a05f527754289a8fa"],["/404.html","3c3dbfb6e08eee5be0ec8816e07077c3"],["/about/index.html","6d0102d719147e910a58b2990332481c"],["/archives/2015/01/index.html","69cdb5a9e59f0fe408f35999dbaf0cbc"],["/archives/2015/02/index.html","84277d3c82f1414b7277ec551ed51062"],["/archives/2015/index.html","3893a51e5c95fcc29dcaeed68f593e89"],["/archives/2016/10/index.html","faa49dc32e2e437a4023f98bd960863c"],["/archives/2016/11/index.html","f14f577a66908a750649069357502f9b"],["/archives/2016/12/index.html","087c2020984548299b24436395bfafd5"],["/archives/2016/index.html","94b8c88660993af1a419a6225c9988e1"],["/archives/2016/page/2/index.html","a93c2df0126bd4aa37d84b21ea070586"],["/archives/2017/03/index.html","6c1b7c33570ee7c6063eea42e709ca03"],["/archives/2017/07/index.html","b8abfd2b2267866aa7e139d76d3502c5"],["/archives/2017/index.html","b20d2d59e4211bac72ba5292a7c38fc8"],["/archives/2018/04/index.html","c47ce47bbed8765563270382a8a2f835"],["/archives/2018/05/index.html","b87602f040b8cf8f5f922d1a17402589"],["/archives/2018/06/index.html","a54a36deb9ca2b05e37b6c8db23869f6"],["/archives/2018/07/index.html","4e71862a41e18246513ef65bb716049f"],["/archives/2018/08/index.html","3ca5ad3c05f5e0c5e35715741fe88a53"],["/archives/2018/09/index.html","21a7f33c75ce56a7b023351da01f7225"],["/archives/2018/index.html","8f415759bb7748efce35e24dd9f84180"],["/archives/2018/page/2/index.html","a5d7d3b87fdfb67b6b507f9484a178ac"],["/archives/index.html","82cdcdfa9ddc7ecadc89cb223ec6621b"],["/archives/page/2/index.html","d0c82e107e40548eeb523f7f01b41b0b"],["/archives/page/3/index.html","59938812317f129b972e6b5a904eb510"],["/archives/page/4/index.html","c36529132a86d3bbfb353b0e0794badf"],["/archives/page/5/index.html","e8e8d8394a5f7352e05496c7bdc0473f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Deployment/index.html","ee79853c6e2cc094e5d713c865fdcf78"],["/categories/Docker/index.html","c7ecb6bb062abd860637eecbb9bcd9a9"],["/categories/ELK/index.html","aa166df2fc96beef9564d9aa79857ca5"],["/categories/Git/index.html","c708ee8bf22b9ff8c5491149b49602d8"],["/categories/Hexo-Next/index.html","3b827fd007f488bd4be170a9358ecfed"],["/categories/Hexo/index.html","4327b82b7e00981665aad6ad825dbc1d"],["/categories/Jenkins/index.html","08a25275a8ac24e5032bf131a2f1b50a"],["/categories/Kubernetes/index.html","9da86413287c6221e82144c7e2fb33b8"],["/categories/Linux/index.html","7421b993d8fc7ac4bbceab58e02efea0"],["/categories/Python/index.html","b4e52af074f5a3673258298997de1779"],["/categories/index.html","2802e65546ad6d9c85b3ca018eb94f27"],["/categories/java/index.html","0418f0171f255363807fd605b0eb3a06"],["/categories/zabbix/index.html","cc03181cc7dd6bd6c09e8395dc1b2608"],["/categories/zabbix/page/2/index.html","51b5ff52be69b04c564c03f2d05bab78"],["/categories/工具/index.html","9b1f748d11639e9f8985ee9501cde847"],["/categories/技术工具/index.html","490fa91f6f2f6aede619c80d32758618"],["/categories/服务器/index.html","be695e505e27c4479d0b27d46a718dd6"],["/categories/架构/index.html","e542baba7653fd95fb7adfba88017232"],["/categories/阿里云/index.html","6d7a9b5065a8ad35aa804aef875db9cd"],["/categories/随笔/index.html","8cdb627e430e6d49401338c5d16c3664"],["/css/main.css","427676f75221e6dc97c17a6bb7963e1a"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","7c09bcaab50715eca473e39fd19e2471"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","71fdb7eee68fc7a2a435d486b6bedb4f"],["/page/11/index.html","b513ccadcf5ceea24b71e059d3cbaacb"],["/page/12/index.html","07987c24391b9ca41bd94753c0557c42"],["/page/13/index.html","a1954e4c7af7ec6430277e5464d730d8"],["/page/14/index.html","8db280e6632b131acf200d999e800c46"],["/page/15/index.html","ac7ab0d466ae1a842c35ac49be561c8f"],["/page/16/index.html","6182d28c862d42bdb6ba0c622e656897"],["/page/2/index.html","0b04a1e18949e41ce5fe796ee7f1bff5"],["/page/3/index.html","6fbf7b97a47daf884e9dab9a8b0fceb0"],["/page/4/index.html","458f45ab05dca574a2d1b01baa8ddb09"],["/page/5/index.html","18a2eec5f6705ad9b4155c56193ddaab"],["/page/6/index.html","ecd2ce4ef3ef9ae39f88b44c78b921c4"],["/page/7/index.html","7a4bf89f64cc5e0c4643e5095a61e79f"],["/page/8/index.html","841d0749cfc54e8269d32e969015ff56"],["/page/9/index.html","27b5d774fb893ce2ec745434fbc0d09d"],["/sw-register.js","325ee880567581e1ec81be07cb66f9d8"],["/tags/CentOS/index.html","a43f67f7e2151b1ddfc287291fd6b793"],["/tags/Deployment/index.html","43abdbfebc688b312c81a8ea3259af4f"],["/tags/Docker/index.html","f27bc9acf11fe20491db8f7d453b0775"],["/tags/ELK/index.html","46fbad62d6b962d77d2f4d8f7008f396"],["/tags/Git/index.html","5053a454feb03df76c54dcb2587123d3"],["/tags/Hexo/index.html","f442f1c2daf1972fe63b99413f29946e"],["/tags/Jenkins/index.html","a2fdc4299a6c1623cff0c05fea47fdb9"],["/tags/K8S/index.html","98c8ce81bd65cae2065105b10d161467"],["/tags/Linux/index.html","a11530e8c2c84e0db1c12d35a4b1bf96"],["/tags/Markdown/index.html","92225cf1be7db2e1672815223b78a0ef"],["/tags/Python/index.html","6d48be54f1c2bb0e7f0ca287aff4341b"],["/tags/index.html","fcbdd02c7b3db8af732a999ad0773c12"],["/tags/java/index.html","db3145fe8896736861c81e27df68c757"],["/tags/zabbix/index.html","45d18712f7b9aedf05b20dc23fa61322"],["/tags/zabbix/page/2/index.html","d55103bf6153fbe67031797a5edf0669"],["/tags/工具/index.html","642c435501aa757221422e2aa05d42c7"],["/tags/感悟/index.html","77036e0130e436b816691eacd1d381c1"],["/tags/架构/index.html","9c84faafecfc30c7012ebd0a63ee61c1"],["/tags/阿里云/index.html","9386d0c980eb99c9dc1f33202fc00ddc"]];
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
