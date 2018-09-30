/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","a4b5d5a98ed63920952f717dea69594b"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","93d19e041b0c5304698f8e235868bfe4"],["/2015/01/20/如何整理个人资料/index.html","a8a0fa740c5dab6f8312bed8b6b0d677"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","ec7284a2daccc3df1fa5d0045980285d"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","8d196454999d7e65cfe2ce26b604137e"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","4b04624b4e8bd76f25650c1f784cef8c"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","2468af9268d702525e77795a4e9d6a89"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","1be258dc2436b5671a9cbf10f006e00c"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","b4269bb8b0a0080ad224b1bd6f127020"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","86cd7d7552eeebc7b4a35dac6465d4a8"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","8f65a963f9c208816e0deb253e366a4f"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","59ff4e7ebbbe141d5ce1437b39c244d0"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","1237c400a51a8c51423c8619b02f1cb9"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","6b794f31c0446e9817d8e5667c4d6280"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","2e70fd60287ecba757fa1b43fb002d5a"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","d810c5f122215ebacacd36936d804ec3"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","69f761b3377fcd2b3884081b0f2ce1ea"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","60771c7b43618f7a2790dbed2119d575"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","d7b389b3cd4d95a54bf904e75166f83a"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","aeb0c2db0ee446662ab30f09728c26b4"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","f4e51b3a67f05456431ee77263b75a77"],["/2016/11/27/Zabbix Web 邮件报警/index.html","0661fc53df8f1693e0c30175b80f859b"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","3bb16ecf01d0707dd39436885e09a565"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","53f9bc96291280d0c1a36a1b89995abf"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","9027637df2a25df9138ccde42cbd380d"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","a5fff5c6f778ce21827bad9335571684"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","487bb56e794148fcee199568fafb7ff6"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","5d7ff9a1cd21f308a1acd21eb817cda1"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","62af1ec44d1ad5a51c0bd8931cf53407"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","a61529bb2dbf2f67ecc8adf6e5c0d9e6"],["/2017/03/23/Jenkins 自动化部署上线/index.html","28de7622b0dfcdd64edce3a72139eb2e"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","616c72fec5cf38d6c9287a85528287ce"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","6e29e9dd2b07d6afd9bafc3d0bfdb088"],["/2018/04/10/Java-JVM/index.html","247d1e518b966cb648538cafe09c2b43"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","11d40f8c2d51ffb8bfb8e89d93b07b91"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","ff86733937a670a57ce9d7b24fba5d53"],["/2018/05/24/Python 3爬取百度经验数据/index.html","3e5c2a78f7a77e11fbbaa1d6506858b8"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","497e43010cc6ec0db17e73aebe07146c"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","d50000ba53056a048539d1f2f7af202a"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","8cf37143df27aaab2139a744af6da9ef"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","3aa87b551a5be4ec653096db861e0d3c"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","cbd609cfe7a202d71da9b237b26e6d9d"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","501d57d5890f16dbb53c84795dd48c81"],["/2018/09/29/Git使用教程/index.html","0ddb9f052d622f6c374f3f87ddf09bf3"],["/404.html","e8bc1cc59b3526f8d809cb61ea3fdcc6"],["/about/index.html","0aa1c59c489571e3874ac771d74ca793"],["/archives/2015/01/index.html","a650a0971ec464b9c2574eeba0521518"],["/archives/2015/02/index.html","c9160789c15afed242f6160fabbabbe2"],["/archives/2015/index.html","e2fc53ad268f5ec94cea6b1f584d2fa1"],["/archives/2016/10/index.html","19e40e25c7383294e94f67aa2655a7c3"],["/archives/2016/11/index.html","fb0a5be27da0982d2e23c76d343f398e"],["/archives/2016/12/index.html","84a8a208491f9b3f716eb80a242a9196"],["/archives/2016/index.html","04c6509809d453fbca33a54ba2b40f65"],["/archives/2016/page/2/index.html","9326b45fde58b9008bd01c0d6fc5b3f9"],["/archives/2017/03/index.html","c5763793ca66413beb011d1649f7074d"],["/archives/2017/07/index.html","34f9940460873a50bf85db0adb509e98"],["/archives/2017/index.html","d25373dc5f0b45e04e27cddcfa021465"],["/archives/2018/04/index.html","3f7a82cf1ea056e1eca67ade61c107b0"],["/archives/2018/05/index.html","0a9c8239a3dce677f6ae46d4950dc4a0"],["/archives/2018/06/index.html","c1330c6ce071e5ceef3268bb4cea3e04"],["/archives/2018/07/index.html","cc3c4dde434912cee07a89dcd5e892a4"],["/archives/2018/08/index.html","087930eb48ed233b916ef1cecb6d9144"],["/archives/2018/09/index.html","d512439824f5c666363f49869571ff62"],["/archives/2018/index.html","54521c83892ef2a4fecf147b4b516092"],["/archives/2018/page/2/index.html","1c2e595a73eb3ff472c1ea57fba13544"],["/archives/index.html","69f1ab32307f1b1cc61e1e4cc2062905"],["/archives/page/2/index.html","7e42a50e9c7acdcda8ada20188ac6988"],["/archives/page/3/index.html","6959f44b893db7dd72986fb71c3fe036"],["/archives/page/4/index.html","5f587df5b9bdaa88fa07dd61ad0ac872"],["/archives/page/5/index.html","a115f3638ed409031526c498b600a760"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ELK/index.html","f1df054c09486583117b4638666664e0"],["/categories/Git/index.html","5ede4bd4b59c7deb8a8004629366c10a"],["/categories/Hexo-Next/index.html","88bd9cc927849a6d63440f767784d34f"],["/categories/Hexo/index.html","1658333014ae6865360eef1ccd6e33ca"],["/categories/Jenkins/index.html","c9ba24a5523cd48b9a546f47393525be"],["/categories/Kubernetes/index.html","219521a5882a5762c18481300a86ba99"],["/categories/Python/index.html","ddb1a572027fbaf23a3d80a36ed256fc"],["/categories/index.html","40217233a663cfcde00d77c7504c6d06"],["/categories/java/index.html","d8948214681b51312f49f38b381d9791"],["/categories/zabbix/index.html","9673e06d3ec2048fa5a1e729d53b3e64"],["/categories/zabbix/page/2/index.html","3eed16bfde7982512f57ceec64d969f7"],["/categories/工具/index.html","fb5bb37a547722ea38bcd2981e9e2fff"],["/categories/技术工具/index.html","1f851b4fce11860cc8a7307bd971a376"],["/categories/服务器/index.html","c87520ab598100f0ff347a783c62a248"],["/categories/架构/index.html","2c9e8f7dd8d5786c3c5c842c4b6b27d2"],["/categories/阿里云/index.html","eaa5fc08a51cf504beb0c3e517c1f3d3"],["/categories/随笔/index.html","a04681592a0992231f54d2647c4288c9"],["/css/main.css","c6c772d21a96614162a6b0e3a226df32"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","aef9dd8feee615b05185791eed86a5bb"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","63caf24a8bdd2e63eb29688395ccfccb"],["/page/11/index.html","d2b7ed10f8c3bac24949a13a81c09aba"],["/page/12/index.html","e7361ce025c8d1c246b58019b9f890c7"],["/page/13/index.html","2a08e8e286f15b246e0af4851fce6768"],["/page/14/index.html","b11a816ce6211d359e8bbf732bdde726"],["/page/15/index.html","21771f700d35ad469122af6f82492eca"],["/page/2/index.html","cac8cece5e0c9e29e2d3776f62fc4e3a"],["/page/3/index.html","99b08d9789a5de539cb46899bdd5335a"],["/page/4/index.html","70b850aef87d443b0a07f4d05ef7505e"],["/page/5/index.html","da34bf548377d6804863b30fc6c5a66e"],["/page/6/index.html","751e4002a89798b0253c46da6d49cb30"],["/page/7/index.html","b92b8337ed082fca5b13185ef0963500"],["/page/8/index.html","1277b9fb351529e3eda20b9401d6dc18"],["/page/9/index.html","0c04212fc51845bc5a3f0bc603a36682"],["/sw-register.js","02e3f682e6421085180c73bfbde5e578"],["/tags/CentOS/index.html","c769bd9757cc598c7aff1fa51d48b7ad"],["/tags/ELK/index.html","7113f4cdec9455eaf9880108838433de"],["/tags/Git/index.html","8cbdc38b9e5cd1eb399f57b265ae4310"],["/tags/Hexo/index.html","50e739b4b912e0aa2c375437c63cff23"],["/tags/Jenkins/index.html","8cf4e52a215eb6159a9b5bd84562b528"],["/tags/K8S/index.html","8bb86d08b396546a9eca34f1be1c5462"],["/tags/Markdown/index.html","fa8811e5471636b1b838081edb3129f2"],["/tags/Python/index.html","ce4e5786465f280b6128b725e37935db"],["/tags/index.html","ba1dec8c66348f0a2691f3acdfc86cf2"],["/tags/java/index.html","39c465170d52b0f50e7a6a20c7e2babb"],["/tags/zabbix/index.html","9a6338633d47599d3eeafe402a95043f"],["/tags/zabbix/page/2/index.html","a260831b6828a77d1f7f509ba5ff49c9"],["/tags/工具/index.html","456300690e6c6675aedeb88c2574e376"],["/tags/感悟/index.html","9ea6b486d18d21df975372c363d612c2"],["/tags/架构/index.html","36235b4f4f0fa8bb9e10d69df6fc9bae"],["/tags/阿里云/index.html","207024f9f6ffae65a714415f61406a83"]];
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
