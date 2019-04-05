<template>
  <div class="sidebar-container">
    <button class="btn-hamburger"/>
    <a href="#" class="home-logo">
      <span class="blind">logo</span>
    </a>
    <user-status />
    <sidebar-list :list="items">
      <template slot="header">
        <h3 class="list-title">나의 메뉴</h3>
        <a href="#" class="link-setting"/>
      </template>
    </sidebar-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarList from '../SidebarList'
import UserStatus from '../UserStatus'

export default {
  components: { SidebarList, UserStatus },
  data() {
    return {
      items: [
        '공급처/가맹점관리',
        '판매처관리',
        '상품정보 관리',
        '발급요청서 관리',
        '판매처 정산(BTOB)',
        '판매처 정산(BTOC)',
        '결제구분관리'
      ]
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style scoped>
  .sidebar-container {
    background-color: blue;
  }
  .btn-hamburger {
    float: right;
    width: 50px;
    height: 50px;
    background-image: url("../../../../assets/images/menu-33x18.png");
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: center;
  }
  .home-logo {
    display: block;
    height: 88px;
    margin-top: 70px;
    margin-bottom: 62px;
    background-image: url("../../../../assets/images/logo-147x88.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .list-title {
    display: inline-block;
    color: #ffffff;
  }
  .link-setting {
    float: right;
    width: 50px;
    height: 50px;
    background-image: url("../../../../assets/images/setting-20x20.png");
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: center;
  }
</style>
