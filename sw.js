/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","319d548d6571f5bcfdd7e2f759621cd2"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","7a70ea49633a74a48d6e8d4798e21633"],["/2015/01/20/如何整理个人资料/index.html","93e86d642107551d3210376dc13013b5"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","bf1ffa01133dd663d089079df491ef0b"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","027243c073648850920385c21b228f44"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","b45820ddcb5350a52bf69df8ba34800c"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","95fb49e378f7d7de8854243cd46338bb"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","a28a7f39b8400e808e963fcc4a6da3ca"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","e6055456b9c45e19c0848c7d5b68708b"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","0fd635b11ab41897dd5278022de20ce9"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","4797f17a86a497aa19139562a4da4e82"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","9ec5800f17faa82c06b96aef3398e551"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","19e68e11115effb62314f4e4fa520c79"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","1899461aa112e320d1e284e43cbfd6f7"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","408dfe8a57c6a90f260d5c4830a30196"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","90e332c8fe39f390fbb6dcdb71a23b65"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","776374254f66abf8e3b42831cea19fc0"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","968930d80525ded08e5adcbd7c65d562"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","c7b1fd2213db543ccb4bef68e6e115a6"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","335ee00acb5f3268faad0b081720e006"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","5f3109cd5d14f042e38cf83c273df4c2"],["/2016/11/27/Zabbix Web 邮件报警/index.html","850525d1a940f15257793b025e90af26"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","d56b8f71ee2aab4083601edf785a58a8"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","d01657d1dd05a4db7722bf13342d1150"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","09e1a6726cc6c2d64cb2ebd4c0b1c726"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","e19b4a9b1a23f7a582d6235e034fc328"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","49b9caeca04150b331a4163020a9fe93"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","1e989fb84c0bbc94906d8ad0b637ae67"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","432e01830174ebb5159a67b0f6207675"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","f035ebb45a0e173d3a8e96d3bd5a70f2"],["/2017/03/23/Jenkins 自动化部署上线/index.html","3ad129b75d4af4399b5c03d534202c2a"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","a719eb9ceedac22cc193113db60a5552"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","e0a92241fcaecae54dc09c68b8a7faae"],["/2018/04/10/Java-JVM/index.html","3a654a7cbdbef2556f5a5d720c395999"],["/2018/04/15/蓝绿发布、滚动发布、灰度发布等部署方案对比与总结/index.html","f6b1eb99965441e6ec28b12f6af3e50b"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","3c00ea2e613fb3f758d5cfc2a37c1651"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","5fcb9e5ed3accdcd644634eafea4e4e3"],["/2018/05/19/一起学Docker（一）-初识/index.html","0ea824ecc4ea9d2711d8fe8af37e343e"],["/2018/05/20/一起学Docker（二）--核心概念和安装/index.html","bf6427678fab412a6634dacccc942e35"],["/2018/05/21/一起学Docker（三）--镜像的常用操作/index.html","736828832fba4b86bed94eeb026b9fb6"],["/2018/05/21/一起学Docker（四）--容器的常用操作/index.html","c3438f2068472b9d11510cf858dc37bb"],["/2018/05/22/一起学Docker（五）--仓库/index.html","5e2b47bc66e3052dde21572947044fa1"],["/2018/05/24/Python 3爬取百度经验数据/index.html","d691c9856ac16d1ed5052f5f1a48e61a"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","d498f4e6d33cf4c0e1bc5187b7ba9eec"],["/2018/07/15/CentOS 7 安装最新版docker/index.html","5281e82985ccdafadb14b69eea340b36"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","c65ee99b80e960a18e87c0af17ff1fea"],["/2018/08/15/如何用9条命令在一分钟内检查Linux服务器性能？/index.html","1b233c3fde851ad7a5a9dc2d45a6a506"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","e4a5c7e447e56b83d0b7e31028364b27"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","c06015d90b75faca6ede86316872038e"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","0fcc4b5e419491557b50436541118056"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","4b0238d9d403a1b05a259ae2041edebe"],["/2018/09/29/Git使用教程/index.html","22e6718392367537958f6871a6a1bbcc"],["/2018/10/01/DevOps 漫谈：选择基础设施部署和配置管理工具/index.html","24a3a500aacf81cb803a670d7aa03468"],["/2018/10/02/详解日志的5个级别/index.html","634d13a2dde96a36e7ef5daa9c514927"],["/2018/10/05/毁掉一个年轻人最好的方式，就是让他成为多面手/index.html","6bd2d9435d619c8aeb9e6ea15362d6b0"],["/404.html","ddcf481708203619241d3e088ee1fe4b"],["/about/index.html","2090a0c69720a33b732349e2629ec29d"],["/archives/2015/01/index.html","b7e1ef83bbda7659c051bf92d9c9faac"],["/archives/2015/02/index.html","ba13c505266974a1b90b6c81d4a006da"],["/archives/2015/index.html","5fbbfc31150282a5dca364a3eb94ef74"],["/archives/2016/10/index.html","b3dbd0c34725692fa04d6c6d0973dc19"],["/archives/2016/11/index.html","4c57e3fa11ebc7925d70c1c018ff810a"],["/archives/2016/12/index.html","8f3d64f6f87eca42ade4f63145ec94a9"],["/archives/2016/index.html","1ef4a97c7816e24174db30999409ffa2"],["/archives/2016/page/2/index.html","2938ce217b6ce62ce2529a162a6b406f"],["/archives/2017/03/index.html","d16f6e08a96b04c83d16e5e7aa25e1fd"],["/archives/2017/07/index.html","fd565752379703e1ed4680910af4ebb2"],["/archives/2017/index.html","9c27c179987a5cb3643201bd52c4a1fd"],["/archives/2018/04/index.html","2a71122a3a2f101b38b2675cf2bb8e19"],["/archives/2018/05/index.html","5fa091c190f2f53ffa87562a80ebc85f"],["/archives/2018/06/index.html","3a8994c14f820048360c91321eb14233"],["/archives/2018/07/index.html","591fda0fafc70672dd7ee3108fb2ac64"],["/archives/2018/08/index.html","62d018cd95b69b2089b7a3c000320735"],["/archives/2018/09/index.html","e3bd3c637df98efb175f2475d286bd5f"],["/archives/2018/10/index.html","bfa931509570580e3ef9d8ba10a59417"],["/archives/2018/index.html","2899bb48802331e2e598d512195165ba"],["/archives/2018/page/2/index.html","13a8801db9c8a4e66120168b070edfac"],["/archives/2018/page/3/index.html","b318acee52ca94b8bb1a202db9fd1e10"],["/archives/index.html","30ecf4e303a2d0dabaed6045c231c898"],["/archives/page/2/index.html","57321361d6e265018a092fca1d3d0e48"],["/archives/page/3/index.html","1b91c7effb42bb802ad6074858757931"],["/archives/page/4/index.html","eea5bd1a291baa98b70830c07cc8688c"],["/archives/page/5/index.html","cd3f7d8dfc2569fe5e91d8f8f5b98fdd"],["/archives/page/6/index.html","24470699a7c82263fec1f04a5cb22274"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Deployment/index.html","c3b1d98b99552bb390b7659e8c1f1aa3"],["/categories/Docker/index.html","abd94a20a9087b78ca2cc805676930c5"],["/categories/ELK/index.html","ed8d726ae5507cfe83dc58d9f85a85b6"],["/categories/Git/index.html","b81955e99ea856e6fe066cdc40a2fb7e"],["/categories/Hexo-Next/index.html","d3cd684538098460adb1e2ed930b04bc"],["/categories/Hexo/index.html","bec9724fe3a90c74853277ba2f355029"],["/categories/Jenkins/index.html","8674575dbb4357d8094877d4ca78ede8"],["/categories/Kubernetes/index.html","f99abf8eedbc559c42b80a0d0d9c08e3"],["/categories/Linux/index.html","0a5364ab97d0a63c19264ba819227546"],["/categories/Python/index.html","355ce8453ec2fe095c841f9ff5b09f6b"],["/categories/index.html","401944d300f43ad67e060cee402294a1"],["/categories/java/index.html","49432d45bf022331a4fc42389855fd29"],["/categories/zabbix/index.html","39d77d3ae5ae3f875f67c952b5a4353b"],["/categories/zabbix/page/2/index.html","3879debe01588acb41efdc3eef306892"],["/categories/工具/index.html","dc5c9f516052056d19ec8d6b6ce4d2c9"],["/categories/技术工具/index.html","a14018b5695b1a212bc98fbc42f7c757"],["/categories/日志/index.html","ac283bcef122a4c5b6b3a569e6519e45"],["/categories/服务器/index.html","63540100a5a371057936170ddba36591"],["/categories/架构/index.html","b5fca90b69b1fd25965d133de9b28ba9"],["/categories/阿里云/index.html","45d516b513248e6799f52e222c9f9f75"],["/categories/随笔/index.html","015e181a64774a213c145037e7490ef7"],["/css/main.css","d172c2c0238ce854bef251ce82053294"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","4b0f6151c0449f30267b5b5687db7e38"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","2eb24fb0f904a0a9c789f649ff83834b"],["/page/11/index.html","bc3bc6b078bf65f05604169186830c5d"],["/page/12/index.html","84c048c19455b5c2eee51d6834241376"],["/page/13/index.html","f9a09c28e2b00468e20ba51d46237e1b"],["/page/14/index.html","b443a70fe67eb0f7f07608578f35f1c6"],["/page/15/index.html","bffbcae75aca8de2aa0a3a632b3ec2fc"],["/page/16/index.html","b6ed38f42a9a5bd529c8b874e6760e9a"],["/page/17/index.html","a13874549b9d13cf95139934aa1f5094"],["/page/18/index.html","9e6131bc235e2eda6a77f42d8b82f518"],["/page/19/index.html","90d992cb526e7424b306200a2f4659cd"],["/page/2/index.html","a2afbb41565a7f23e6321baf54575d39"],["/page/3/index.html","c50c6ccc1a48f7d7969d1762e075bff4"],["/page/4/index.html","db704cea0fb453cd1cdb315659299c64"],["/page/5/index.html","1bac33a354cda8038f16bb55bba27581"],["/page/6/index.html","a7d43d67071c8eb9875daf2bb3c901a9"],["/page/7/index.html","63836358c1bb11b1bfba46bab72e9785"],["/page/8/index.html","1fdf62ec48db15d0478689d188f51a32"],["/page/9/index.html","90fbdf4e8a103f288e6008c25b1c8be7"],["/sw-register.js","8cd84f08beaadc7d9d1517c2925d3c0d"],["/tags/CentOS/index.html","ab0d055554a30e81a8bd2a4e1a3761fe"],["/tags/Deployment/index.html","2160d14e3fabbae99b320e73f00c6c73"],["/tags/Docker/index.html","b91ff44b9464eb8cc584e4d315be1dde"],["/tags/ELK/index.html","385d71fcc41587af47fb63927709c175"],["/tags/Git/index.html","ebb17941d856f7bad1e02b01c1bec3df"],["/tags/Hexo/index.html","d3e6c091387e7f9af978205c7c6f222d"],["/tags/Jenkins/index.html","c7f4394813511c804c4a0a02bcb94b53"],["/tags/K8S/index.html","53618381d83801b283d7b94af78abca1"],["/tags/Linux/index.html","1d02b9ed9cfbb3ab1347a44974245da6"],["/tags/Markdown/index.html","a9e4ec1c9bf55ece111e8e5789ff4cb4"],["/tags/Python/index.html","ed7139e3517af6a335daacbfd2ec60ac"],["/tags/index.html","630862d8a74cf8e272d9cbb7f4659bba"],["/tags/java/index.html","0fbf87ba805fa7cb4090d75f44229e3f"],["/tags/zabbix/index.html","3ab7ddd17ea3b40b84c02f158145c0dc"],["/tags/zabbix/page/2/index.html","8ffcc58d53e928a22d711e0392f55e87"],["/tags/工具/index.html","21cd6f30be4cb90485c94dfa0ff73513"],["/tags/感悟/index.html","2e6f2c447f681ff2495d5fefee6e49ba"],["/tags/日志/index.html","8ce1de556675124e07513fc9b5768d5f"],["/tags/架构/index.html","cb89de419cfcc4ec486a613ae894d202"],["/tags/阿里云/index.html","86c17c5e458bb111a2f8d81a2401a9cd"],["/tags/随笔/index.html","7272fd4dda7618cbf707b07546a79539"]];
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
