import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from "firebase/app";
//function App (){}
class App extends React.Component {
    constructor(){
      super();
      this.state={
          products:[],
          loading:true
      };
      this.db=firebase.firestore();
  }
  componentDidMount(){
  //   firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot)=>{
  //   console.log(snapshot);
  //   snapshot.docs.map((doc)=>{
  //     console.log(doc.data())
  //   });
  //   const products=snapshot.docs.map((doc)=>{
  //     const data=doc.data();
  //     data['id']=doc.id;
  //     return data;
  //   })
  //     this.setState({
  //       products:products,
  //       loading:false
  //   })
  // });
  this.db
  .collection('products')
  // .where('price','>=',999)
  // .where('title','==','Bag')
  .orderBy('price','desc')
  .onSnapshot((snapshot)=>{
    console.log(snapshot);
    snapshot.docs.map((doc)=>{
      console.log(doc.data())
    });
    const products=snapshot.docs.map((doc)=>{
      const data=doc.data();
      data['id']=doc.id;
      return data;
    })
      this.setState({
        products:products,
        loading:false
    })
  })
  }
  handleIncreaseQuantity=(product)=>{
      console.log('Hey please increase qty of ',product);
      const{products}=this.state;
      const index=products.indexOf(product);
      // products[index].qty+=1;
      // this.setState({
      //     products:products
      // });
      const docRef=this.db.collection('products').doc(products[index].id);
docRef.update({
  qty:products[index].qty+1
})
.then(()=>{
  console.log('Updated succesfully')
})
.catch((error)=>{
  console.log('Error:',error);
})
  }
  handleDecreaseQuantity=(product)=>{
      console.log('Hey please Decrease qty of ',product);
      const{products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty===0){
          return;
      }
      // products[index].qty-=1;
      // this.setState({
      //     products:products
      // })
      const docRef=this.db.collection('products').doc(products[index].id);
docRef.update({
  qty:products[index].qty-1
})
.then(()=>{
  console.log('Updated succesfully')
})
.catch((error)=>{
  console.log('Error:',error);
})
  }
  handleDeleteProduct=(id)=>{
      // const{products}=this.state;
      // const items=products.filter((item)=>item.id!==id);
      // this.setState({
      //     products:items
      // })
      const docRef=this.db.collection('products').doc(id);
docRef
.delete()
.then(()=>{
  console.log('Deleted successfully')
})
.catch((error)=>{
  console.log('Error:',error);
})
  }
  getCartCount=()=>{
    const{products}=this.state;
    let ct=0;
    products.forEach((product)=>{
      ct+=product.qty;
    })
    return ct;
  }
  getCartTotal=()=>{
    const{products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty*product.price
    })
    return cartTotal;
  }
  render(){
    const{products,loading}=this.state;
  return (
    <div className="App">
     <Navbar count={this.getCartCount()}/>
     <Cart
     products={products}
     onIncreaseQuantity={this.handleIncreaseQuantity}
     onDecreaseQuantity={this.handleDecreaseQuantity}
     onDeleteProduct={this.handleDeleteProduct}
     />
     {loading && <h1>Loading Products...</h1>}
     <div>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
