<template>
  <div>
    <h6>About Notes 4.0</h6>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
#container {
  height: 400px;
  width: 400px;
  position: relative;
}
#image {
  position: absolute;
  left: 0;
  top: 0;
}
#text {
  z-index: 100;
  position: absolute;
  color: black;
  font-size: 24px;
  font-weight: bold;
  left: 150px;
  top: 350px;
}

</style>
