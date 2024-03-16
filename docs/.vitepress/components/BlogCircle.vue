<!-- .vitepress/components/BlogCircle.vue -->
<template>
    <div id="hexo-circle-of-friends-root"></div>
</template>

<script>
export default {
    name: 'BlogCircle',
    mounted() {
        const UserConfig = {
            // 填写你的api地址  
            private_api_url: 'http://127.0.0.1:8000/',
            // 点击加载更多时，一次最多加载几篇文章，默认10  
            page_turning_number: 12,
            // 头像加载失败时，默认头像地址  
            error_img: 'https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c',
            // 进入页面时第一次的排序规则  
            sort_rule: 'created'
        };

        // 将UserConfig挂载到当前组件实例上，或者根据需要挂载到window对象上  
        this.UserConfig = UserConfig;

        // 引入外部CSS样式表  
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/gh/zhheo/JS-Heo@master/mainColor/heoMainColor.css';
        document.head.appendChild(link);

        // 引入外部JavaScript脚本  
        const scripts = [
            'https://cdn.jsdelivr.net/gh/zhheo/JS-Heo@master/moments5/app.min.js',
            'https://cdn.jsdelivr.net/gh/zhheo/JS-Heo@master/moments5/bundle.js'
        ];

        scripts.forEach(script => {
            const s = document.createElement('script');
            s.src = script;
            s.async = true;
            document.body.appendChild(s);
        });
    }
};  
</script>

<style scoped>
/* 可以在这里添加一些组件内部使用的样式 */
</style>