import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };
  return <div style={styles}></div>;
}
Card.propTypes = {
  cardColor: PropTypes.oneOf(["blue" && "red"]).isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number,
};

Card.defaultProps = {
  cardColor: "blue",
  height: 900,
};

// class Card extends React.Component {
//     static defaultProps = {
//         cardColor: "blue",
//         height: 100,
//         width: 100
//     }

//     render() {
//         const styles = {
//             backgroundColor: this.props.cardColor,
//             height: this.props.height,
//             width: this.props.width
//         }

//         return (
//             <div style={styles}></div>
//         )
//     }
// }

export default Card;
