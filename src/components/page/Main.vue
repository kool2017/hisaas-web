<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="schart">
        <div class="content-title">供水设备图</div>
        <schart canvasId="energy" width="500" height="300" :data="data1" type="line" :options="options1"></schart>
        </div>
        <div class="schart">
        <div class="content-title">车辆状态图</div>
        <schart canvasId="car" width="500" height="300" :data="data2" type="pie" :options="options2"></schart>
        </div>
        <div class="schart">
        <div class="content-title">维修单状态图</div>
        <schart canvasId="repairBill" width="500" height="300" :data="data3" type="pie" :options="options3"></schart>
        </div>
    </div>
</template>

<script>
import Schart from 'vue-schart';
export default {
    components: {
        Schart
    },
    data: () => ({
        data1: [
            { name: '2017-01', value: 1141 },
            { name: '2017-02', value: 1499 },
            { name: '2017-03', value: 1260 },
            { name: '2017-04', value: 1170 },
            { name: '2017-05', value: 970 },
            { name: '2017-06', value: 1450 }
        ],
        data2: [
            { name: '使用中', value: 20 },
            { name: '休息', value: 10 },
            { name: '维修', value: 1 },
            { name: '保养', value: 1 },
            { name: '故障', value: 0 }
        ],
        data3: [
            { name: '待维修', value: 11 },
            { name: '维修中', value: 4 },
            { name: '已修复', value: 20 },
            { name: '退回', value: 4 }
        ],
        options1: {
            title: '供水设备能耗图',
            bgColor: '#009688',
            titleColor: '#ffffff',
            fillColor: '#e0f2f1',
            axisColor: '#ffffff',
            contentColor: '#999'
        },
        options2: {
            title: '车辆状态图',
            bgColor: '#607d8b',
            titleColor: '#ffffff',
            legendColor: '#ffffff'
        },
        options3: {
            title: '维修单状态图',
            bgColor: '#607d8b',
            titleColor: '#ffffff',
            legendColor: '#ffffff'
        }
    })
}
</script>

<style scoped>
.schart {
    width: 500px;
    display: inline-block;
}
.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
</style>
