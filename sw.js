/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","6c0e1d83d35f31e93787b1205f13c9a5"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","e76c889a92cea3d0cd1b12d3e54012ca"],["/2015/01/20/如何整理个人资料/index.html","54ae94f40c89df7e1cd3a7ab0362b30f"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","6508b2add09d3783639268bcd4fc0fe9"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","b34ee474af40589d512c888e1326a153"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","91e895d7ba048dcc6f5d6582c8b62f13"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","aa05bc831d6d25b32217ed105d520769"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","cdd6d767b72491c5eabdea5c98fc09ce"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","3b55e115af5db8b1645c66dc9fa73f2c"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","fb16a72fd9ed21f5e708492b5de4f453"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","af2ab556a6e736890f95f6507ee90379"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","1b44ad1214860f8cbfa1c11cf880c4f4"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","b6be369697c6cb96af923c7edf06319f"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","f89c2309a56ec1664452e114fe114179"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","b982fe5ea5f57d04f3f6e50d844426d1"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","b0ff5b440724437be882f2ecc503d7e7"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","c8303040760ecb83df8f9726018139c1"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","1f4a4c1f4fc3d74f74cea1dc8d29e7ef"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","8f3b2f741e5be06dc669d3e15a351c4f"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","00337d4d774b2d58c3b702807690220c"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","d01c4197cb217feb9f51ee40ddd530c1"],["/2016/11/27/Zabbix Web 邮件报警/index.html","314265585c5d72c53c62efd26ffcb88b"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","0b55103cbfa5fa154222ecb1843581cb"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","37da631962e689ef31b80435dd1c1f91"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","86f69daadf9b6708f3a8c8590222e7fd"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","787dfef2d2ef03be3aa4a52d99e7a814"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","def3cea022b12efba6e68e68c9f6c63f"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","2d03dc361f9916cd24e32c46da9ffd51"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","54353d2d33e716aaee3d66d8036da976"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","caa656727d78979cfbe34b8a2a102516"],["/2017/03/23/Jenkins 自动化部署上线/index.html","566134263ca1f7e6411abfbadf5c48a3"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","642c02dedc0afe9c6123152a3a38326d"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","f8ed81e5eb6188c8999e18916f00da65"],["/2018/04/10/Java-JVM/index.html","fb9398c3f9af2d2e44170426455869c1"],["/2018/04/15/蓝绿发布、滚动发布、灰度发布等部署方案对比与总结/index.html","bf13cb85f3b64772da43bccfb9414c4d"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","810815fa9bf2d3ce2c12585bb167e82d"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","9c5a734221feb15a86ea6889cc264633"],["/2018/05/19/一起学Docker（一）-初识/index.html","dff27c801a09c4774a3210e1762bea82"],["/2018/05/20/一起学Docker（二）--核心概念和安装/index.html","e54f22b19cba5152dee1d5e36a694243"],["/2018/05/21/一起学Docker（三）--镜像的常用操作/index.html","270b0454bd31a25e9f5f2f12d1395d2d"],["/2018/05/21/一起学Docker（四）--容器的常用操作/index.html","07e1c70ceb8d7962935e82bc4a5c3fbb"],["/2018/05/22/Docker集中化web界面管理平台-Shipyard部署记录/index.html","3951e7a22405b0605170d7dfdc3f9d87"],["/2018/05/22/一起学Docker（五）--仓库/index.html","0ea3269e81004f02b3fa27ad1158f98f"],["/2018/05/23/一起学Docker（六）--数据管理/index.html","838975e49ebd5b9aa7045b2e250dfa95"],["/2018/05/24/Python 3爬取百度经验数据/index.html","32ebbf2e1de878cd298ec15b6ad64aaa"],["/2018/05/24/一起学Docker（七）--容器的网络/index.html","f6371652eee265bda5b1a8d0900dc8e5"],["/2018/05/24/容器间网络通信设置(Pipework和Open vSwitch)/index.html","a55395a2864538ccab79834dc1176b73"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","f22f4fe69a5bb27e05b12277c300f09a"],["/2018/07/15/CentOS 7 安装最新版docker/index.html","ccf494f28dc3f936f4649a2de0c9b075"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","b4ac8a07e217314b22cc43dc7503a908"],["/2018/08/15/如何用9条命令在一分钟内检查Linux服务器性能？/index.html","2027a19f22f58e2eda1ad706812d5332"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","3d80bc181120ffff1873a9e2e2863ae7"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","c1bdb31fce074943851a385f9bb6490f"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","f8e286dd4cfd36941f0482330a8c30aa"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","e2a4cf294d92b730dc10a15542d90ec4"],["/2018/09/29/Git使用教程/index.html","6fe51f10d994bb5c7ac1f2d5036c0ba5"],["/2018/10/01/DevOps 漫谈：选择基础设施部署和配置管理工具/index.html","aa17a0cfd8fb7457ecbcec03aeb8df18"],["/2018/10/02/详解日志的5个级别/index.html","48f11aa4734754bc3024d659a8cbfcee"],["/2018/10/05/毁掉一个年轻人最好的方式，就是让他成为多面手/index.html","2e929157c017696a4a8f50356a0f64e7"],["/404.html","2e679440725d4d8a4a28ed6eea5cbe04"],["/about/index.html","103451fc8e9bb5aa627112b71ac21c06"],["/archives/2015/01/index.html","2545acbf2e70aa0d2f11a270545c11d0"],["/archives/2015/02/index.html","5587986b31f8879f06e84e0e8e4c0be3"],["/archives/2015/index.html","5bc946805f4d03da3fb062aa4e42d808"],["/archives/2016/10/index.html","d4fabf49410e38232f665fe794696ca2"],["/archives/2016/11/index.html","7313d4c1f1a67c1681c2d8cdd7dad602"],["/archives/2016/12/index.html","53ae71ebb0a3dd91fff94dbce1607ce4"],["/archives/2016/index.html","c6315ecca22a530e70455e28ac420105"],["/archives/2016/page/2/index.html","9632f2661efde03893148658ff33aa53"],["/archives/2017/03/index.html","6a660e2edc69a3005fbde9c32489198e"],["/archives/2017/07/index.html","95f34e253324579d0c4f1836bd9f068a"],["/archives/2017/index.html","e48702ad9bc7f7aac087536c6ca20e8d"],["/archives/2018/04/index.html","462c1335b192bd4b1a1cfb62e374f2a6"],["/archives/2018/05/index.html","f7d424f499c2cc1552c58dcd6d58018d"],["/archives/2018/05/page/2/index.html","6045a9c06438bd764228e30c8dfdfbbc"],["/archives/2018/06/index.html","acc81b52878815d02ff82575bf4cbe0a"],["/archives/2018/07/index.html","79d9e04b813941ea9462ba27ebd0fa6a"],["/archives/2018/08/index.html","c28c992ce7001a56824507189f858ac1"],["/archives/2018/09/index.html","ff1f5baff7b2d52ff7370559c972603b"],["/archives/2018/10/index.html","fd61d5f896ed22a50aacf119c3fa7c07"],["/archives/2018/index.html","bc674844da14074c4c8411aaa79a1ca5"],["/archives/2018/page/2/index.html","4bfe36dab0e63b274c9ca8c34cdd8089"],["/archives/2018/page/3/index.html","ed061c19a4ec670825a44efa4756729a"],["/archives/index.html","a4071ec4209cad814f988548f772371f"],["/archives/page/2/index.html","f53ae15811383bbe9c060a0015bbaff9"],["/archives/page/3/index.html","afbea6ea8d46ee70b18328836bbe1ed9"],["/archives/page/4/index.html","145fd2cf530f55ee918cba404e5cefd2"],["/archives/page/5/index.html","4c4bfc2d1707c65cfadff69dbe1c0e00"],["/archives/page/6/index.html","1467bbcf639008608e501bbd84adde5b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Deployment/index.html","daf2afeba9a8e2e200d3d9b1b260f315"],["/categories/Docker/index.html","fd9e20acfd1d568e731314d2e754a492"],["/categories/ELK/index.html","c868b9d8b013784e406de9412626f0d6"],["/categories/Git/index.html","aa3dc7516513a1eb77de0835d2aa4949"],["/categories/Hexo-Next/index.html","d306960bcb6c084b2734173a3f06b26a"],["/categories/Hexo/index.html","266146d77a9282ee3701112885c23bc0"],["/categories/Jenkins/index.html","1dea211912056b3d634b834afb9a6e38"],["/categories/Kubernetes/index.html","d67550e207c3733b77cd834a57958218"],["/categories/Linux/index.html","75116ce5049f6e17bee7c881f965f8c0"],["/categories/Python/index.html","8aa548a72d4d49cc2b9c469becd996c4"],["/categories/index.html","eed51d62d213976a969cb101b2f62d48"],["/categories/java/index.html","96ec039764f52b407235ec64140902e1"],["/categories/zabbix/index.html","0fb7a4d5c419a527aeaecd782f8fc3b9"],["/categories/zabbix/page/2/index.html","e7597e040486f001398c2856c011104c"],["/categories/工具/index.html","61e3489e282a2c83d48c3f815acfa741"],["/categories/技术工具/index.html","bed3f15dc19550d974ffdcc8505afe60"],["/categories/日志/index.html","afc7d34dbb78536f15a2a44f2f6d120b"],["/categories/服务器/index.html","6fa2699dea4510d8e0accf58de738942"],["/categories/架构/index.html","1ab9bd7177b30c0250d306a2ba815951"],["/categories/阿里云/index.html","a05732483faebc1f54e5d893e5044090"],["/categories/随笔/index.html","40380ae1a1ae34078bdd6c6ec9883daf"],["/css/main.css","977dd5c683772c9d4b6145452a2c6f02"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","519d55f79c32f1214f18c9245e2a0514"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","c2fb700eb2fa3ba417b0a21b0865e70a"],["/page/11/index.html","a5db233474d9e5a89e9cd4d8a5a4480d"],["/page/12/index.html","706afbba1ce13c5bea44771a7102f6c6"],["/page/13/index.html","8a536f761915a89b2d466a433a1f9d54"],["/page/14/index.html","26b1eb8fdd4bd0d3d380952b89a069a0"],["/page/15/index.html","de5634ec901487c5bd6836cc399534f7"],["/page/16/index.html","118c3dcea0b17f333fc746e2c297f703"],["/page/17/index.html","7e41c3a59853cee973358913117d5005"],["/page/18/index.html","bd5c95cb3887a18ca6045d328331ff06"],["/page/19/index.html","223731bccd592858b38e605b117228d2"],["/page/2/index.html","960b7d4ce776b76b4c198676d0702f68"],["/page/20/index.html","592d5199590f056c2797a31ec43efa33"],["/page/3/index.html","209fe6bdeee3e6e3e52f4c14b302fc84"],["/page/4/index.html","9fc45d731c413df7dbfac5068037bf59"],["/page/5/index.html","faa3306ceb1a53fe8d4f5229ac6ce834"],["/page/6/index.html","0e8abecc8e3e00553aa0573852a7372a"],["/page/7/index.html","01427ecb429e765d39ea2ef44a8121ea"],["/page/8/index.html","e62270b047ab98c6a4eb5057798b0cf3"],["/page/9/index.html","2dcced235ebb8e94306b67ee80d10a7f"],["/sw-register.js","abc0c310c7f0c7c97d451a24880411e1"],["/tags/CentOS/index.html","7e0d095e5b8f3bec149bf8eb82e6f6d7"],["/tags/Deployment/index.html","618eb12635480b07d429e03d5ab4147b"],["/tags/Docker/index.html","d70c02fbd943fdfd3543376e8b1a0007"],["/tags/ELK/index.html","65d93cdceab3ab30e4e11a09c292a07e"],["/tags/Git/index.html","2d1f3d55c11d6e53e150a58bea27f4ca"],["/tags/Hexo/index.html","b1a1efcae221acfabb9362d50788eb60"],["/tags/Jenkins/index.html","1ce21a892df1e2f11e317c095dda5f80"],["/tags/K8S/index.html","5a5320a9c28d2ada38be3d0db01d9308"],["/tags/Linux/index.html","473d826d45da300d4580fe307a3f1862"],["/tags/Markdown/index.html","0b43f754f0a73fd4430ab0b0640c6971"],["/tags/Python/index.html","793259c515f105451d34ae60c4a5ac62"],["/tags/index.html","811fff512b408d93f0a73239f86e63d9"],["/tags/java/index.html","d008bb8444520dba4ead6d0d2ace3b21"],["/tags/zabbix/index.html","9d363d0706d95e043372203f0eb0013d"],["/tags/zabbix/page/2/index.html","1c1303ab6691cc564da48abf74d17901"],["/tags/工具/index.html","f54ad86fe24a860dc157e8fc92ae67ee"],["/tags/感悟/index.html","36ed2b6b9d84b3527f6f9cb753e21400"],["/tags/日志/index.html","34586c876a89d64f8ed473a1f8ceddcd"],["/tags/架构/index.html","1c945c955d22f5838fc7c131081059f7"],["/tags/阿里云/index.html","3671988eefc3ad0f5cabaa8b8d4f653f"],["/tags/随笔/index.html","1055df0ea301b317165f2832eefc3410"]];
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
