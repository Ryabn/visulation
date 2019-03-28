export class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    find = (data, info = 'data') => {
        return findHelper(this.root, data, info);
    }
    insert = (data) => {
        let node = {
            data : data,
            coordinate:{
                x: 1,
                y: 1
            },
            path: [{x: 1, y: 1}],
            left : null,
            right: null
        };
        this.root = insertHelper(this.root, node);
    }
    display = () => {
        console.log(this.root);
    }
}
function findHelper(root, data, info){
    if(root == null){
        return null;
    }
    if(root.data === data){
        return root[info];
    } 
    if(data < root.data){
        return findHelper(root.left, data, info);
    }
    if(data > root.data){
        return findHelper(root.right, data, info);
    }
}
function insertHelper(root, node){
    if(root == null){
        root = node;
        return root;
    } 
    node['coordinate']['y'] += 1;
    if(node.data < root.data){
        node['coordinate']['x'] = node['coordinate']['x'] * 2 - 1;
        node['path'].push({x: node['coordinate']['x'], y: node['coordinate']['y']});
        root.left = insertHelper(root.left, node);
        return root;
    }
    if(node.data > root.data){
        node['coordinate']['x'] *= 2;
        node['path'].push(node['coordinate']);
        root.right = insertHelper(root.right, node);
        return root;
    }
}
export default BinarySearchTree;