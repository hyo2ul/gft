<template>
  <div class="user-status">
    <span>홍길동</span>
    <span>시스템 관리자</span>
    <div>
      <div class="images-wrap">
        <img src="" alt="">
      </div>
      <button class="btn-exit">
        <span class="blind">나가기</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.user-status {
  display: block;
  height: 75px;
  background-color: #0f4984;
}
.user-status span {
  color: #ffffff;
}
</style>
