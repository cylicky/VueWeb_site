<template>
    <el-row :gutter="24">
        <el-col :span="24" v-for="res in homedata">
            <el-card shadow="hover">
                <p>{{ res.title }}</p>
                <div v-for="resdata in res.classify">
                    <div>
                        <p>{{ resdata.head }}</p>
                        {{ resdata.introduce }}
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup>
import { onMounted } from "vue";
import axios from "axios";
import homedata from "@/assets/homedata.js"

// 组件挂载完成后执行的函数；
onMounted(() => {
    console.log("组件挂载完成后执行的函数");

    axios.get("/api/v1.3/windowsproduct").then(res => console.log(res.data));
});
</script>


<style scoped>
</style>


