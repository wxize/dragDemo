<template>
    <el-table
        :data="conf"
    >
        <el-table-column
            prop="name"
            label="属性名"
        ></el-table-column>
        <el-table-column
            prop="value"
            label=""
        >
            <template slot-scope="scope">
                <el-switch
                    v-if="typeof scope.row.value == 'boolean'"
                    v-model="scope.row.value"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                >
                </el-switch>
                <el-input
                    v-else
                    placeholder="none"
                    v-model="scope.value"
                    clearable>
                </el-input>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {

    props: {
        conf: {
            type: Array,
            default: () => []
        }
    }
}
</script>