import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { fetchVideosByCategoryId } from "../../redux/actions/videos";

import LoadingState from "../states/LoadingState";
import Moment from "react-moment";

class Category extends Component {
  state = {
    name: "",
    file_path: "",
    views: "",
    description: "",
    created: ""
  };
  componentDidMount() {
    let id = this.props.match.params.category_id;
    this.props.fetchVideosByCategoryId(id);
  }

  play = item => {
    this.setState({
      name: item.name,
      file_path: item.file_path,
      views: item.no_times_watched,
      description: item.description,
      created: item.created
    });
  };
  render() {
    const { category } = this.props;
    if (category.count === undefined) {
      return <LoadingState message="Fetching categories..." />;
    }
    return (
      <div className="page ">
        <Container>
          <Row>
            <Col sm="7" style={{ height: "100%" }}>
              <div>
                <video width="600" height="350" controls>
                  <source src={this.state.file_path} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <h1>{this.state.name}</h1>
                <h1>Views {this.state.views}</h1>
                <hr />
                <h2>Video Description</h2>
                <p>{this.state.description}</p>
                <p>
                  Posted <Moment fromNow>{this.state.created}</Moment>
                </p>
              </div>
            </Col>
            <Col sm={{ size: 5 }} className="playlist">
              {category.results.map(item => (
                <Row
                  key={item.id}
                  className="video-hover"
                  onClick={() => this.play(item)}
                >
                  <Col>
                    <div>
                      <video width="200" height="150" controls>
                        <source src={item.file_path} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </Col>
                  <Col>
                    <div className="video-details">
                      <h2>{item.name}</h2>
                      <h4>Category : {item.category_name}</h4>
                      <h4>Views {item.no_times_watched}</h4>
                    </div>
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

function mapStateToProps(state) {
  return {
    category: state.videos
  };
}

export default connect(
  mapStateToProps,
  { fetchVideosByCategoryId }
)(Category);
