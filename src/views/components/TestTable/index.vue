<template>
  <div class="table-default">
    <TableHeader :list="list"/>
    <el-table v-loading="listLoading" ref="selectTable" :data="list" border fit highlight-current-row @selection-change="handleSelectionChange" @sort-change="handleListSort">
      <el-table-column v-if="table.tableOption.listIsShow==true" align="center" type="selection" width="50" />
      <template v-for="item in listTitle">
        <el-table-column
          v-if="item.isShow"
          :key="item.id"
          :prop="item.prop"
          :label="item.id | labelFilter"
          :width="item.id"
          :align="item.align"
          :sortable="item.isSortable==true"
        >
          <template slot-scope="scope">
            <span>{{ scope.row[item.id] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="notice-box">
      <transition name="fade-transform" mode="out-in">
        <span v-if="message != ''">{{ message }}</span>
      </transition>
    </div>
    <TableFooter :total="table.pageOption.total" @pagination="getPageData" />
  </div>
</template>

<script>
/*
  ToDo
   1. 삭제기능 추가
   2. 페이지 네이션 total / 완료
   3. 엑셀 다운로드 / 완료
   4. parseDate 할때 object key 값 자동 생성 방법 / 보류
   - listTitle 을 미리 만들어 놓으면, 애초에 정규식으로 빼버리지 않아도 된다.
   - 그리고 parse 뒤에 붙는 값을 설정해 놓으면 자동으로 type 에 따라서 parse 할 수 있도록
 */

import sample_data from 'dummy/table.json'
import TableHeader from 'views/components/TableHeader'
import TableFooter from 'views/components/TableFooter'
import _ from 'lodash'

export default {
  components: {
    TableHeader,
    TableFooter
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    labelFilter(id) {
      const labelMap = {
        id: '판매처코드',
        company: '판매처명',
        isUse: '사용여부',
        status: '업태',
        items: '종목',
        sale: '판매구분',
        phone: '대표전화',
        name: '내부담당자',
        date: '최초등록일'
      }
      return labelMap[id] || null
    }
  },
  data() {
    return {
      list: null,
      saveList: null,
      listLoading: true,
      listTitle: null,
      message: '',
      timeFunction: null,
      table: {
        tableOption: {
          listIsShow: true
        },
        titleOption: {
          isShow: true,
          width: 100,
          align: 'center',
          isSortable: true
        },
        pageOption: {
          num: 1,
          total: 0
        }
      }
    }
  },
  created() {
    this.saveList = sample_data
    this.table.pageOption.total = this.saveList.length
    this.parseData()
    this.setListId()
    this.fetchData(1)
  },
  methods: {
    fetchData(num) {
      // console.log(num)
      this.listLoading = true
      const pageInit = num * 10
      this.list = this.saveList.filter((value, index) => {
        return index < pageInit && index >= pageInit - 10
      })
      this.listLoading = false
    },
    parseData() {
      this.saveList = this.saveList.map((value) => {
        if (value.date != null) {
          value.parseDate = Date.parse(value.date)
        }
        return value
      })
    },
    getPageData(e) {
      // console.log(e)
      // console.log(typeof (e))
      this.table.pageOption.num = e
      // console.log('check')
      this.fetchData(e)
      this.message = 'success'
      if (this.timeFunction != null) {
        clearTimeout(this.timeFunction)
      }
      this.timeFunction = setTimeout(() => {
        this.message = ''
        this.timeFunction = null
      }, 2000)
    },
    handleSelectionChange(e) {
      console.log(e)
    },
    handleListSort(e) {
      // console.log(e)
      if (e.order === 'ascending') {
        // console.log('ascending')
        this.saveList = _.sortBy(this.saveList, [e.prop])
      } else if (e.order === 'descending') {
        // console.log('descending')
        this.saveList = _.sortBy(this.saveList, [e.prop]).reverse()
      } else {
        this.saveList = _.sortBy(this.saveList, ['id'])
      }
      this.fetchData(this.table.pageOption.num)
    },
    setListId() {
      this.listTitle = _.keysIn(this.saveList[0])
      this.listTitle = _.map(this.listTitle, (value, index, array) => {
        const option = {
          id: value,
          prop: value,
          ...this.table.titleOption
        }
        if (value === 'date') {
          option.prop = 'parse' + value.charAt(0).toUpperCase() + value.slice(1)
          // console.log(option.prop)
        }
        const reg = /^parse\w+$/
        // console.log(reg.test(value))
        if (reg.test(value)) {
          return false
        }
        return option
      })
    }
  }
}
</script>

<style scoped>

</style>
