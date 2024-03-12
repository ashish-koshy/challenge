(() => {

    class Node {
        constructor(value) {
            this.value = value;
            this.right = null;
            this.left = null;
        }
    };

    const traverseInOrder = (node) => {
        if (node !== null) {
            traverseInOrder(node.left);
            console.log(node.value);
            traverseInOrder(node.right);
        }
    };

    const traversePreOrder = (node) => {
        if (node !== null) {
            console.log(node.value);
            traversePreOrder(node.left);
            traversePreOrder(node.right);
        }
    };

    const traversePostOrder = (node) => {
        if (node !== null) {
            traversePostOrder(node.left);
            traversePostOrder(node.right);
            console.log(node.value);
        }
    };

    const insertNode = (node, value) => {
        if (value > node.value) {
            if (node.right === null) {
                node.right = new Node(value);
                return;
            } else 
                insertNode(node.right, value);
        } else if (value < node.value) {
            if (node.left === null) {
                node.left = new Node(value);
                return;
            } else 
                insertNode(node.left, value);
        } else
            node.value = value;
    };

    const arr = [4, 1, 5, 3, 2];

    const root = new Node();

    for (const item of arr)
        insertNode(root, item);

    insertNode(root, 0);

    console.log('\nIn-order traversal :');
    traverseInOrder(root);
    console.log('\nPre-order traversal :');
    traversePreOrder(root);
    console.log('\nPost-order traversal :');
    traversePostOrder(root);
})();