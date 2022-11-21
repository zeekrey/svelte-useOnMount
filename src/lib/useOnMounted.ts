/**
 * Calls the provided function once the element mounts.
 * @example
 * ```html
 *  <input use:onMounted={(node) => customValidation(node)} />
 * ```
 */
const onMounted = (node: Node, callback: (node: Node) => void) =>
  callback(node);

export default onMounted;
