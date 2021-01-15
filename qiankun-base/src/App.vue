    <template>
        <div id="root" class="main-container">
            <div class="main-container-menu">
                <a href="/microVue">vue</a>
                <a href="/microReact">react</a>
                <div id = "microVue"></div>
                <div id = "microReact"></div>
            </div>
        <!-- 子应用盒子 -->
        <div id="root-view" class="app-view-box" v-html="content"></div>
    </div>
    </template>

    <script>
    export default {
        name: "root-view",
        props: {
            loading: Boolean,
            content: String 
        }
    };
    </script>