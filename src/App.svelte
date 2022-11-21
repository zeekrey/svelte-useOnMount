<script lang="ts">
  import onMounted from './lib/useOnMounted'

  const customValidation = (node: Node | EventTarget) => {
    node.setCustomValidity(node.value)
  }
</script>

<main>
  <input value="This is not valid" on:input={(event) => customValidation(event.currentTarget)} />
  <input value="This is not valid" use:onMounted={(node) => customValidation(node)} />
  <p>
  use:onMounted will run a provided function once the element was mounted. 
  </p>
</main>