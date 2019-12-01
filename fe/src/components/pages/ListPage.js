import React, {Component} from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getSearchData} from "../../actions/modernActions";
import SearchContainer from "../../containers/SearchContainer";
import NotFoundContainer from "../../containers/NotFoundContainer";

class ListPage extends Component {
  static propTypes = {
      actions: PropTypes.object,
      state: PropTypes.object
  };

  static mapStateToProps = (state) => ({
      state: {
          searchdata: state.modernReducer.searchdata
      }
  });

  static mapDispatchToProps = (dispatch) => ({
      actions: bindActionCreators(
          {
              getSearchData
          },
          dispatch
      )
  });

  handleInputChange = (value) => {
      const {actions} = this.props;

      actions.getSearchData(value);
  };

  render() {
      const {
          state: {searchdata}
      } = this.props;
      return (
          <div
              style={{
                  marginTop: 30,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100vh"
              }}>
              <div>
                  <SearchContainer handleInputChange={this.handleInputChange}/>
              </div>
              <div>
                  <div>
                      {searchdata &&
              searchdata.data &&
              searchdata.data.map((coin, index) => (
                  <div
                      style={{
                          marginTop: 20,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "center"
                      }}
                      key={index}>
                      <span>
                    Coin Symbol:
                          {coin.symbol}
                      </span>
                      <span>
                    Coin Price:
                          {coin.price}
                      </span>
                  </div>
              ))}
                      {searchdata && searchdata.error && <NotFoundContainer/>}
                  </div>
              </div>
          </div>
      );
  }
}
export default connect(
    ListPage.mapStateToProps,
    ListPage.mapDispatchToProps
)(ListPage);
