<template>
  <div id="app">
    <div id="nav">
      <div>
      <h1>img图：</h1>
      <img alt="Vue logo" src="/assets/logo.png">
      <h1>img图：</h1>
      <img alt="Vue logo" src="/assets/logo">
      </div>
      <div>
        <h1> 背景图：</h1>
        <div class="bg"></div>
      </div>

    </div>
  </div>
</template>

<style lang="scss">

#nav {
  padding: 30px;
  .bg {
    width: 200px;
    height: 200px;
    background: url('/assets/logo.png');
  }

}
</style>
