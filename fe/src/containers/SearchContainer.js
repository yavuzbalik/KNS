import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchContainer extends Component {
  static propTypes = {
      handleInputChange: PropTypes.func
  };

  handleInputChange = () => {
      const {handleInputChange} = this.props;

      handleInputChange(this.search.value);
  };

  render() {
      return (
          <form>
              <input
                  style={{
                      width: 200,
                      height: 30,
                      padding: "12px 20px",
                      border: "2px solid #00abff",
                      borderRadius: 4
                  }}
                  placeholder="Search for..."
                  ref={(input) => (this.search = input)}
                  onChange={this.handleInputChange}
              />
          </form>
      );
  }
}

export default SearchContainer;
