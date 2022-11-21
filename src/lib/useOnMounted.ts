const onMounted = (node: Node, callback: (node: Node) => void) => {
  console.log('Mounted!');
  callback(node);
};

export default onMounted;
