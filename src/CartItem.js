import React from 'react';
//class CartItem extends React.Component{}
    /*constructor(){
        super();
        this.state={
            title:'Mobile phone',
            price:999,
            qty:1,
            img:''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
        }*/
         /*pura increaseQuantity=()=>{
            //this.state.qty +=1;

            //this.setState({
            // qty:this.state.qty +1
            //});
            //this.setState({
            //qty:this.state.qty +5
            //});

            this.setState((prevState)=>{
                return{
                qty:prevState.qty +1
            }
        },()=>{
            console.log('this.state',this.state);
        });

        this.setState((prevState)=>{
            return{
            qty:prevState.qty +1
        }
    },()=>{
        console.log('this.state',this.state);
    });
            //console.log('this',this.state);
        } pura*/
        /*pura decreaseQunatity=()=>{
            //this.state.qty -=1;
            const{qty}=this.state;
            if(qty===0){
                return;
            }
           // this.setState({
            //   qty:this.state.qty -1
            //})

        this.setState((prevState)=>{
            return{
            qty:prevState.qty -1
            }
        });
            console.log('this',this.state);
        }pura*/
    //render(){}
      const CartItem=(props)=>{
        //console.log('this.props',this.props);
        //this remove from props.product b/c now func, not class
        const{title,price,qty}=props.product;
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        return (
            <div className="cart-item">
           <div className="left-block">
           <img  alt="" style={styles.image} src={product.img} />
           </div>
           <div className="right-block">
           <div style={{fontSize:25}}>{title}</div>
           <div style={{color:'blue'}}>Rs {price}</div>
           <div style={{color:'green'}}>Qty:{qty}</div>
           <div className="cart-item-actions">
           <img  
           alt="increase" 
           className="action-icons"
           src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
           //onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
           onClick={()=>onIncreaseQuantity(product)}
           />
           <img 
           alt="Decrease" 
           className="action-icons" 
           src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
           //onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
           onClick={()=>onDecreaseQuantity(product)}
           />
           <img 
            alt="Delete" 
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            //onClick={()=>this.props.onDeleteProduct(this.props.product)}
            onClick={()=>onDeleteProduct(product.id)}
            />
           </div>
           </div>
            </div>
        );
    }
const styles={
    image:{
        height:100,
        width:100,
        borderRadius:4,
        background:'red'
    }
}
export default CartItem;