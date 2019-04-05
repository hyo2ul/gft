<template>
  <download-excel
    :fetch="fetchData"
    :fields="listTitle"
    class="test1"
    worksheet="My Worksheet"
    name="filename.xls">
    <!--Download Excel (you can customize this with html code!)-->
  </download-excel>
</template>

<script>
import JsonExcel from 'vue-json-excel'
import { keys } from 'lodash'

export default {
  name: 'DownloadExcelButton',
  components: {
    'download-excel': JsonExcel
  },
  filters: {
    setKeyFilter(key) {
      const keyMap = {
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
      return keyMap[key]
    }
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      json_fields: {
        'Complete name': 'name',
        'City': 'city',
        'Telephone': 'phone.mobile',
        'Telephone 2': {
          field: 'phone.landline',
          // callback function for data formatting
          callback: (value) => {
            return `Landline Phone - ${value}`
          }
        }
      },
      json_meta: [
        [
          {
            'key': 'charset',
            'value': 'utf-8'
          }
        ]
      ],
      listTitle: {}
    }
  },
  watch: {
    list: function() {
      this.setFields()
    }
  },
  created() {
    this.setFields()
  },
  methods: {
    async fetchData() {
      // 여기에 axios 로 데이타를 받아서 가공 하면 될듯
      // const response =
      // return this.json_data
      return this.list
    },
    setFields() {
      // console.log(this.list[0])
      const tempList = keys(this.list[0])
      // console.log(tempList)
      const tempObj = {}
      tempList.map((value) => {
        // 이부분은 조금 정상적인 방법 사용할 수 있으면 바꾸자 / 안이쁘다
        const tempKey = this.$options.filters.setKeyFilter(value)
        // console.log(tempKey)
        if (tempKey !== undefined) {
          tempObj[tempKey] = value
        }
      })
      // console.log(tempObj)
      this.listTitle = tempObj
    }
  }
}
</script>

<style scoped>

</style>
