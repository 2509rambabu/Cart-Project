import React from 'react';
import CartItem from './CartItem';
//class Cart extends React.Component{
    const Cart=(props)=>{
    /*constructor(){
        super();
        this.state={
            products:[
           {
           title:'watch',
           price:99,
           qty:1,
           img:'',
           id:1
        },
        {
            title:'Mobile phone',
            price:999,
            qty:1,
            img:'',
            id:2
         },
         {
            title:'Laptop',
            price:9999,
            qty:1,
            img:'',
            id:3
         }
            ]
            
        }
    }
    handleIncreaseQuantity=(product)=>{
        console.log('Hey please increase qty of ',product);
        const{products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity=(product)=>{
        console.log('Hey please Decrease qty of ',product);
        const{products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products:products
        })
    }
    handleDeleteProduct=(id)=>{
        const{products}=this.state;
        const items=products.filter((item)=>item.id!==id);
        this.setState({
            products:items
        })
    }*/
    //render(){
        const{products}=props;
        return (
       <div className="cart">
        {products.map((product)=>{
            return (
            <CartItem 
            product={product} 
            key={product.id}
            //this changes to props
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
            />
            )
        })}
       </div>
        );
    }

export default Cart;