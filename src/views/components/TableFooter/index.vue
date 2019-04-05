<template>
  <div class="table__footer-box">
    <el-pagination
      :total="total"
      :current-page.sync="currentPage"
      background
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'TableFooter',
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    handleCurrentChange() {
      // console.log('change')
      // console.log('current-page : ' + this.currentPage)
      this.$emit('pagination', this.currentPage)
    }
  }
}
</script>

<style scoped>

</style>
