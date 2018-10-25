import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { fetchCategories } from "../../redux/actions/categories";

import LoadingState from "../states/LoadingState";

class Category extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const { category } = this.props;
    if (category.name === undefined) {
      return <LoadingState message="Fetching categories..." />;
    }
    return (
      <div className="page vh">
        <Container>
          <Row>
            <Col sm={{ size: 6, offset: 3 }}>
              <h1>{this.props.match.params.name}</h1>
              <hr />
            </Col>
            <Col>
              <h2>{this.props.category}</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { match } = props;
  if (match.params.name) {
    return {
      category: state.categories.results.filter(
        item => item.category_name === match.params.name
      )
    };
  }

  return { category: null };
}
export default connect(
  mapStateToProps,
  { fetchCategories }
)(Category);
