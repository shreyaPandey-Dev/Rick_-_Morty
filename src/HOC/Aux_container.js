// its a func componet which gets props as input
//  and return props children
// you can use props.children on 
// components that represent ‘generic boxes’ 
// and that ‘don’t know their children ahead of time’.

const aux = (props) => props.children ;
export default aux;