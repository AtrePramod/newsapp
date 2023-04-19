import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  pagesize = 12;
  apikey = "e811bc72ba1e478a88c315d376f84f93";
  state = {
    progress: 10,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              {" "}
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="general"
                pagesize={this.pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              {" "}
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="business"
                pagesize={this.pagesize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              {" "}
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="entertainment"
                pagesize={this.pagesize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              {" "}
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="general"
                pagesize={this.pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              {" "}
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="health"
                pagesize={this.pagesize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              {" "}
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="science"
                pagesize={this.pagesize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              {" "}
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                key="sports"
                pagesize={this.pagesize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              {" "}
              <News
                setProgress={this.setProgress}
                apikey={this.apikey}
                pagesize={this.pagesize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
