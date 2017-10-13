<template>
  <div>
	<div>
		<router-link to="/user/index">/user/index</router-link>
		<br>
		<router-link to="/user/content">/user/content</router-link>
		<br>
		<router-link to="/user/index/index">/user/index/index1</router-link>
		<br>
		<router-link to="/user/index/content">/user/index/content1</router-link>
		<br>

	</div>

    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>