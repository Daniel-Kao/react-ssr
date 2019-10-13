import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { actions } from "./store";

const Home = props => {
  useEffect(() => {
    props.getList();
  }, []);

  return (
    <div>
      <h1>hello world</h1>
      <button onClick={() => props.getList()}>click</button>
      <div>{renderList(props.list)}</div>
    </div>
  );
};

const renderList = list => {
  return list.map(item => {
    return <div key={item.id}>{item.title}</div>;
  });
};

const mapStateToProps = state => ({
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getList() {
    dispatch(actions.getNewsList());
  }
});

Home.loadData = store => {
  return store.dispatch(actions.getNewsList());
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
