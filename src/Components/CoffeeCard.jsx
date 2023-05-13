import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, photo, supplier, taste, category, details } =
    coffee;

  const handleRemove = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", 
              "Your coffee has been deleted.",
               "success"
               );
               const remaining=coffees.filter (cof=>cof._id !==_id);
               setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl mb-5">
      <figure>
        <img src={photo} alt="Coffee" />
      </figure>
      <div className="flex w-full justify-between pe-3">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
          <p>{details}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical gap-y-4">
            <button className="btn btn-active">view</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
            </Link>
            <button
              className="btn bg-red-600"
              onClick={() => handleRemove(_id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CoffeeCard.propTypes = {
  coffee: PropTypes.string.isRequired,
  coffees: PropTypes.string.isRequired,
  setCoffees: PropTypes.string.isRequired,
};

export default CoffeeCard;
