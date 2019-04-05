<template>
  <div class="table__header-box">
    <div class="table__header-box__left">
      <h3 class="table-title">{{ title }}</h3>
      <el-button>일괄변경</el-button>
      <el-button>일괄삭제</el-button>
    </div>
    <div class="table__header-box__right">
      <!--<el-button>엑셀다운</el-button>-->
      <button-excel :list="list"/>
      <el-button>등록</el-button>
    </div>
  </div>
</template>

<script>
import ButtonExcel from 'views/components/ButtonExcel'

export default {
  name: 'TableHeader',
  components: {
    ButtonExcel
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
      title: '판매처 리스트'
    }
  }
}
</script>

<style scoped>

</style>
