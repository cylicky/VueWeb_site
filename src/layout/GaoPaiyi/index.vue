<template>
    <div class="gaopaiyi-content">
        <h2>高拍仪测试</h2>
        <img id="img-video" :src="`http://127.0.0.1:38088/video=stream&camidx=${idx}&time=${Math.random()}`" alt="">
        <div>
            <button @click="GrabImage">拍照</button>
        </div>
    </div>
</template>
<script >
export default {
    data() {
        return {
            idx: 0
        }
    },
    methods: {
        GrabImage() {
            let params = { filepath: "", rotate: "0", camidx: this.idx.toString(), deskew: "" };


            let data = {
                "filepath": "base64",
                "rotate": "0",      // 图像旋转角度，90的整数倍，默认："0"
                "deskew": "",      // 纠偏（主头有效），参数：0:不纠偏；1:纠偏
                "deskewval": '0',       // 纠偏像素值：正常给0，正数时多裁，负数时少裁
                "camidx": this.idx.toString(),      // 摄像头索引，参数：0:主头；1:副头
                "ColorMode": "",   // 色彩模式，图片保存本地时调用。0：彩色 1：灰色 2：黑白 3：白纸印章 4：去背景色(普通文件) 5:去背景色(身份证)
            }
            let url2 = " http://127.0.0.1:38088/video=grabimage?" + JSON.stringify(data);
            fetch(url2)
                .then((response) => response.json()) // parses response to JSON
                .then(function (myJson) {
                    console.log(myJson);
                });
            // let url = "http://127.0.0.1:38088/video=grabimage?" + JSON.stringify(data);
            // fetch(url).then(resJose => resJose.json()).then(res => console.log(res))
            console.log("123")
        }
    }
};
</script>
<style >
.gaopaiyi-content {
    height: 900px;

}

#img-video {
    width: 400px;
    height: 300px;
    margin: 0 20px;
    padding: 20px;
    box-sizing: border-box;
}
</style>
