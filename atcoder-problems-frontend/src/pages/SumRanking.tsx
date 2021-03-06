import React from "react";
import Ranking from "../components/Ranking";
import State from "../interfaces/State";
import { RankingEntry } from "../interfaces/RankingEntry";
import { List } from "immutable";
import { Dispatch } from "redux";
import { requestSumRanking } from "../actions";
import { connect } from "react-redux";

interface Props {
  ranking: List<RankingEntry>;
  requestData: () => void;
}

class SumRanking extends React.Component<Props> {
  componentDidMount(): void {
    this.props.requestData();
  }
  render() {
    return <Ranking title="Rated Point Ranking" ranking={this.props.ranking} />;
  }
}

const stateToProps = (state: State) => ({
  ranking: state.sumRanking.map(r => ({
    problem_count: r.point_sum,
    user_id: r.user_id
  }))
});

const dispatchToProps = (dispatch: Dispatch) => ({
  requestData: () => dispatch(requestSumRanking())
});

export default connect(
  stateToProps,
  dispatchToProps
)(SumRanking);
