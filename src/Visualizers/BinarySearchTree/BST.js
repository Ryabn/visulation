export class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert = (data) => {
        let node = {
            data : data,
            left : null,
            right: null
        };
        this.root = insert_helper(this.root, node);
    }
    display = () => {
        console.log(this.root);
    }
}

function insert_helper(root, node){
    if(root == null){
        root = node;
        return root;
    } 
    if(node.data < root.data){
        root.left = insert_helper(root.left, node);
        return root;
    }
    if(node.data > root.data){
        root.right = insert_helper(root.right, node);
        return root;
    }
}
export default BinarySearchTree;