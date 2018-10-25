import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import LoadingState from "../states/LoadingState";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";

import { fetchCategories } from "../../redux/actions/categories";

class Categories extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const categories = this.props.categories;
    if (categories.count === undefined) {
      return <LoadingState message="Fetching categories..." />;
    } else {
      return (
        <div className="page ">
          <Container>
            <Row>
              <Col sm={{ size: 6, offset: 3 }}>
                <h1>Media Categories</h1>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 6, offset: 3 }} className="playlist">
                {categories.results.map(item => (
                  <Row key={item.id}>
                    <Col>
                      <div className="video-details">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                      </div>
                      <Link to={`/categories/${item.name}`}>
                        <Button color="danger">
                          <Ionicon
                            icon="ios-play"
                            fontSize="15px"
                            color="#C9C9C9"
                          />
                          Explore
                        </Button>
                      </Link>
                      <hr />
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

export default connect(
  mapStateToProps,
  { fetchCategories }
)(Categories);
