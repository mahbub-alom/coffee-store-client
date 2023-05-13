import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee =(event)=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee ={name,quantity,photo,supplier,taste,category,details};
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
    }


  return (
    <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-2xl text-black font-bold">Add a coffee</h2>
      <form onSubmit={handleAddCoffee}> 
        {/* form name and quantity row */}
        <div className="md:flex gap-3 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered w-full"
                />
              </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex gap-3 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text" placeholder="Supplier Name" name="supplier" className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text" placeholder="taste" name="taste" className="input input-bordered w-full"
                />
              </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-3 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text" placeholder="category Name" name="category" className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text" placeholder="details" name="details" className="input input-bordered w-full"
                />
              </label>
          </div>
        </div>
        {/* form photo url */}
        <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full"
                />
              </label>
            </div>
        </div>
        <input className="btn btn-block bg-orange-600" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
