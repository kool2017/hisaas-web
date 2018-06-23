<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened router>
            <template v-for="menu in menus">
                <template v-if="menu.subMenus">
                    <el-submenu :index="menu.index" :key="menu.index">
                        <template slot="title">
                            <i :class="menu.icon"></i>{{ menu.title }}
                        </template>
                        <template v-for="subMenu in menu.subMenus">
                            <template v-if="subMenu.itemGroups">
                                <el-submenu :key="subMenu.index" :index="subMenu.index">
                                    <template slot="title">
                                        <i :class="subMenu.icon"></i>{{ subMenu.title }}
                                    </template>
                                    <template v-for="itemGroup in subMenu.itemGroups">
                                        <template v-if="itemGroup.items">
                                            <el-menu-item-group :index="itemGroup.index" :key="itemGroup.index" :title="itemGroup.title">
                                                <el-menu-item v-for="item in itemGroup.items" :index="item.index" :key="item.index">
                                                    {{ item.title }}
                                                </el-menu-item>
                                            </el-menu-item-group>
                                        </template>
                                        <template v-else>
                                            <el-menu-item :index="itemGroup.index" :key="itemGroup.index">
                                                {{ itemGroup.title }}
                                            </el-menu-item>
                                        </template>
                                    </template>
                                </el-submenu>
                            </template>
                            <template v-else-if="subMenu.items">
                                <el-submenu :key="subMenu.index" :index="subMenu.index" :title="subMenu.title">
                                    <el-menu-item v-for="item in subMenu.items" :index="item.index" :key="item.index">
                                        {{ item.title }}
                                    </el-menu-item>
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="subMenu.index" :key="subMenu.index">
                                    <i :class="subMenu.icon"></i>{{ subMenu.title }}
                                </el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="menu.index" :key="menu.index">
                        <i :class="menu.icon"></i>{{ menu.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: []
        }
    },
    created() {
        const self = this
        var userId = localStorage.getItem('userId')
        var input = { SYGETMENUX: [{ 'userId': userId }] }
        self.$http
            .post('/sys/getMenu', input)
            .then(function (response) {
                var pkgOut = response.data
                self.menus = pkgOut.SYGETMENUZ
            })
            .catch(function (err) {
                console.log(err)
                self.$message.error('加载菜单信息时出现异常')
            })
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '')
        }
    }
}
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    /* background: #2e363f; */
    background: #409eff;
    overflow-y: scroll;
}
.sidebar > ul {
    height: 100%;
}
</style>
