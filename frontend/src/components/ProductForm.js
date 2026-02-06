import { useState } from "react";
import axios from "axios";

export default function ProductForm(){

 const [form,setForm] = useState({
   name:"",
   price:"",
   description:""
 });

 const [imageFile,setImageFile] = useState(null);


const submit = async () => {

 const formData = new FormData();

 formData.append("name", form.name);
 formData.append("price", form.price);
 formData.append("description", form.description);
 formData.append("image", imageFile);

 if(!form.name || !form.price){
 alert("Product name and price are required");
 return;
}

 await axios.post("https://product-dashboard-5zm5.onrender.com/api/products", formData);

 window.location.reload();
};



 return(
  <div className="card shadow-sm p-3 mb-4">

   <h5>Add Product</h5>

   <div className="row mb-2">
     <div className="col">
       <input className="form-control"
         placeholder="Product name"
         onChange={e=>setForm({...form,name:e.target.value})}/>
     </div>

     <div className="col">
       <input className="form-control"
         placeholder="Price"
         onChange={e=>setForm({...form,price:e.target.value})}/>
     </div>
   </div>

   <div className="mb-2">
     <textarea className="form-control"
       placeholder="Description"
       onChange={e=>setForm({...form,description:e.target.value})}
     />
   </div>

   <div className="mb-3">
     <input type="file"
       className="form-control"
       onChange={(e)=>setImageFile(e.target.files[0])}
     />
   </div>
   

   <button className="btn btn-primary" onClick={submit}>
     Add Product
   </button>

  </div>
 );
}
