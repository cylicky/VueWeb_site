<template>
    <div class="site-subnav">
        <router-link :class="item.name.toLowerCase() === activeMenu ? 'active' : ''"
            :to="'/' + $route.params.layout + '/' + item.name.toLowerCase()" v-for="(item, index) in list" :key="index">{{
             item.name  }}
        </router-link>
    </div>
    <div class="main-content">
        <div class="main-content-nav">
            <div v-for="(item, index) in subList" :key="index" @click="showDetail(item)">
              
                {{  item.name  }}
                <ul v-if="item.child">
                    <li :class="sub.id == detail.id ? 'active' : ''" v-for="(sub, key) in item.child" :key="key">
                        <router-link :to="`/${$route.params.page}/${activeMenu}?id=${sub.id}&cid=${item.id}`">
                            {{  sub.name  }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-content-detail" v-html="detail.desc || ''"></div>
        <div>下载</div>
    </div>
</template>
  <script >
export default {
    data() {
        return {
            activeMenu: "eloamview",
            subList: [],
            detail: {},
            list: [
                {
                    id: 1,
                    name: "EloamView",
                    desc: "<h2>简介</h2>\r\n\r\n<p>采用C++开发，将所有高拍仪功能封装成ocx控件</p>",
                    create_at: "2021-06-08T01:17:51.243055+08:00",
                },
                {
                    id: 2,
                    name: "EloamDll",
                    desc: "<h2>简介</h2>\r\n\r\n<p>提供dll进行对接</p>",
                    create_at: "2021-06-08T01:20:44.675876+08:00",
                },
                {
                    id: 3,
                    name: "WebCamera",
                    desc: "<h2>简介</h2>\r\n\r\n<p>将所有高拍仪功能封装成一个本地服务器（webCamera），当本地启动服务后，可以发送http请求，获取对应的接口数据</p>",
                    create_at: "2021-06-08T01:22:13.258799+08:00",
                },
            ],
        };
    },
    watch: {
        "$route.params.subpage"(value, old) {
            this.activeMenu = value;
        },
        "$route.query"(value, old) {
            // console.log(value, old, this.subList);
            this.setDetail(value);
        },
        activeMenu(value, old) {
            this.getList();
            console.log(value, old);
        },
    },
    mounted() {
        this.activeMenu = this.$route.params.subpage
            ? this.$route.params.subpage
            : "eloamview";
        this.getList();
    },
    methods: {
        setDetail(query) {
            const data = this.subList.filter((item) => {
                return item.id == query.cid;
            });
            if (data[0] && data[0].child) {
                const detail = data[0].child.filter((item) => {
                    return item.id == query.id;
                });
                this.detail = detail[0] || {};
            }
        },
        showDetail(data) {
            if (!data.child) {
                this.getDetail(data.id);
            }
        },
        getCurrent() {
            return this.list.filter((value) => {
                return value.name.toLowerCase() == this.activeMenu;
            })[0];
        },
        async getDetail(id) {
            try {
                const res = await fetch(`http://localhost:3000/windowsapi/${id}`).then(
                    (res) => res.json()
                );
                for (let item of this.subList) {
                    if (item.id == id) {
                        item.child = res.results;
                        if (this.$route.query && this.$route.query.id) {
                            this.detail =
                                res.results.filter((item) => {
                                    return item.id == this.$route.query.id;
                                })[0] || {};
                        } else {
                            this.detail = res.results[0];
                        }
                    }
                }
            } catch (error) { }
        },
        async getList() {
            try {
                const current = this.getCurrent();
                if (!current) {
                    return;
                }
                const res = await fetch(
                    `http://localhost:3000/windowsfunction/${current.id}`
                ).then((res) => res.json());
                if (res.results) {
                    console.log("res.results",res.results);
                    this.subList = res.results;
                    this.getDetail(res.results[0].id);
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
  <style scoped>
  </style>