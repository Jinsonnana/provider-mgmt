<template>
  <div class="dashboard-container">
    <div class="clearfix">
      <pan-thumb image="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" style="float: left"> 我的身份:
        <span class="pan-info-roles">管理员</span>
      </pan-thumb>
      <div class="info-container">
        <span class="display_name">管理员</span>
      </div>
    </div>
    <div>
      <img src="https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3" class="emptyGif">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    PanThumb: () => import('@/components/PanThumb')
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .emptyGif {
    display: block;
    width: 45%;
    margin: 0 auto;
  }

  .dashboard-container {
    background-color: #e3e3e3;
    min-height: 100vh;
    padding: 50px 60px 0px;
    .pan-info-roles {
      font-size: 12px;
      font-weight: 700;
      color: #333;
      display: block;
    }
    .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display_name {
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }
  }
</style>
