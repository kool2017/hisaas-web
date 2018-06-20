import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [{
                    path: '/',
                    // component: resolve => require(['../components/page/Readme.vue'], resolve)
                    component: resolve => require(['../components/page/Main.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve) // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve) // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve) // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve) // Vue-Core-Image-Upload组件
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve) // 拖拽列表组件
                },
                {
                    path: '/usermng',
                    component: resolve => require(['../components/page/user/UserMng.vue'], resolve) // 用户管理
                },
                {
                    path: '/wkfdefine',
                    component: resolve => require(['../components/page/wkf/WkfDefine.vue'], resolve) // 工作流定义
                },
                // {
                //     path: '/wkfentity',
                //     component: resolve => require(['../components/page/wkf/WkfEntity.vue'], resolve) // 工作流实例维护
                // },
                {
                    path: '/wkfnode',
                    component: resolve => require(['../components/page/wkf/WkfNode.vue'], resolve) // 结点维护
                },
                {
                    path: '/approve',
                    component: resolve => require(['../components/page/wkf/WkfApprove.vue'], resolve) // 审批
                },
                {
                    path: '/develop-sql',
                    component: resolve => require(['../components/page/devtools/SQL.vue'], resolve) // 生成数据库sql
                },
                {
                    path: '/excel',
                    component: resolve => require(['../components/page/ExcelImportExport.vue'], resolve) // excel导入导出
                },
                {
                    path: '/develop-code',
                    component: resolve => require(['../components/page/devtools/CodeGen.vue'], resolve) // 生成代码
                },
                {
                    path:'/develop-mock',
                    component: resolve => require(['../components/page/oa/Schedular.vue'], resolve)
                },
                {
                    path:'/machine-status',
                    component: resolve => require(['../components/page/operation/MachineStatus.vue'], resolve) // 设备运行状态查询
                },
                {
                    path:'/machine-infomation',
                    component: resolve => require(['../components/page/operation/MachineInfo.vue'], resolve) // 设备信息维护
                },
                {
                    path:'/car-infomation',
                    component: resolve => require(['../components/page/operation/CarMng.vue'], resolve) // 车辆信息维护
                },
                {
                    path:'/car-booking',
                    component: resolve => require(['../components/page/operation/CarBook.vue'], resolve) // 车辆预定
                },
                {
                    path:'/car-use',
                    component: resolve => require(['../components/page/operation/CarUse.vue'], resolve) // 出车
                },
                {
                    path:'/car-back',
                    component: resolve => require(['../components/page/operation/CarBack.vue'], resolve) // 收车
                },
                {
                    path:'/repair-infomation',
                    component: resolve => require(['../components/page/operation/RepairInf.vue'], resolve) // 维修单维护
                },
                {
                    path:'/repair-repairman',
                    component: resolve => require(['../components/page/operation/RepairMan.vue'], resolve) // 维修人员维护
                },
                {
                    path:'/repair-booking',
                    component: resolve => require(['../components/page/operation/RepairBook.vue'], resolve) // 报修
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve),
            children: [{
                path: 'user/register',
                component: resolve => require(['../components/page/Register.vue'], resolve)
            }]
        }
    ]
})
