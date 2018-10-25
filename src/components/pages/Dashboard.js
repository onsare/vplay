import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { fetchVideos } from "../../redux/actions/videos";
import LoadingState from "../../components/states/LoadingState";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { videos } = this.props;

    if (videos.count === undefined) {
      return <LoadingState message="Fetching media..." />;
    }
    return (
      <div className="page ">
        <Container>
          <Row>
            <Col sm="7" style={{ height: "100%" }}>
              <div>
                <video width="600" height="350" controls>
                  {/* <source
                    src={
                      
                    }
                    type="video/mp4"
                  /> */}
                  Your browser does not support the video tag.
                </video>
              </div>
            </Col>
            <Col sm={{ size: 5 }} className="playlist">
              {videos.results.map(item => (
                <Row key={item.id}>
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
    videos: state.videos
  };
}

export default connect(
  mapStateToProps,
  { fetchVideos }
)(Dashboard);
