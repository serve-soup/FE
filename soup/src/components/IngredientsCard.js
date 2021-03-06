import React, { useState, useEffect } from "react";

import axiosWithAuth from "../components-york/axiosWithAuth";

import { Link } from "react-router-dom";
const IngredientsCard = props => {
  // <Link
  //           to={{
  //             pathname: `/recipes/edit/${this.props.recipeID}`,
  //             recipeID: this.props.recipeID
  //           }}
  //           key={this.props.recipeID}
  //         >

  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://server-soup.herokuapp.com/api/inventory")
      .then(res => {
        setIngredient(res.data);
      })
      .catch(err => {
        console.log("Danger, Danger!", err);
      });
  }, []);

  return (
    <div>
      <div className="page">
        {props.card.map(item => {
          return (
            <div className="card" key={item.id}>
              <h3 className="name">{item.item_name}</h3>
              <h4 className="quantity">
                <p className="Q-title">
                  <strong>Quantity: </strong>
                </p>{" "}
                {item.quantity}
              </h4>
              <h4 className="unit">
                <p className="U-title">
                  <strong>Unit: </strong>
                </p>
                {item.unit}
              </h4>
              <h4 className="price">
                <p className="P-title">
                  <strong>Price: </strong>
                </p>
                {item.price} cents
              </h4>
              <h4 className="category">
                <p className="C-title">
                  <strong>Category: </strong>
                </p>
                {item.cat_name}
              </h4>
              <h4 className="kitchen">
                <p className="K-title">
                  <strong>Kitchen: </strong>
                </p>
                {item.kit_name}
              </h4>
              <div>
                <Link
                  to={{ pathname: `/update-item/${item.id}`, state: { item } }}
                >
                  Edit
                </Link>
              </div>
              <div
                onClick={event => props.plus(item.id, event)}
                className="countButtons"
              >
                +
              </div>
              <div
                onClick={event => props.minus(item.id, event)}
                className="countButtons"
              >
                -
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IngredientsCard;

// const IngredientsCard = props => {
// const [item, setInventory] = useState({});

// useEffect(() => {
//   axiosWithAuth()
//     .get("https://server-soup.herokuapp.com/api/inventory")
//     .then(res => {
//       setInventory(res.data);
//     })
//     .catch(err => {
//       console.log("Danger, Danger!", err);
//     });
// }, []);

//   return (
//     <div>
//       <div className="page">
//         {props.card.map(item => {
//           return (
//             <div className="card" key={item.id}>
//               <h3 className="name">{item.item_name}</h3>
//               <h4 className="quantity">
//                 <p className="Q-title">
//                   <strong>Quantity: </strong>
//                 </p>
//                 {item.quantity}
//               </h4>
//               <h4 className="unit">
//                 <p className="U-title">
//                   <strong>Unit: </strong>
//                 </p>
//                 {item.unit}
//               </h4>
//               <h4 className="price">
//                 <p className="P-title">
//                   <strong>Price: </strong>
//                 </p>
//                 {item.price} cents
//               </h4>
//               <h4 className="category">
//                 <p className="C-title">
//                   <strong>Category: </strong>
//                 </p>
//                 {item.cat_name}
//               </h4>
//               <h4 className="kitchen">
//                 <p className="K-title">
//                   <strong>Kitchen: </strong>
//                 </p>
//                 {item.kit_name}
//               </h4>
//               <div onClick={props.plus} className="countButtons">
//                 +
//               </div>
//               <div onClick={props.minus} className="countButtons">
//                 -
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default IngredientsCard;
