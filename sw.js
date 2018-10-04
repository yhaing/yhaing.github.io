/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/19/markdown常用编写语法/index.html","edc84c93c049ee6b58be3cc7b30a884d"],["/2015/01/20/Hexo NexT主题添加点击爱心效果/index.html","560e38a36778fb1952c04698f363e1d2"],["/2015/01/20/如何整理个人资料/index.html","b3ca1db4fce58b9443ad4ba82212903d"],["/2015/01/21/Centos7内核由3.10升级至4.12方法/index.html","ad9f966adb59ff6444436d21bbb1a5d5"],["/2015/01/22/CentOS7.4安装OpenVpn/index.html","fc21a972a7b1d77fd1e2639ad2938c6d"],["/2015/01/22/CentOS7修改网卡为eth0/index.html","5534861258e09c37697f2e606ff6dfa7"],["/2015/01/23/CentOS7.4安装GlusterFS/index.html","a8785a3513c1fcf480ee526ee5cd8f4b"],["/2015/01/24/OSSFS实现阿里云OSS文件系统数据共享/index.html","87c083328a3be2cfed655edc298dce3f"],["/2015/02/25/Hexo NexT主题内加入动态背景/index.html","56014f984f152daa72c4c257025905d5"],["/2015/02/26/Hexo NexT主题内接入网页在线联系功能/index.html","6fb7429f48b75c39721d7a5eeb31f3d7"],["/2016/10/10/Zabbix 3.0 基础介绍 [一]（转）/index.html","3a4c5e744501e5418921c0d8cd7cef89"],["/2016/10/11/Zabbix 3.0 基础介绍 [二]（转）/index.html","385911147ef3f5917788e37a164ef0dd"],["/2016/10/11/Zabbix 3.0 部署监控 [三] （转）/index.html","43481976a99578f84c0206084c84a252"],["/2016/11/10/Zabbix 3.0 生产案例 [四]/index.html","744e76513e3a6a309b0daf15ab30663c"],["/2016/11/10/Zabbix字符集乱码及Centos7补全设置/index.html","bcae7168c31f9d412cb0d22a2a9bc922"],["/2016/11/12/Zabbix 3.0 生产案例 [五]/index.html","be0da2c8297af08f8257b895b3fe08bb"],["/2016/11/15/Zabbix 3.0 监控MySQL [六]/index.html","9044f0e83c879787565bb802a81fa897"],["/2016/11/15/Zabbix 3.0 监控Web [七]/index.html","fe9dea056cb1ce4167e2b559ff54a3af"],["/2016/11/20/Zabbix 3.0 主备模式 [八]/index.html","d6180987faaec32c8f71411f3ba39ee8"],["/2016/11/21/Zabbix 3.0 分布式监控 [九]/index.html","fe715b7ba046ca4585ec67aa54992ed2"],["/2016/11/25/Zabbix 3.0 自动化监控 [十]/index.html","ffe723b106dd7e84c882a890ab06ed5e"],["/2016/11/27/Zabbix Web 邮件报警/index.html","31f13c40127bcd04508704f5d1908b79"],["/2016/11/28/Zabbix_sender介绍及配置/index.html","c3f9bfa5888dab5043a11e698531afdd"],["/2016/12/05/Zabbix-3.0.X 安装Graphtree/index.html","752c409e0a8d7218afaf1915e0255d35"],["/2016/12/10/Zabbix-3.2.3实现微信（WeChat）告警【转】/index.html","9700bdf31abf514e7621aeb62786bbdf"],["/2017/03/20/持续集成之Jenkins+Gitlab实现持续集成 [二]/index.html","95a1204fc3a69e01d11bfb7a2d80d73e"],["/2017/03/20/持续集成之Jenkins+Gitlab简介 [一]/index.html","b28496dca1bb87ba304435292578fb35"],["/2017/03/21/持续集成之代码质量管理-Sonar [三]/index.html","e714091fe4bbf4ddf397c3901449f8ee"],["/2017/03/22/Jenkins+Maven+SVN+Nexus 搭建持续集成环境/index.html","6d53000ff713c7412536c1e74d831695"],["/2017/03/22/持续集成+自动化部署[代码流水线管理及Jenkins和gitlab集成]/index.html","3e9e30373e019fd5d48305e66fd2b1a5"],["/2017/03/23/Jenkins 自动化部署上线/index.html","6c43b67e1fbd3fbb6b8fffdac112f2ba"],["/2017/07/29/ZABBIX 3.2 监控服务器TCP连接状态/index.html","1776482881d522beeb2a1a1a89ebd5fc"],["/2017/07/29/ZABBIX 忘记登录密码/index.html","e4dcf00ad8a427182743d1f0c65f1c7b"],["/2018/04/10/Java-JVM/index.html","97381807740aa389567636960568cf3e"],["/2018/04/15/蓝绿发布、滚动发布、灰度发布等部署方案对比与总结/index.html","2a4a49fe6414cc2128fdee09f7299ba6"],["/2018/05/14/Hexo使用jenkins自动部署到阿里云/index.html","fb1fefcbad51294ca4b7307d8f117b3d"],["/2018/05/14/jenkins实例似乎已离线问题/index.html","b0b3e9c1fa57924893117f7c26ad5f53"],["/2018/05/24/Python 3爬取百度经验数据/index.html","5816c9a6a12e6853d63c5b77171bc094"],["/2018/06/20/Maven私库Nexus3搭建使用/index.html","c86df71c42d559f5fefb7048bfa48d6c"],["/2018/07/15/CentOS 7 安装最新版docker/index.html","0a254b3f2d1f8558903c040417be8302"],["/2018/07/21/MySQL高性能优化实战总结！/index.html","c36a70bd27ddb2622fdcfc55aa4ed961"],["/2018/08/15/如何用9条命令在一分钟内检查Linux服务器性能？/index.html","72842e46a049f945138082c37b59d6be"],["/2018/08/29/一个思维习惯，让你成为架构师/index.html","524262758898d98634326e45aab6b797"],["/2018/09/12/ELK+Filebeat+Kafka+ZooKeeper 构建海量日志分析平台【转】/index.html","f487825e244ecad9f9b20a5f70003c96"],["/2018/09/20/Kubernetes集群之路（一）TLS证书配置/index.html","6c8cd8811af05d03e6a78ef0d02d9c37"],["/2018/09/21/Kubernetes集群之路（二）etcd集群部署/index.html","e600af5a9fb9e0fe998f7a46caf46f6e"],["/2018/09/29/Git使用教程/index.html","5758903ec9f24863e9ea31e3731cf517"],["/2018/10/01/DevOps 漫谈：选择基础设施部署和配置管理工具/index.html","8f200f418ef47b410b7200f5616c46a2"],["/2018/10/02/详解日志的5个级别/index.html","7076bec82213355be80a2349267a2970"],["/404.html","be24754de1f2066c11209fe256a067fd"],["/about/index.html","8b1f82c1177b59b8226340f69845bcce"],["/archives/2015/01/index.html","2df35067fc69421399c4032baefd9c0f"],["/archives/2015/02/index.html","d7a642f5300708a26fc86319e6997442"],["/archives/2015/index.html","df380210a2a8bd90086f76fc9c8eabbe"],["/archives/2016/10/index.html","c32f227e90ea9fb2d8700457e3e5bccf"],["/archives/2016/11/index.html","3b5412fa5146569c6321ae24933b6d12"],["/archives/2016/12/index.html","cab3bf2eba2868e87f702572c741512f"],["/archives/2016/index.html","a0a14b858711761a09c96113c4b86e3e"],["/archives/2016/page/2/index.html","48197c814362cf7f87e69ab286d6e0a5"],["/archives/2017/03/index.html","7eb51466973dc25dddac709de584039a"],["/archives/2017/07/index.html","0664412ebd6088ec3d533d40098d966b"],["/archives/2017/index.html","5189516848f10b811bf755927f0ee974"],["/archives/2018/04/index.html","a6a0c71faadf296c3d4a5e880513ea05"],["/archives/2018/05/index.html","e90bcb2e9d838b659e37bb7018a101ea"],["/archives/2018/06/index.html","8e132257ede14f7f4eb383b08f2094af"],["/archives/2018/07/index.html","e65f5057ce9d2d3362ba9b53bccb75bb"],["/archives/2018/08/index.html","4de55cde74b1e1c8f04e423415ecd96c"],["/archives/2018/09/index.html","eff0af48f14182260de9b5ece9ae7ea6"],["/archives/2018/10/index.html","7089408a2faeaa15370bc9e50150ca24"],["/archives/2018/index.html","ff5f7750ed709879c46eaec5373dbb00"],["/archives/2018/page/2/index.html","2d42fbe140d6f595b4c61c469f50b95e"],["/archives/index.html","5459482b17fc6b6873f67e4948f07227"],["/archives/page/2/index.html","5a76a8ea23ca223080061af271406249"],["/archives/page/3/index.html","c23d1d9a54698f48b2d76012d0b439ad"],["/archives/page/4/index.html","866c4fb4de2388e3ba7711775fce7199"],["/archives/page/5/index.html","c8b24c4a4e44fbe62ed678ea26efe2d6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d3c6a2fc18c932411a9d5bf59de343f7"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","09d64431d4e71dd79e0293cb254a58bf"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Deployment/index.html","2f8ede43131bc964fe4889773e319dbe"],["/categories/Docker/index.html","49acf32ded0341c008eb825c9d35672b"],["/categories/ELK/index.html","778fba6ae6437cc6b179e10063fbc6fe"],["/categories/Git/index.html","41916120077dc509a27fb3356d5c43c3"],["/categories/Hexo-Next/index.html","2ca2d2493029b699c6251b7f6b343130"],["/categories/Hexo/index.html","4d5712b792fa0f6ffd3aa3bd14b6c7b2"],["/categories/Jenkins/index.html","70a180e1f181415bf585dbe54418a497"],["/categories/Kubernetes/index.html","a204ea456cc96c6f04ff7d104b01c3e6"],["/categories/Linux/index.html","6dad6854ccd04660d5d178e09fdfc652"],["/categories/Python/index.html","35ce117a66db0d3cfd0de40898a4461f"],["/categories/index.html","5d2dfe05fbed7b6bf477b685e1f1355b"],["/categories/java/index.html","0b2037999c7299ade9dc8b89ca4d9486"],["/categories/zabbix/index.html","594cc88ae589da438ecb69759808668d"],["/categories/zabbix/page/2/index.html","a0270a96b2197bbe156e4ef8d85a576d"],["/categories/工具/index.html","7df6a8cb466c97077b5dabde8963d6a7"],["/categories/技术工具/index.html","c15118c645717b3e9016bf4b790ed8f8"],["/categories/日志/index.html","30cc8d88391563c3d610e645ad5d2a97"],["/categories/服务器/index.html","cd65b849883d62271804c7ee79a06f83"],["/categories/架构/index.html","87e6f069eba57a3ff1e4bfad390b0382"],["/categories/阿里云/index.html","886908ff105bbb6f234c09ad5819b795"],["/categories/随笔/index.html","fa8f80dfb86c0deaa296e3ae3d86bcbb"],["/css/main.css","3d97e3e9ec67b44905e4a470b5284e5c"],["/images/1.jpg","13562dd6bc6d66f1c77db04fabbed276"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","18b6b220510276232314efbfeee2567b"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","49681c1c1eb59156507bcb2942675d0d"],["/images/bg.jpg","87f6a55a4bc761343d6d58c5ffeffcd7"],["/images/bg2.jpg","5deb55c7298dc08ea957c823fdc907ea"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","f4f1da769dc19f54cb891cfc37a093b0"],["/index.html","2f7d267a021edf63143bcf7784f009a9"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/dynamic_bg.js","260bb9254e3a9d60379072c32bd89243"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","36efc3baa9a5174e938472c54e44516c"],["/page/11/index.html","9bf7349819479754e9ed68333e4a1b33"],["/page/12/index.html","84d0dea52b294b07df107fab1dd9a12f"],["/page/13/index.html","a7ae0cca08caf7ab9fefd12b13072f85"],["/page/14/index.html","92594ce759ba3d90a4c8be7517817423"],["/page/15/index.html","a388d970f243a2a24755b8e41823a5ae"],["/page/16/index.html","237aa2c0a2cf7fee0d9a0e24a17e8590"],["/page/17/index.html","cfa5e0a5795e0e9c4a6e6f332ac30acb"],["/page/2/index.html","cb78cc51093fefebf0991e12d7c17a10"],["/page/3/index.html","a3a87c6e60937aef4603639442ac9d97"],["/page/4/index.html","31c20a01a07889b432d9cf0e5b66cba6"],["/page/5/index.html","dad377648a5c52c8bf57f0ecda334168"],["/page/6/index.html","052181cef7d08195cd904b691983ce67"],["/page/7/index.html","17ae2f67115ef4b84784571186ff74fa"],["/page/8/index.html","e3d289188be59772ef560c6f33979021"],["/page/9/index.html","d66c80b45c65cb6148f4d0f1db8ee582"],["/sw-register.js","a853f2a5a10557601dd67714b3163d3b"],["/tags/CentOS/index.html","e740f60504e9199a87f018594e7adb91"],["/tags/Deployment/index.html","445db1d797737078af1df17ccecb1d5b"],["/tags/Docker/index.html","87040ab20e9d137bca3a0bc622baf68e"],["/tags/ELK/index.html","51111c9f5658e6426a4d3fd4f31f8c56"],["/tags/Git/index.html","1414bf3233e16412ea71350166f80efc"],["/tags/Hexo/index.html","4c76dfabce766833c54eacc22d2d8a40"],["/tags/Jenkins/index.html","94912e8e5764e3c38466b005c1a975aa"],["/tags/K8S/index.html","1c80b72c76a3b421eb0bb0fb8d2da38d"],["/tags/Linux/index.html","cd61c3e0d378a1926e200790edfa9712"],["/tags/Markdown/index.html","f41ebfacac653d8b3125a846befc5535"],["/tags/Python/index.html","bcd4fc46f3967635f104bfc160f4bd09"],["/tags/index.html","ed18b442614e71009d03466a7b30deea"],["/tags/java/index.html","726d6600d1b661bc133adff3adbf8cea"],["/tags/zabbix/index.html","4dd8181d12b3f9661afafe9841d6ae38"],["/tags/zabbix/page/2/index.html","707808dabc099d1098bc0f32090d3c0f"],["/tags/工具/index.html","d806019911badfa17b7e8e401062ac7b"],["/tags/感悟/index.html","6d04bde4523b42c12b173d45261110cb"],["/tags/日志/index.html","ee6019b8ce4c12935589a2e3b8f3820b"],["/tags/架构/index.html","087ffa0d7904a5d4a651e56a2276c2ce"],["/tags/阿里云/index.html","7d2426ee1dcc98ad9eaeccd7e0381b15"]];
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
