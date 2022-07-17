<template>
  <my-table
    :table-header="tableHeader"
    :table-data="tableData"
    @submit="editData"
  />
</template>


<script>
import {
  defineComponent,
  getCurrentInstance,
  ref
} from 'vue'
import MyTable from '@/components/PublicTableEditNew/MyTable.vue'

// interface TableDataType {
//   name: string
//   age: number
//   gender: string
//   math: number
//   chinese: number
//   index?: number | any
// }

export default defineComponent({
  name: 'PublicTableEditNew',
  components: {
    MyTable
  },
  props: {},
  setup() {

    const tableHeader = ref([
      {
        prop: 'name',
        label: '名字',
        editTable: false
      },
      {
        prop: 'age',
        label: '年龄',
        editTable: false
      },
      {
        prop: 'gender',
        label: '性别',
        editTable: false
      },
      {
        prop: 'math',
        label: '数学',
        editTable: true
      },
      {
        prop: 'chinese',
        label: '语文',
        editTable: true
      },
    ])

    // const tableData: TableDataType[]= [
    // const tableData = ref<TableDataType[]>([
    const tableData = ref([
      {
        name: '张三',
        age: 18,
        gender: '男',
        math: 98,
        chinese: 90
      },
      {
        name: '李思',
        age: 19,
        gender: '女',
        math: 100,
        chinese: 95
      },
      {
        name: '张三',
        age: 18,
        gender: '男',
        math: 98,
        chinese: 90
      },
      {
        name: '张三',
        age: 18,
        gender: '男',
        math: 98,
        chinese: 90
      },
      {
        name: '张三',
        age: 18,
        gender: '男',
        math: 98,
        chinese: 90
      },
    ])


    // const editData = (index: any, prop: any, label: any, value: any)=> {
    const editData = (index, prop, label, value)=> {
      if (tableData.value[index][prop] !== label) {
        const cfm = window.confirm(`
        您确定要将数据下标为${index}项，${prop}字段的内容修改为${value}吗`)

        if (cfm) {
          tableData.value = tableData.value.map((item, idx) => {
            index === idx && (item.prop = value)

            return item
          })
        }
      }
    }

    return {
      tableHeader,
      tableData,

      editData
    }
  }
})
</script>

<style scoped lang="scss">

</style>
