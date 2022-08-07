//
const windowsproduct = {
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "EloamView",
            "desc": "<h2>简介</h2>\r\n\r\n<p>采用C++开发，将所有高拍仪功能封装成ocx控件</p>",
            "create_at": "2021-06-08T01:17:51.243055+08:00"
        },
        {
            "id": 2,
            "name": "EloamDll",
            "desc": "<h2>简介</h2>\r\n\r\n<p>提供dll进行对接</p>",
            "create_at": "2021-06-08T01:20:44.675876+08:00"
        },
        {
            "id": 3,
            "name": "WebCamera",
            "desc": "<h2>简介</h2>\r\n\r\n<p>将所有高拍仪功能封装成一个本地服务器（webCamera），当本地启动服务后，可以发送http请求，获取对应的接口数据</p>",
            "create_at": "2021-06-08T01:22:13.258799+08:00"
        }
    ]
}

const windowsfunction = {
    "count": 47,
    "next": "http://172.16.200.37:8023/api/v1.3/windowsfunction/?limit=20&offset=20",
    "previous": null,
    "results": [
        {
            "id": 9,
            "sdkname": "EloamView",
            "name": "设备",
            "index": 0,
            "create_at": "2021-06-19T14:26:43.648566+08:00"
        },
        {
            "id": 33,
            "sdkname": "EloamDll",
            "name": "全局函数",
            "index": 0,
            "create_at": "2021-06-27T20:18:57.818909+08:00"
        },
        {
            "id": 1,
            "sdkname": "WebCamera",
            "name": "高拍仪",
            "index": 1,
            "create_at": "2021-06-08T17:55:18.160597+08:00"
        },
        {
            "id": 10,
            "sdkname": "EloamView",
            "name": "图像",
            "index": 1,
            "create_at": "2021-06-19T14:27:54.060123+08:00"
        },
        {
            "id": 34,
            "sdkname": "EloamDll",
            "name": "图像函数",
            "index": 1,
            "create_at": "2021-06-27T20:19:16.723022+08:00"
        },
        {
            "id": 2,
            "sdkname": "WebCamera",
            "name": "卡证读取",
            "index": 2,
            "create_at": "2021-06-08T17:55:32.775779+08:00"
        },
        {
            "id": 11,
            "sdkname": "EloamView",
            "name": "拍照",
            "index": 2,
            "create_at": "2021-06-19T15:21:25.487829+08:00"
        },
        {
            "id": 35,
            "sdkname": "EloamDll",
            "name": "内存对象函数",
            "index": 2,
            "create_at": "2021-06-27T20:19:30.339486+08:00"
        },
        {
            "id": 4,
            "sdkname": "WebCamera",
            "name": "人脸",
            "index": 3,
            "create_at": "2021-06-08T17:55:47.697064+08:00"
        },
        {
            "id": 12,
            "sdkname": "EloamView",
            "name": "录像",
            "index": 3,
            "create_at": "2021-06-19T15:41:33.863586+08:00"
        },
        {
            "id": 36,
            "sdkname": "EloamDll",
            "name": "图像列表函数",
            "index": 3,
            "create_at": "2021-06-27T20:19:42.924101+08:00"
        },
        {
            "id": 5,
            "sdkname": "WebCamera",
            "name": "OCR",
            "index": 4,
            "create_at": "2021-06-08T17:55:53.688208+08:00"
        },
        {
            "id": 13,
            "sdkname": "EloamView",
            "name": "PDF",
            "index": 4,
            "create_at": "2021-06-19T15:44:19.881560+08:00"
        },
        {
            "id": 37,
            "sdkname": "EloamDll",
            "name": "HTTP函数",
            "index": 4,
            "create_at": "2021-06-27T20:19:52.716851+08:00"
        },
        {
            "id": 14,
            "sdkname": "EloamView",
            "name": "功能操作",
            "index": 5,
            "create_at": "2021-06-19T15:45:49.342881+08:00"
        },
        {
            "id": 31,
            "sdkname": "WebCamera",
            "name": "设备",
            "index": 5,
            "create_at": "2021-06-19T20:58:52.244335+08:00"
        },
        {
            "id": 38,
            "sdkname": "EloamDll",
            "name": "FTP函数",
            "index": 5,
            "create_at": "2021-06-27T20:20:03.273008+08:00"
        },
        {
            "id": 15,
            "sdkname": "EloamView",
            "name": "水印",
            "index": 6,
            "create_at": "2021-06-19T15:48:02.255498+08:00"
        },
        {
            "id": 32,
            "sdkname": "WebCamera",
            "name": "串口",
            "index": 6,
            "create_at": "2021-06-19T20:59:03.355202+08:00"
        },
        {
            "id": 39,
            "sdkname": "EloamDll",
            "name": "设备函数",
            "index": 6,
            "create_at": "2021-06-27T20:20:13.741306+08:00"
        }
    ]
}


const windowsapi = {
    "count": 522,
    "next": "http://172.16.200.37:8023/api/v1.3/windowsapi/?limit=20&offset=20",
    "previous": null,
    "results": [
        {
            "id": 1,
            "productname": "WebCamera",
            "functionname": "高拍仪",
            "name": "获取摄像头视频数据",
            "desc": "<pre>\r\n<code>Description:    获取主摄像头视频数据\r\nURL:            http://127.0.0.1:38088/video=stream&amp;camidx=0\r\nMethod:         GET</code></pre>\r\n\r\n<pre>\r\n<code>Description:    获取副摄像头视频数据\r\nURl:            http://127.0.0.1:38088/video=stream&amp;camidx=1\r\nMethod:         GET</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-08T20:27:07.228205+08:00",
            "update_at": "2021-08-11T16:02:19.786350+08:00"
        },
        {
            "id": 5,
            "productname": "EloamView",
            "functionname": "设备",
            "name": "初始化设备",
            "desc": "<pre>\r\n<code>Function:       BOOL InitDev();\r\nDescription:    初始化设备\r\nInput:          无\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T14:47:52.436572+08:00",
            "update_at": "2021-08-11T17:19:46.091877+08:00"
        },
        {
            "id": 11,
            "productname": "EloamView",
            "functionname": "图像",
            "name": "获取摄像头分辨率",
            "desc": "<pre>\r\n<code>Function:       long GetResolutionNumber(long iDev);\r\nDescription:    获取指定摄像头所有分辨率数量\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\nReturn:         返回所有分辨率数量,失败返回-1\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T15:07:33.636150+08:00",
            "update_at": "2021-08-11T17:22:50.143997+08:00"
        },
        {
            "id": 26,
            "productname": "EloamView",
            "functionname": "拍照",
            "name": "拍照",
            "desc": "<pre>\r\n<code>Function:       BOOL Scan(LONG iDev, BSTR filePath, LONG flag);\r\nDescription:    拍照\r\nInput:          iDev：摄像头索引 0表示主摄像头 1表示副摄像头\r\n                filePath：保存文件路径\r\n                flag：一般为 0（即 0x0100），对于 jpg 格式，0x0080 表示高质量（以100:1保存），0x0100表示较高质量（以 75:1 保存），0x0200 表示中等质量（以 50:1 保存）,0x0400 表示较差质量（以 25:1 保存），0x0800 表示差质量（以 10:1 保存）,1-100  的十进制整数 x（以 x:1保存）\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T15:22:06.640789+08:00",
            "update_at": "2021-08-11T17:27:07.760663+08:00"
        },
        {
            "id": 36,
            "productname": "EloamView",
            "functionname": "录像",
            "name": "启用视频录像",
            "desc": "<pre>\r\n<code>Function:       BOOL StartRecord(LPCTSTR filePath, LONG iFrameRate);\r\nDescription:    启用视频录像\r\nInput:          filePath：文件保存位置\r\n                iFrameRate：帧率\r\nReturn:         成功返回True 失败返回False\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T15:41:54.072505+08:00",
            "update_at": "2021-08-11T17:29:57.985422+08:00"
        },
        {
            "id": 38,
            "productname": "EloamView",
            "functionname": "PDF",
            "name": "生成pdf文件",
            "desc": "<pre>\r\n<code>Function:       BOOL  SaveToPdfEx(LPCTSTR PdfPath, LPCTSTR FilePathList, LONG FileCount);\r\nDescription:    生成pdf文件     \r\nInput:          PdfPath 保存的pdf路径文件名\r\nFilePathList 需要目标图片路径，以“+”为间隔符，如“C:\\\\1.jpg+C:\\\\2.jpg+C:\\\\3.jpg+”\r\n                FileCount 要保存的图像的数目                  \r\nReturn:         TRUE表示成功 FALSE表示失败</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T15:44:32.464475+08:00",
            "update_at": "2021-08-11T17:32:32.246042+08:00"
        },
        {
            "id": 40,
            "productname": "EloamView",
            "functionname": "功能操作",
            "name": "删除本地文件",
            "desc": "<pre>\r\n<code>Function:       BOOL DeleteFile(LPCTSTR fileName);\r\nDescription:    删除本地文件\r\nInput:          fileName：本地文件路径\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T15:46:25.079467+08:00",
            "update_at": "2021-08-11T17:33:05.431472+08:00"
        },
        {
            "id": 43,
            "productname": "EloamView",
            "functionname": "水印",
            "name": "设置高拍仪水印",
            "desc": "<pre>\r\n<code>Function:       BOOL  AddWaterMark(LONG SetFlat, LONG Pos, LPCTSTR Content, LPCTSTR Clr, LONG Weight);\r\nDescription:    设置高拍仪水印\r\nInput:          SetFlat: 水印开启标志，0为关闭，1以默认参数设置2以自定义参数设置\r\n                Pos: 位置， 1左上, 2右上, 3左下, 4右下，5中心\r\n                Content: 绘制的文本\r\n                Clr: 颜色，RGB色值，如黑色: “000000000” 纯红：“255000000”\r\n                Weight： 透明度, 取值范围0-255, 0表示完全不透明， 为255表示完全透明\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T15:48:55.137843+08:00",
            "update_at": "2021-08-11T17:33:54.309689+08:00"
        },
        {
            "id": 47,
            "productname": "EloamView",
            "functionname": "条码，二维码识别",
            "name": "获取条码，二维码的数量",
            "desc": "<pre>\r\n<code>Function:       LONG GetBarcodeCount(LONG iDev, BSTR filePath, BOOL bFile);\r\nDescription:    获取条码，二维码的数量\r\nInput:          iDev 摄像头索引 0表示主摄像头 1表示副摄像头\r\n                filePath 图片文件全路径(若是识别视频画面条码则可为\"\")\r\n                bFile true表示根据识别传入图片的条码 false表示识别视频画面条码\r\nReturn:         返回条码数量\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T15:59:22.356994+08:00",
            "update_at": "2021-08-11T17:34:55.490346+08:00"
        },
        {
            "id": 49,
            "productname": "EloamView",
            "functionname": "人脸识别",
            "name": "人证比对（单次，图片与图片比对）",
            "desc": "<pre>\r\n<code>Function:       LONG CompareFaceDetect(LPCTSTR imgPath1, LPCTSTR imgPath2);\r\nDescription:    人证比对（单次，图片与图片比对）\r\nInput:          imgPath1 图片1路径 imgPath2 图片2路径\r\nReturn:         返回比对结果\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:01:15.479149+08:00",
            "update_at": "2021-08-11T17:35:32.189996+08:00"
        },
        {
            "id": 58,
            "productname": "EloamView",
            "functionname": "身份证",
            "name": "初始化ID卡阅读器",
            "desc": "<pre>\r\n<code>Function:       BOOL InitIdCard(void);\r\nDescription:    初始化ID卡阅读器\r\nInput:          无\r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无\r\n</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:12:53.674985+08:00",
            "update_at": "2021-08-11T17:37:51.366162+08:00"
        },
        {
            "id": 69,
            "productname": "EloamView",
            "functionname": "IC卡",
            "name": "初始化IC卡阅读器",
            "desc": "<pre>\r\n<code>Function:       BOOLInitICReader(void)\r\nDescription:    初始化IC卡阅读器\r\nInput:          无\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:20:17.164077+08:00",
            "update_at": "2021-08-11T17:40:47.588552+08:00"
        },
        {
            "id": 74,
            "productname": "EloamView",
            "functionname": "磁条刷卡",
            "name": "初始化磁条刷卡阅读器",
            "desc": "<pre>\r\n<code>Function:       BOOLInitMagneticCard(void);\r\nDescription:    初始化磁条刷卡阅读器\r\nInput:          无\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:24:06.603526+08:00",
            "update_at": "2021-08-11T17:43:04.396950+08:00"
        },
        {
            "id": 79,
            "productname": "EloamView",
            "functionname": "OCR识别",
            "name": "Ocr初始化",
            "desc": "<pre>\r\n<code>Function:       BOOL InitOcr(void)\r\nDescription:    Ocr初始化      \r\nInput:          无\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:27:25.331489+08:00",
            "update_at": "2021-08-11T17:44:26.966892+08:00"
        },
        {
            "id": 83,
            "productname": "EloamView",
            "functionname": "模板识别（身份证和护照）",
            "name": "模板OCR初始化",
            "desc": "<pre>\r\n<code>Function:       BOOL InitTemplOcr(void);\r\nDescription:    模板OCR初始化    \r\nInput:          无\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:31:16.978287+08:00",
            "update_at": "2021-08-11T17:45:22.077545+08:00"
        },
        {
            "id": 86,
            "productname": "EloamView",
            "functionname": "发票识别",
            "name": "发票识别初始化",
            "desc": "<pre>\r\n<code>Function:       BOOL InitInvoice(void);\r\nDescription:    发票识别初始化 \r\nInput:          无\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:34:15.937358+08:00",
            "update_at": "2021-08-11T17:46:04.885690+08:00"
        },
        {
            "id": 90,
            "productname": "EloamView",
            "functionname": "书籍展平",
            "name": "书籍自动展平",
            "desc": "<pre>\r\n<code>Function:       BOOL BookAutoFlat(LPCTSTR Source, LPCTSTR Processed_Left, LPCTSTR Processed_Right, LONG RemoveFinger, LONG DoublePage);\r\nDescription:    书籍自动展平\r\nInput:          Source 源图片路径 \r\n                Processed_Left 展平后左页图片保存路径 \r\n                Processed_Right 展平后右页图片保存路径 \r\n                RemoveFinger 是否去手指 0 否；1 是 \r\n                DoublePage 是否左右页保存成两张图片 0 否；1 是\r\nOutput:         无   \r\nReturn:         TRUE表示成功 FALSE表示失败\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:36:43.641896+08:00",
            "update_at": "2021-08-11T17:47:08.509301+08:00"
        },
        {
            "id": 91,
            "productname": "EloamView",
            "functionname": "摄像头硬件参数获取和设置",
            "name": "获取调节视频数据",
            "desc": "<pre>\r\n<code>Function:       LONG GetVideoProcAmp(LONG iDev, LONG nProp, LONG nValue);\r\nDescription:    获取调节视频数据\r\nInput:          iDev 摄像头索引0表示主摄像头 1表示副摄像头\r\n                nProp视频的各个属性，0x1表示亮度，0x2表示对比度，0x3表示饱和度，0x4表示色调, 0x5表示清晰度，0x6表示伽马，0x7表示白平衡，0x8表示逆光对比，0x9表示启用颜色， 0xA 表示增益 \r\n                    nValuenProp对应的值的类型，0x1表示最小值，0x2表示最大值，0x3表示步长，0x4表示默 认值，0x5表示实际值，0x6表示是否自动设置 \r\nOutput:         无   \r\nReturn:         返回属性对应值\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:39:19.921475+08:00",
            "update_at": "2021-08-11T17:48:49.535622+08:00"
        },
        {
            "id": 95,
            "productname": "EloamView",
            "functionname": "条码（二维码）识读器",
            "name": "初始化扫码器设备",
            "desc": "<pre>\r\n<code>Function:       BOOL InitScanner(void);\r\nDescription:    初始化扫码器设备\r\nInput:          无\r\nOutput:         无   \r\nReturn:         成功返回TRUE，失败返回FALSE\r\nOthers:         无</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:42:07.321986+08:00",
            "update_at": "2021-08-11T17:50:10.566051+08:00"
        },
        {
            "id": 101,
            "productname": "EloamView",
            "functionname": "加密（部分设备适用）",
            "name": "设置设备唯一编号",
            "desc": "<pre>\r\n<code>Function:       BOOL SetEncryptedNumber(LONG SetFlat, LPCTSTR EncryptedNumber);\r\nDescription:    设置设备唯一编号\r\nInput:          SetFlat设置标志，0为关闭，1为开启\r\n                EncryptedNumber要设置的设备编号\r\nOutput:         无   \r\nReturn:         成功返回TRUE，失败返回FALSE\r\nOthers:         配合硬件烧录编号，用于控制摄像头开关</code></pre>\r\n\r\n<p>&nbsp;</p>",
            "index": 0,
            "create_at": "2021-06-19T16:46:28.994638+08:00",
            "update_at": "2021-08-11T17:51:56.900044+08:00"
        }
    ]
}

const windowssdklog = {
    "count": 5,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 6,
            "sdkname": "WebCamera",
            "version": "v1.0.4",
            "desc": "拍照保存本地时：\r\n1.检查传入路径是否合法\r\n2.检查路径是否包含文件夹\r\n3.传入的路径合法并包含文件夹，在创建图片的同时，创建文件夹",
            "create_at": "2021-08-03T18:15:03.400867+08:00"
        },
        {
            "id": 5,
            "sdkname": "WebCamera",
            "version": "v1.0.4",
            "desc": "修改拍照接口，filepath传空，拍摄的本地图片持久化，不做删除",
            "create_at": "2021-07-22T15:51:37.961822+08:00"
        },
        {
            "id": 4,
            "sdkname": "EloamDll",
            "version": "v2.2.4",
            "desc": "1.集成高拍仪基础功能\r\n2.集成身份证相关接口\r\n3.集成指纹相关接口\r\n4.集成签字相关接口",
            "create_at": "2021-07-05T16:11:35.145977+08:00"
        },
        {
            "id": 3,
            "sdkname": "EloamView",
            "version": "v1.2.6",
            "desc": "1.集成高拍仪基础功能\r\n2.集成指纹功能\r\n3.集成身份证功能\r\n4.集成ocr功能",
            "create_at": "2021-07-05T16:07:50.178953+08:00"
        },
        {
            "id": 2,
            "sdkname": "WebCamera",
            "version": "v1.0.4",
            "desc": "1. 拍照接口增加五种色彩模式：彩色，灰色，黑白，白纸印章，去背景色五种\r\n2. 增加GW500A签字接口\r\n3. 增加主副摄像头开启关闭纠偏显示接口\r\n4. 增加放大缩小接口\r\n5. 增加读取社保卡功能",
            "create_at": "2021-06-14T00:09:06.554509+08:00"
        }
    ]
}
const windowssdkexplain = {
    "count": 4,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "sdkname": "WebCamera",
            "title": "简介",
            "desc": "<h2>简介</h2>\r\n\r\n<p>webCamera采用C++开发，将所有高拍仪功能封装成一个本地服务器。 通过发送http请求，获取对应的数据。</p>\r\n\r\n<p><br />\r\n由于IE浏览器对http请求不够友好，但是部分项目仍然在使用IE8等老旧的浏览器， 为了兼容IE与谷歌等现代浏览器，webCamera封装了两种对接方式：1.ocx；2.http。 用户可以根据自己的项目，选择集成方式。</p>\r\n\r\n<p><br />\r\n部分机型需要安装模块驱动，才能正常的使用。 比如带有二代证模块的设备，需要安装二代证驱动，才能正常使用身份证的读取。 为了简化对接的复杂度，我们将SDK打包成exe了，这样就可以一键操作，部署好使用环境。 这样开发者只需要调用对应的接口，就可以实现高拍仪的调用。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<h4>关于postman 发送请求</h4>\r\n\r\n<p>在发送请求前，需要先调用打开视频的接口，调用这个接口后，webCamera才会与设备进行连接 从而其他的请求才能获取到正确的数据。</p>",
            "index": 0,
            "create_at": "2021-06-17T00:37:37.072736+08:00",
            "update_at": "2021-08-14T23:03:46.082326+08:00"
        },
        {
            "id": 3,
            "sdkname": "EloamDll",
            "title": "简介",
            "desc": "<p><strong>SDK简介</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;EloamDll采用C++开发，将所有高拍仪功能封装成dll动态库，通过调用dll动态库接口，获取到对应的数据。</p>\r\n\r\n<p><br />\r\n<strong>支持哪些语言？调用方式是什么？</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;此SDK采用调用dll动态库的方式获取数据，所以主流语言都是支持的。包含但不限于：C++、C#、Java、Python等。</p>\r\n\r\n<p><br />\r\n<strong>适用场景</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;此SDK适用于C/S架构软件开发</p>\r\n\r\n<p><br />\r\n<strong>SDK功能</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;功能包含常规高拍仪功能（预览图像、拍照、旋转、纠偏、读取身份证等），人脸功能（活体检测、人证比对等），OCR功能等。</p>",
            "index": 0,
            "create_at": "2021-08-14T23:05:58.841209+08:00",
            "update_at": "2021-08-14T23:07:13.721974+08:00"
        },
        {
            "id": 4,
            "sdkname": "EloamView",
            "title": "简介",
            "desc": "<p><strong>SDK简介</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;EloamView采用C++开发，将所有高拍仪功能封装成ocx控件，通过加载ocx，调用对应的接口，获取到对应的数据。</p>\r\n\r\n<p><br />\r\n<strong>支持哪些语言？调用方式是什么？</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;此SDK采用调用ocx控件接口的方式获取数据，所以主流语言都是支持的。包含但不限于：C++、C#、Java、Python、JavaScript、vue等。</p>\r\n\r\n<p><br />\r\n<strong>适用场景</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;无论您的项目是C/S架构，亦或者是B/S架构，都是支持的。由于现代浏览器都不支持ocx控件，所以浏览器只支持IE。</p>\r\n\r\n<p><br />\r\n<strong>SDK功能</strong></p>\r\n\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;功能包含常规高拍仪功能（预览图像、拍照、旋转、纠偏、读取身份证等），人脸功能（活体检测、人证比对等），OCR功能等。</p>",
            "index": 0,
            "create_at": "2021-08-14T23:06:23.096264+08:00",
            "update_at": "2021-08-14T23:06:23.096264+08:00"
        },
        {
            "id": 2,
            "sdkname": "WebCamera",
            "title": "部署",
            "desc": "<h2>webCamera</h2>\r\n\r\n<p>webCamera是封装的一个本地服务器，所以所有的客户端电脑都需要安装这个控件。</p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h2>C/S架构</h2>\r\n\r\n<p>如果您的项目是C/S架构的客户端软件，那么客户端电脑除了安装webCamera，还需要安装您的软件。</p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h2>B/S架构</h2>\r\n\r\n<p>如果您的项目是B/S架构的web项目， 只需要将您的项目部署到服务器上， 客户端电脑安装webCamera控件就可以了。</p>",
            "index": 1,
            "create_at": "2021-06-17T01:05:23.240498+08:00",
            "update_at": "2021-08-11T17:13:21.476936+08:00"
        }
    ]
}

const windowssdkdownloadmessage = {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "desc": "<h3><strong>为什么SDK下载下来是exe？</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>SDK包涉及到控件的注册、模块驱动的安装等操作，为了简化对接的复杂度，方便您快速的对接集成，我们是将SDK打包成exe了，这样做到了一键操作部署环境，所以您下载下来后是一个exe执行程序。双击exe进行安装，安装后的文件夹就是SDK对接集成需要的文件。</p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h3><strong>为什么每种SDK开发包都有多个下载地址？它们有什么区别？我应该下载哪一个SDK开发包？</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>由于人脸库、ocr库文件比较大，有的项目中是不需要使用到这些库的，所以我们将同一种SDK开发包会打包成多个包，您需要使用哪些功能下载对应的SDK开发包就可以了。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol>\r\n\t<li>SDK开发包我们会打包成四种：</li>\r\n\t<li>1.开发包名称_版本号</li>\r\n\t<li>2.开发包名称_版本号_faceDetect</li>\r\n\t<li>3.开发包名称_版本号_ocr</li>\r\n\t<li>4.开发包名称_版本号_faceDetect_ocr</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<ol>\r\n\t<li>四种SDK开发包的区别：</li>\r\n\t<li>1.高拍仪基础包，包含除去人脸功能+ocr功能的所有功能。</li>\r\n\t<li>2.高拍仪基础包的基础上添加人脸功能。</li>\r\n\t<li>3.高拍仪基础包的基础上添加ocr功能</li>\r\n\t<li>4.高拍仪基础包的基础上添加人脸功能+ocr功能</li>\r\n</ol>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>您只需要根据您的项目需求，下载对应的SDK包即可。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><span style=\"color:#e74c3c\">*：如果您需要使用身份证功能，除了下载对应的SDK包，还需要硬件高拍仪配备身份证模块，才可以使用此功能</span></p>\r\n\r\n<p><span style=\"color:#e74c3c\">*：如果您需要使用指纹功能，除了下载对应的SDK包，还需要硬件高拍仪配备模块模块，才可以使用此功能</span></p>\r\n\r\n<p><span style=\"color:#e74c3c\">*：如果您需要使用人脸功能，除了下载对应的SDK包，还需要硬件高拍仪配备人脸芯片，才可以使用此功能</span></p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h3><strong>如果现有的SDK开发包不满足我的功能，我应该怎么做？</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>如果现有SDK的功能不能满足您的项目需求，您可以联系销售人员（高拍仪卖家）提出您的需求，由销售人员填写立项单交给研发部定制开发。</p>\r\n\r\n<p><br />\r\n&nbsp;</p>\r\n\r\n<h3><strong>如果demo出现bug，我可以提Issues吗？</strong></h3>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>可以的，如果您测试出demo中的bug，亦或者您对demo有什么好的建议，都是可以前往对应的demo仓库中提Issues的。Issues标题要求：SDK名称 - 开发语言 - 功能接口 - 问题。</p>",
            "create_at": "2021-08-11T16:00:03.967231+08:00",
            "update_at": "2021-08-11T16:00:03.967231+08:00"
        }
    ]
}

const windowssdkdownloadaddress = {
    "count": 11,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 3,
            "sdkname": "WebCamera",
            "download_type": "Demo",
            "title": "JavaScript_WebCamera",
            "address": "https://gitee.com/vvvj/java-script-web-camera",
            "create_at": "2021-06-27T20:16:41.449113+08:00"
        },
        {
            "id": 4,
            "sdkname": "WebCamera",
            "download_type": "SDK",
            "title": "WebCamera_EL_D_V1.0.14",
            "address": "https://console.box.lenovo.com/l/yJ4suI",
            "create_at": "2021-07-06T18:18:55.849145+08:00"
        },
        {
            "id": 5,
            "sdkname": "WebCamera",
            "download_type": "SDK",
            "title": "WebCamera_EL_D_V1.0.14_faceDetect",
            "address": "https://console.box.lenovo.com/l/a0OTv4",
            "create_at": "2021-07-06T19:13:27.231144+08:00"
        },
        {
            "id": 6,
            "sdkname": "WebCamera",
            "download_type": "SDK",
            "title": "WebCamera_EL_D_V1.0.14_OCR",
            "address": "https://console.box.lenovo.com/l/s1LDqZ",
            "create_at": "2021-07-06T19:13:51.165432+08:00"
        },
        {
            "id": 7,
            "sdkname": "EloamDll",
            "download_type": "SDK",
            "title": "eloamDll_2.2",
            "address": "https://console.box.lenovo.com/l/r1rrIe",
            "create_at": "2021-07-06T19:18:44.757442+08:00"
        },
        {
            "id": 8,
            "sdkname": "EloamDll",
            "download_type": "SDK",
            "title": "eloamDll_faceDetect_2.2",
            "address": "https://console.box.lenovo.com/l/d5Guoj",
            "create_at": "2021-07-06T19:19:04.972739+08:00"
        },
        {
            "id": 9,
            "sdkname": "EloamDll",
            "download_type": "SDK",
            "title": "eloamDll_ocr_2.2",
            "address": "https://console.box.lenovo.com/l/PH3gW3",
            "create_at": "2021-07-06T19:19:25.333727+08:00"
        },
        {
            "id": 10,
            "sdkname": "EloamView",
            "download_type": "SDK",
            "title": "EloamView_Base_1.2.6",
            "address": "https://console.box.lenovo.com/l/wJLLCs",
            "create_at": "2021-07-06T19:24:06.422058+08:00"
        },
        {
            "id": 11,
            "sdkname": "EloamView",
            "download_type": "SDK",
            "title": "EloamView_Face_1.2.6",
            "address": "https://console.box.lenovo.com/l/W0TGJ6",
            "create_at": "2021-07-06T19:24:41.140924+08:00"
        },
        {
            "id": 12,
            "sdkname": "EloamView",
            "download_type": "SDK",
            "title": "EloamView_OCR_1.2.6",
            "address": "https://console.box.lenovo.com/l/j568mS",
            "create_at": "2021-07-06T19:25:01.004787+08:00"
        },
        {
            "id": 13,
            "sdkname": "WebCamera",
            "download_type": "Demo",
            "title": "vue_webcamera",
            "address": "https://gitee.com/vvvj/vue_webcamera",
            "create_at": "2021-07-21T20:12:44.788353+08:00"
        }
    ]
}

const linuxdownloadmessage = {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 2,
            "desc": "<p>我们常见的系统是Windows系统，Windows系统又分为：xp、win7、win10等不同的版本。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>国产系统也不例外，国产系统有很多种，deepin、中标麒麟、银河麒麟、统信uos等。</p>\r\n\r\n<p>国产系统除了区分系统外，还区分CPU架构，常见的cpu架构有：兆芯、海光、inter、AMD、飞腾、鲲鹏、龙芯等。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>不同的系统和CPU都有它们各自的特性，这样就造成了，同一个软件可以在银河麒麟+飞腾CPU上使用，但是切换到统信uos+interCPU上就无法使用。所以我们在对接SDK的时候，需要注意自己使用的是什么系统，什么架构的CPU，然后下载对应的SDK，在做集成。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>系统和CPU是非常多的，我们适配的也是非常多的，为了大家可以更好的了解国产系统、CPU架构，我们对CPU型号所属架构做了以下分类，这样大家在集成SDK的时候，只需要下载对应的SDK就可以了。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img src=\"/media/upload/2021/08/14/image.png\" style=\"height:161px; width:714px\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>我们提供的SDK是web控件，需要打开浏览器，通过浏览器来访问各个接口。</p>\r\n\r\n<p>每个SDK包中会存放三个文件：1.ded安装包。2.安装教程。3.接口文档</p>\r\n\r\n<p>您可以通过安装教程来进行软件的安装，可以查看接口文档，了解各个功能对应的接口是什么。</p>\r\n\r\n<p><span style=\"color:#e74c3c\">*：温馨提示：在安装软件的过程中，如提示输入密码，请输入您自定义的用户密码，这个密码是您自己设置的，并不是我们设置的。</span></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
            "create_at": "2021-08-14T16:57:27.267465+08:00",
            "update_at": "2021-08-16T15:55:06.863145+08:00"
        }
    ]
}
const linuxsdk = {
    "count": 7,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "linux_type": "AMD",
            "name": "良田_中标麒麟X86_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
            "download": "https://console.box.lenovo.com/l/LHiuNS",
            "desc": "",
            "create_at": "2021-08-16T16:43:49.741074+08:00",
            "update_at": "2021-08-16T16:43:49.741074+08:00"
        },
        {
            "id": 2,
            "linux_type": "AMD",
            "name": "良田_UOSX86_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
            "download": "https://console.box.lenovo.com/l/LHiuNq",
            "desc": "",
            "create_at": "2021-08-16T16:56:20.715700+08:00",
            "update_at": "2021-08-16T16:56:20.715700+08:00"
        },
        {
            "id": 3,
            "linux_type": "AMD",
            "name": "良田_银河麒麟X86_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
            "download": "https://console.box.lenovo.com/l/a0OTZL",
            "desc": "",
            "create_at": "2021-08-16T16:56:45.834944+08:00",
            "update_at": "2021-08-16T16:56:45.834944+08:00"
        },
        {
            "id": 4,
            "linux_type": "ARM",
            "name": "良田_UOS飞腾_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
            "download": "https://console.box.lenovo.com/l/e1veEs",
            "desc": "",
            "create_at": "2021-08-16T16:58:07.482665+08:00",
            "update_at": "2021-08-16T16:58:07.482665+08:00"
        },
        {
            "id": 5,
            "linux_type": "ARM",
            "name": "良田_银河麒麟飞腾_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
            "download": "https://console.box.lenovo.com/l/5HhCgX",
            "desc": "",
            "create_at": "2021-08-16T16:58:31.139203+08:00",
            "update_at": "2021-08-16T16:58:31.139203+08:00"
        },
        {
            "id": 6,
            "linux_type": "MIPS",
            "name": "良田_kylin龙芯_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
            "download": "https://console.box.lenovo.com/l/I00yvO",
            "desc": "",
            "create_at": "2021-08-16T16:59:47.634702+08:00",
            "update_at": "2021-08-16T16:59:47.634702+08:00"
        },
        {
            "id": 7,
            "linux_type": "MIPS",
            "name": "良田_UOS龙芯_高拍仪+纠偏旋转+二代证+身份证正反面合并_Web控件_V1.3.7.05",
            "download": "https://console.box.lenovo.com/l/wJLLh1",
            "desc": "",
            "create_at": "2021-08-16T17:00:06.595090+08:00",
            "update_at": "2021-08-16T17:00:06.595090+08:00"
        }
    ]
}
const androiddownloadmessage = {
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 3,
            "desc": "<p>安卓系统上可以通过UVC的方式或者系统camera的方式来调用高拍仪打开视频图像，拍照等操作。在安卓系统上，我们还集成了读取身份证、ocr、纠偏裁边、人证比对、指纹、四合一、签名、评价等功能，以下是对应功能的代码及演示app：</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>打开高拍仪：openCamera</p>\r\n\r\n<p>读身份证：IDCardReader</p>\r\n\r\n<p>ocr：OCR</p>\r\n\r\n<p>纠偏裁边：RectifyingAndCutEdge</p>\r\n\r\n<p>指纹仪：zaz_V8a_(20200105)_androidstudio</p>\r\n\r\n<p>IC加密算法，人证比对demo：WithnessCheck</p>\r\n\r\n<p>签批屏和评价器：DrawingBoardView-master</p>\r\n\r\n<p>四合一：fourInOne</p>\r\n\r\n<p>密码键盘：NumberKeyboard-master</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>*：如果您需要使用人证比对功能，请使用带有IC的高拍仪，如果高拍仪不带IC，请联系销售更换成带IC的高拍仪</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>&nbsp;</p>",
            "create_at": "2021-08-15T12:21:05.449295+08:00",
            "update_at": "2021-08-16T17:31:41.808809+08:00"
        }
    ]
}
const androidapp = {
    "count": 8,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "android_type": "APP",
            "name": "ocr",
            "download": "https://console.box.lenovo.com/l/951WxV",
            "desc": "",
            "create_at": "2021-08-16T17:36:48.011991+08:00",
            "update_at": "2021-08-16T17:36:48.011991+08:00"
        },
        {
            "id": 2,
            "android_type": "APP",
            "name": "签名+评价",
            "download": "https://console.box.lenovo.com/l/l07FJm",
            "desc": "",
            "create_at": "2021-08-16T17:37:30.644210+08:00",
            "update_at": "2021-08-16T17:37:30.644210+08:00"
        },
        {
            "id": 3,
            "android_type": "APP",
            "name": "打开高拍仪",
            "download": "https://console.box.lenovo.com/l/951WxZ",
            "desc": "",
            "create_at": "2021-08-16T17:37:51.980458+08:00",
            "update_at": "2021-08-16T17:37:51.980458+08:00"
        },
        {
            "id": 4,
            "android_type": "APP",
            "name": "四合一",
            "download": "https://console.box.lenovo.com/l/31LtwC",
            "desc": "",
            "create_at": "2021-08-16T17:38:30.642972+08:00",
            "update_at": "2021-08-16T17:38:30.642972+08:00"
        },
        {
            "id": 5,
            "android_type": "APP",
            "name": "身份证",
            "download": "https://console.box.lenovo.com/l/Eny4LS",
            "desc": "",
            "create_at": "2021-08-16T17:39:14.827749+08:00",
            "update_at": "2021-08-16T17:39:14.827749+08:00"
        },
        {
            "id": 6,
            "android_type": "APP",
            "name": "纠偏裁边",
            "download": "https://console.box.lenovo.com/l/k1qTPE",
            "desc": "",
            "create_at": "2021-08-16T17:40:35.107862+08:00",
            "update_at": "2021-08-16T17:40:35.107862+08:00"
        },
        {
            "id": 7,
            "android_type": "APP",
            "name": "IC加密-人证比对",
            "download": "https://console.box.lenovo.com/l/2n6wo7",
            "desc": "",
            "create_at": "2021-08-16T17:42:09.092373+08:00",
            "update_at": "2021-08-16T17:42:09.092373+08:00"
        },
        {
            "id": 16,
            "android_type": "APP",
            "name": "指纹",
            "download": "https://console.box.lenovo.com/l/Kua1FG",
            "desc": "",
            "create_at": "2021-08-16T17:55:45.588212+08:00",
            "update_at": "2021-08-16T17:55:45.588212+08:00"
        }
    ]
}
const androidsdk = {
    "count": 9,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 9,
            "android_type": "SDK",
            "name": "OCR",
            "download": "https://console.box.lenovo.com/l/s1LDGS",
            "desc": "",
            "create_at": "2021-08-16T17:53:13.844724+08:00",
            "update_at": "2021-08-16T17:53:13.844724+08:00"
        },
        {
            "id": 10,
            "android_type": "SDK",
            "name": "身份证",
            "download": "https://console.box.lenovo.com/l/8ufSbW",
            "desc": "",
            "create_at": "2021-08-16T17:53:30.930904+08:00",
            "update_at": "2021-08-16T17:53:30.930904+08:00"
        },
        {
            "id": 11,
            "android_type": "SDK",
            "name": "IC加密-人证比对",
            "download": "https://console.box.lenovo.com/l/2n6wot",
            "desc": "",
            "create_at": "2021-08-16T17:53:55.822097+08:00",
            "update_at": "2021-08-16T17:53:55.822097+08:00"
        },
        {
            "id": 12,
            "android_type": "SDK",
            "name": "纠偏裁边",
            "download": "https://console.box.lenovo.com/l/LHiuNC",
            "desc": "",
            "create_at": "2021-08-16T17:54:18.139416+08:00",
            "update_at": "2021-08-16T17:54:18.139416+08:00"
        },
        {
            "id": 13,
            "android_type": "SDK",
            "name": "打开高拍仪",
            "download": "https://console.box.lenovo.com/l/I00yvi",
            "desc": "",
            "create_at": "2021-08-16T17:54:36.106828+08:00",
            "update_at": "2021-08-16T17:54:36.106828+08:00"
        },
        {
            "id": 14,
            "android_type": "SDK",
            "name": "四合一",
            "download": "https://console.box.lenovo.com/l/t5dICf",
            "desc": "",
            "create_at": "2021-08-16T17:54:55.571598+08:00",
            "update_at": "2021-08-16T17:54:55.571598+08:00"
        },
        {
            "id": 15,
            "android_type": "SDK",
            "name": "签名+评价",
            "download": "https://console.box.lenovo.com/l/j568DE",
            "desc": "",
            "create_at": "2021-08-16T17:55:23.460077+08:00",
            "update_at": "2021-08-16T17:55:23.460077+08:00"
        },
        {
            "id": 17,
            "android_type": "SDK",
            "name": "密码键盘",
            "download": "https://console.box.lenovo.com/l/e1veEk",
            "desc": "",
            "create_at": "2021-08-16T17:56:11.994494+08:00",
            "update_at": "2021-08-16T17:56:11.994494+08:00"
        },
        {
            "id": 18,
            "android_type": "SDK",
            "name": "指纹",
            "download": "https://console.box.lenovo.com/l/AogZBi",
            "desc": "",
            "create_at": "2021-08-16T17:57:38.051940+08:00",
            "update_at": "2021-08-16T17:57:38.051940+08:00"
        }
    ]
}
const informationretention=`name	ceshi xiangm	Text	否	
项目名称
sale_name	wnagweiping	Text	否	
销售姓名
customer_name	zhangsan	Text	否	
客户姓名
phone	11316375032	Text	否	
电话号码
email	131@132.com	Text	否	
邮箱地址
type	S1840	Text	否	
设备型号
sdk_name	EloamView	Text	否	
SDK名称
language	js	Text	否	
开发语言
content	暂时没有需求	Text	否	
项目需求`
export  {
    windowsapi, windowsproduct,
    windowssdklog, windowssdkexplain,windowsfunction,
    windowssdkdownloadmessage, windowssdkdownloadaddress,
    linuxdownloadmessage, linuxsdk, androiddownloadmessage, androidapp,
    androidsdk,informationretention
};

