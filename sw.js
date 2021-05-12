"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Hassan's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"3c2e13d337ee6867b3ceaa7694e3b7ed",url:"./404.html"},{revision:"d772220b1f225568aebbafc77f6caeb4",url:"./archives/2020/11/index.html"},{revision:"66e77ff1505ca3d406d9b14a8864472d",url:"./archives/2020/index.html"},{revision:"26a117a95c4b7c48f1bd036cece06196",url:"./archives/2021/01/index.html"},{revision:"46df5e6ae51fb67ec77e23ac0a11fa51",url:"./archives/2021/02/index.html"},{revision:"a6f90028c9043fdeea729c5b5cd7b245",url:"./archives/2021/03/index.html"},{revision:"b2e1e4e5afea6f1c729608c0995aa968",url:"./archives/2021/04/index.html"},{revision:"6c6cd1b1af5eec6248e7883582c4e34d",url:"./archives/2021/05/index.html"},{revision:"acfcf8276d416140176ae497923ccc00",url:"./archives/2021/index.html"},{revision:"4eec950055a26437f602e0b50dea5f88",url:"./archives/2021/page/2/index.html"},{revision:"2f312ceda93b1bc232c869633ffadddb",url:"./archives/index.html"},{revision:"9a1c62b096caad3b8a28a47aefb0c583",url:"./archives/page/2/index.html"},{revision:"11b67dcaa8e49feb479f8d77175b4f9f",url:"./atom.xml"},{revision:"8e72a079663c7c75258c98b59d12aa2d",url:"./baidusitemap.xml"},{revision:"d7221781b7ab84657666a0606e22ea73",url:"./bb/index.html"},{revision:"311ebe3f28b8d8db3388e6d6fd1f3c70",url:"./categories/💬茶余饭后/index.html"},{revision:"c27341d54e0d6d311e8fcd939e231c92",url:"./categories/💻实用教程/index.html"},{revision:"ccf0c080872a669923c5ce48dc6a0df8",url:"./categories/📕知识笔记/index.html"},{revision:"260a4508f4488245952c2a36b1c7098e",url:"./categories/🤗干货分享/index.html"},{revision:"f34aab7b56b158793c50c06ddb6c591a",url:"./categories/index.html"},{revision:"54aedcb46dcfe44548bc57f12173445f",url:"./cc/index.html"},{revision:"d87d9fd20226461225d251353a136c79",url:"./comments/index.html"},{revision:"88985b52303397db84c3da05d31e8b35",url:"./css/custom.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"b13b02687c508da98ec889b728bdf735",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"7fddbf8be6292eafd7e68a58de62ea19",url:"./friendcircle/index.html"},{revision:"6f1cf476d58ab0fda60d46e0716a9666",url:"./gallery/ArticleCover/index.html"},{revision:"f6c613bf0d7bce3e0e0207c1c468879a",url:"./gallery/index.html"},{revision:"5f63b73320fef54affa03965e050c354",url:"./gallery/WendyZhang/index.html"},{revision:"84a3d1a0d4db51e86f1b72ec536f0627",url:"./hassan/fcircle.js"},{revision:"4dd38e4197937828a52dad5adf3b5acf",url:"./hassan/hassan.js"},{revision:"ee7ff38ea249eeb8b3e08499bff79ed3",url:"./hassan/pace.js"},{revision:"f9b06dfaa30582637c12244b69d73a60",url:"./hassan/smooth.js"},{revision:"3080499e74644e5396d45041404babef",url:"./hassan/wow.js"},{revision:"2d4635bb3f5c95ae001de08a87b09333",url:"./img/siteicon/browserconfig.xml"},{revision:"725ec8b5dac2ee389f9413a46a35b58b",url:"./img/siteicon/README.html"},{revision:"8f4bed0a0608ee52a96d5e745348e681",url:"./index.html"},{revision:"98b146570e72652accf89b64237d7455",url:"./introduction/index.html"},{revision:"d914762736d6a749997c1e6db0b79494",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"6e568d5cd8e11834b6a70c086be9052a",url:"./link/index.html"},{revision:"d2bdaf515b3dbf1a758e38fdb1aad80e",url:"./log/index.html"},{revision:"aab1ba59aaf2515b8bfb3b39b95c7533",url:"./manifest.json"},{revision:"229aa59ef8e5d8aaab84b3413e5fcfe3",url:"./movies/index.html"},{revision:"65c3bf4b143610e9492269a53e0ef99b",url:"./notice/index.html"},{revision:"d17490f4f5bc7eb9324542b4bf0118e0",url:"./page/2/index.html"},{revision:"d5f5761df9a10a0b893fddd80200b6da",url:"./playlist/index.html"},{revision:"790b997fa754789eaba7156a9484fdda",url:"./posts/1a52f92/index.html"},{revision:"953b503ae9379ea11126a4dce33d4fee",url:"./posts/223fd004/index.html"},{revision:"5a0e04cc3e20df65d18242e2a118954c",url:"./posts/25d6e78d/index.html"},{revision:"828a81f6a8190521f2794944c61a0547",url:"./posts/2b0afdc8/index.html"},{revision:"fb2e5207daf93ddcab1c4b56ca73a143",url:"./posts/3bc57976/index.html"},{revision:"ad97478f7a2c1d7555912271585293e5",url:"./posts/3ce75aa2/index.html"},{revision:"969a96a05322203c964a3b9f8c512bfe",url:"./posts/4889fc02/index.html"},{revision:"ebba910d80e0511eed7ea019c83f21d9",url:"./posts/61c6c2e8/index.html"},{revision:"4d02af787c74aecac843c094b6de2053",url:"./posts/664d97f5/index.html"},{revision:"41efd9a79adddc8cb9f765bb50ffa39b",url:"./posts/7a869374/index.html"},{revision:"e9d1cd457f124e4fbeb81bcf6ae14a70",url:"./posts/911eabb0/index.html"},{revision:"9c122e6141493eceac20374c32f1b5b4",url:"./posts/9d49f75f/index.html"},{revision:"aeffa7f6727edaea9349339e1901399d",url:"./posts/a24c061e/index.html"},{revision:"6b9e7f0093ec7c6bb3b8da953ae8e4d5",url:"./posts/d0dfb99d/index.html"},{revision:"6029b562f5e877d28b3d2f61e92b8c40",url:"./posts/d5180487/index.html"},{revision:"fcf0b81474ad67aa1d316abb2ec93d50",url:"./posts/d53524f6/index.html"},{revision:"c47638624c8aca2eea8a1a472469a714",url:"./posts/d95d7e09/index.html"},{revision:"48242731e3bc45d5016106d2447e3197",url:"./posts/d9d0b5ee/index.html"},{revision:"55f137779209f4614797b7a7ddcb4f3e",url:"./privacy/index.html"},{revision:"9cc686317a545c3330a34a9d9a385f06",url:"./search.xml"},{revision:"066a71612cf0c66a0cc1ab0eb632c47e",url:"./sitemap.xml"},{revision:"2774e6a072d70f5ab23d69b0fd959019",url:"./statistics/index.html"},{revision:"2585d614c4c1ebe6c94aaee4f90b7320",url:"./sweetcloud/css/style.css"},{revision:"75f2f081245682b88dcc4863fa398092",url:"./sweetcloud/index.html"},{revision:"ec056ff7dab483a5595ce68667e25772",url:"./sweetcloud/js/all.js"},{revision:"bb381e2d19d8eace86b34d20759491a5",url:"./sweetcloud/js/jquery.js"},{revision:"933c7e59640df30ebf65bbe1eb365ed9",url:"./tags/🌈英国/index.html"},{revision:"454cce75c47f937de85711b471305c93",url:"./tags/🌌蓝桥杯/index.html"},{revision:"ac050e96ca8d8f56e191f262b1f5338d",url:"./tags/🌏留学/index.html"},{revision:"342425580bfefe26001bed9ebded8ee5",url:"./tags/🍀青春/index.html"},{revision:"03632e13515ecacd7afa501895f89f07",url:"./tags/🎉娱乐/index.html"},{revision:"2783af229e965218b1cbf48a5bf739a8",url:"./tags/🎯计划/index.html"},{revision:"c5dc3630e08b1a11e14491f631096cf8",url:"./tags/🎵音乐/index.html"},{revision:"0fb3b2026ca616b2b5b322fb685ada75",url:"./tags/👓Win10/index.html"},{revision:"5070653cd21b6e265d5e3b357a246543",url:"./tags/👾GitHub/index.html"},{revision:"71cc9218627fa0db5ef0d52e32d4a4e9",url:"./tags/💰经济/index.html"},{revision:"b4c9d3557e49fccd5e03bc141e7ee0bd",url:"./tags/💻微型计算机/index.html"},{revision:"19def20e645b6cbf6a038f6e09ba2df4",url:"./tags/📃C/index.html"},{revision:"5f20f106d1c439598201812e8f80b032",url:"./tags/📊数据结构/index.html"},{revision:"296495c49d438320af32f2c5253e5a79",url:"./tags/📜C语言/index.html"},{revision:"d46d2e6e36e7d05ca228e02922030584",url:"./tags/📝博客/index.html"},{revision:"3c150953a40ffad9434343e28c1da226",url:"./tags/🔠英语/index.html"},{revision:"9825cfbdae295cebe0465fa9728acf91",url:"./tags/🔹Hexo/index.html"},{revision:"ba97e48e9cab26baa4ca1af6a9f88a33",url:"./tags/🦆雅思/index.html"},{revision:"5603e176eba5587d4d02555a337324cd",url:"./tags/🦋Butterfly/index.html"},{revision:"24610a69dffe52b37039b001b56e452c",url:"./tags/🙉说唱/index.html"},{revision:"7a74e4629b0aca4b451ef0abc94a36d3",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.googleAnalytics.initialize();