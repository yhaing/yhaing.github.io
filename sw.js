/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","fd5f6aee213aa6f84322fcf26d085717"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","0f4d15ee65f53ba94431cae7157cd532"],["/2015/01/20/如何整理个人资料/index.html","329d92d65d9918cf906fb22af14fe18d"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","7aba8d04179dddd4344462662e404dda"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","03cf6d724fda1433b6c21cda60614ef9"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","06c0820c9f121c208122b40b0e505431"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","2e22308c4355c733e146a2c461fd2c53"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","4483f6f7e735e3ec8103828f4770a920"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","1427ed3c27712f2a2f6707e777e03806"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","989d24a2a0d6c9d1d9858b99a65e3e31"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","740d0fe0000b4b04f72bf9d25fb61e2d"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","50c20c904566389c80689761aca331bd"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","720b683293a5c4a81ab471c4e5f8e433"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","cbe98c8f739113100571877a34f1c1cd"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","ab81c0be6eedcfbed548768226dd666e"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","16b539c11b343950e2e601c604c1f74a"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","e1a5f739471d851d178c337cfebeb35e"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","d58b839b3f50ca6dffb921bfaa8f8822"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","7fd19df3c2d5e9de9fbf463f2da8ccac"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","820f5737cfe4c5a168137afe53c9a0b5"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","ae6a89d3e09e66bf33d6f0c6daa51ff0"],["/2016/11/27/Zabbix Web 邮件报警/index.html","3bd8cfe3a2ca8ea2273b1c151d0579d4"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","0fd7e0c3615e211c2030f8300388a9d5"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","7f9fbaa0f10759cee49a967a82d8ecf6"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","8343929891c8f2a1b35d3340e5e0696d"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","e5c1fadb70cd46126a43a28d4302e1c5"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","908fe111a1cb23f11c0c6e0c4d7f214a"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","e3213a25f6ba92fa1a75612f582da4f3"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","54494e3048ff003c33dd986b083bf9ea"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","dfe8bbcf201adea1bb96cdaaa3f2f9fc"],["/2017/03/23/Jenkins 自动化部署上线/index.html","44a99e84e01894586a8c16ebb1eb1db4"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","525a73a2ad32cc03de241510c588fcdc"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","ba7bdc1a15ef45f1fc252bf5720a471e"],["/2018/04/10/Java-JVM/index.html","817839b3523e7914ee7f0f8a86edcec5"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","0d300ddb56fcfec7421ffe647d089430"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","8136a5bb7df21263f50c54f7851cdf97"],["/2018/05/24/Python 3爬取百度经验数据/index.html","317bef43e59b93005d641c5be090cd17"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","be02adc305b74b334ba0be53bd389689"],["/2018/07/15/CentOS 7 安装最新版docker/index.html","ce25ccc7748444aa6d2036f22f250c18"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","4877f4cab09ceab4e5f34eb1410ddbc7"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","13a3f010b72b5a57cf8c9925c5247b16"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","2fe11fbf4bbf4740478cc7c99126be63"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","4071a84b8f6bbd4ff355b6f3ca5b1273"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","6508cd8660e8ad7733edde18b63fe643"],["/2018/09/29/Git使用教程/index.html","140f92eaecbd25772b12c6b9a7afb4d7"],["/404.html","1edcd7fe11d1416e6dbd386bf628fa3d"],["/about/index.html","ee720147fd2de6056b72f9af90c81a2b"],["/archives/2015/01/index.html","7ef1258b3bf7d913fbd556b429f2d315"],["/archives/2015/02/index.html","1c4ef099be58848babf08324dd7257f5"],["/archives/2015/index.html","fb5e33e61af04cdc8ac051347b1ed297"],["/archives/2016/10/index.html","5352024ba860977329ae94489f170272"],["/archives/2016/11/index.html","1c356d1ec37301d0ab73b4fcf1ac904e"],["/archives/2016/12/index.html","44fffe412fdbaa426a6d217517581510"],["/archives/2016/index.html","afadd5990b79bc08f843a89ed27e9fa3"],["/archives/2016/page/2/index.html","866e9451f26a37861d1bab2ecde5d9f9"],["/archives/2017/03/index.html","df35fcd4f49e9d078ea3da68980a0917"],["/archives/2017/07/index.html","b138f3336b5ca8ddb58721f1c733d114"],["/archives/2017/index.html","4fa50a1ac8b178411ee2aed5e620a7db"],["/archives/2018/04/index.html","cab9f795c544dc5aa12a4e003b199877"],["/archives/2018/05/index.html","dc8190709b33b5de96fafe9b3339049e"],["/archives/2018/06/index.html","8f854cfea6223081f817fefaf0c2d815"],["/archives/2018/07/index.html","8f294a52fd97b6601269c4e8e87318bf"],["/archives/2018/08/index.html","b17212fb7c3128ea0fe07deaf9a78023"],["/archives/2018/09/index.html","f21f7694abcc930829c79222a7228125"],["/archives/2018/index.html","b2fa3690e3824bd7dc58294553fcacd4"],["/archives/2018/page/2/index.html","030963e0da858badd0d9558c10aabb54"],["/archives/index.html","ec8e999605c8c7161c9abe876be05c8f"],["/archives/page/2/index.html","104770773403edd57f8a7e67f3789b20"],["/archives/page/3/index.html","32426e1f3d1b837f1c00e1b705970e88"],["/archives/page/4/index.html","c6e49e8da93e1d1200f9cca9ce7eb393"],["/archives/page/5/index.html","1b1d9e475129581a20d09ad640dd08c5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Docker/index.html","14b94de77197043a989bf3956c69fc45"],["/categories/ELK/index.html","5f59ee59be06a8001a561e285d421ff9"],["/categories/Git/index.html","2c3a7f3ed3fc59a248e6a6b38183701f"],["/categories/Hexo-Next/index.html","ab3472329517a267ae795ff3026e1f64"],["/categories/Hexo/index.html","8fb8dc0030fcabe1b5747e4d02b33483"],["/categories/Jenkins/index.html","ad6d586f73ae3e68cefdb0bbb5c4c808"],["/categories/Kubernetes/index.html","f12cdbc3e5a5af768817b8bf2e8bdec0"],["/categories/Python/index.html","060eabe6ac9ad89200003be8187297c0"],["/categories/index.html","833a518d403199e75a19cf579d45462b"],["/categories/java/index.html","076168852330322c3dec71784c00fb71"],["/categories/zabbix/index.html","dd443d7d13995ffaaea34ed2e9dff50c"],["/categories/zabbix/page/2/index.html","9cec0a5510528e4670bc7048ab7f996d"],["/categories/工具/index.html","6a704c01efa348141e38a0c4aa65ff28"],["/categories/技术工具/index.html","ed351580deb0111df8b69b70b65fccd0"],["/categories/服务器/index.html","3ecdc6a3f6d7fa5ccc3c6a5f862af9dc"],["/categories/架构/index.html","c6f3fb482df94c583e9b61a204ffb595"],["/categories/阿里云/index.html","daf22c165036b4c4367e48e71be0efe6"],["/categories/随笔/index.html","3081f6a40e3d14feaf3f680fe16b6470"],["/css/main.css","2fc69a76e9458c80413beee2cc8a86b0"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","837e7c6d2959cd29b3b5e9044169b098"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","c00de6a5fecad0a9048bd3e5542d723d"],["/page/11/index.html","59dfcdc77bdf91cef3725013b919dc03"],["/page/12/index.html","9478629d894040e89b529af1b2a4263c"],["/page/13/index.html","42533c7c06078076358f87aa9decbccf"],["/page/14/index.html","531f3ffa293e6a1945422ce279244704"],["/page/15/index.html","544b0a5843ecbc8467c95fdf55164352"],["/page/2/index.html","05f45771784b8ca95b8f0df80b28c802"],["/page/3/index.html","e9b07cb7ec6a38f6dcf2f4ca55d120dc"],["/page/4/index.html","7b514cf24ca662fce55cdb20330ac726"],["/page/5/index.html","ee10221effe55116e64e4f3c1dc1dac5"],["/page/6/index.html","ae8e1fc9e8c6703c9e9ac65aa30d553a"],["/page/7/index.html","4d761f0699695040d60cb5a01f50b653"],["/page/8/index.html","9d070f21558b5112f28d92f39874097d"],["/page/9/index.html","b86ae351794a19fa50672f7f7324c629"],["/sw-register.js","b8b44e5daf3f8d2ef4d642e55ccd3872"],["/tags/CentOS/index.html","f59636783a94dd0cc945772e4e3758e0"],["/tags/Docker/index.html","65086508cba91d8a953694288c20c9a8"],["/tags/ELK/index.html","a144c05b38dfdef77280eecd303de094"],["/tags/Git/index.html","d2e459a76967531b620c87dca84c53a7"],["/tags/Hexo/index.html","764231087d0d8ff3435552100e819c16"],["/tags/Jenkins/index.html","85509dc95044ab99d633a10765f891c3"],["/tags/K8S/index.html","6ca4dff1c0e3670affcdf9bc8b3e0292"],["/tags/Markdown/index.html","9f9ac8bcb7334a3edfd1332cf286f486"],["/tags/Python/index.html","9cbf0b016784c239142d706f418191f8"],["/tags/index.html","6119958a98b9a7aa48172485f0ae3d31"],["/tags/java/index.html","0ac650fb92b8e0985425dd6d40a67d85"],["/tags/zabbix/index.html","672bc61f8eaaa1953b8860ad9fecd14b"],["/tags/zabbix/page/2/index.html","e61bd9c813a15b584aee4aca26ca4c63"],["/tags/工具/index.html","deba4db137388b906a1ea3cec8643c0f"],["/tags/感悟/index.html","4ed9f76c744cbf365cf7fec49181e115"],["/tags/架构/index.html","0d6fa9de9e7ded5ebe20d1a407564fa1"],["/tags/阿里云/index.html","4ef0b418f56452cd54a4b2b7ad652aaf"]];
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
