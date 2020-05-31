import React from "react";
import "./App.css";
const Button = (props) => {
  return (
    <div
      onClick={() => props.onClick(props.value)}
      className="normal   d-flex justify-content-center align-items-center"
    >
      {props.value}
    </div>
  );
};
const ResultButton = (props) => {
  return (
    <div
      onClick={() => props.onClick()}
      className="result  d-flex justify-content-center align-items-center"
    >
      {props.value}
    </div>
  );
};
const ResetButton = (props) => {
  return (
    <div
      onClick={() => props.onClick()}
      className="reset d-flex justify-content-center align-items-center"
    >
      {props.value}
    </div>
  );
};

class App extends React.Component {
  state = { currentVal: "0", result: 0, preVal: "0", evaluated: true };
  onClick = (val) => {
    if (this.state.evaluated) {
      let expression = this.state.currentVal.replace(/x/g, "*");
      const operatorsEnd = /[*/+]$/g;
      if (this.state.currentVal === "0") {
        this.setState({ currentVal: val });
      } else if (
        (operatorsEnd.test(expression) &&
          (val === "/" || val === "x" || val === "+")) ||
        (/[-]$/g.test(expression) &&
          (val === "/" || val === "x" || val === "+" || val === "-"))
      ) {
        expression = expression.slice(0, -1);
        this.setState({ currentVal: expression + val });
      } else {
        this.setState({ currentVal: this.state.currentVal + val });
      }
    }
    if (this.state.currentVal.length === 18) {
      this.setState({
        currentVal: "Limit Exceeded",
        preVal: this.state.currentVal,
        evaluated: !this.state.evaluated,
      });
      setTimeout(
        () =>
          this.setState({
            currentVal: this.state.preVal,
            evaluated: !this.state.evaluated,
          }),
        250
      );
    }
  };
  reset = () => {
    this.setState({ currentVal: "0", result: 0 });
  };
  calculate = () => {
    let expression = this.state.currentVal.replace(/x/g, "*");
    const operatorsEnd = /\w[*/+-]+$/g;
    if (operatorsEnd.test(expression)) {
      expression = expression.replace(/[+-/*]+$/, "");
      this.setState({
        currentVal: eval(expression).toString(),
        result: expression + "=" + eval(expression).toString(),
      });
    } else if (/^[+-/*]+$/g.test(expression)) {
      this.setState({ result: "0", currentVal: "0" });
    } else if (/^[/*]+/g.test(expression)) {
      expression = expression.replace(/^[/*]+/g, "");
      this.setState({ currentVal: eval(expression).toString() });
    } else {
      this.setState({
        result: expression + "=" + eval(expression).toString(),
        currentVal: eval(expression).toString(),
      });
    }
  };
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ background: "black", height: "100vh" }}
      >
        <div>
          <div>
            <h1 className="text-light display-1">Try out my Calculator!</h1>
          </div>
          <div
            className="container bg-dark my-5"
            style={{
              width: "350px",
              color: "white",
              border: "3px purple solid",
              borderRadius: "10px",
            }}
          >
            <div className="resultDisplay mt-2 pl-2 d-block">
              {this.state.result}
            </div>
            <div className="display pl-2 d-block">{this.state.currentVal}</div>
            <div className="row px-2 pt-2">
              <div className="col-6 p-0">
                <ResetButton value="AC" onClick={this.reset} />
              </div>
              <div className="col p-0">
                <Button value="/" onClick={this.onClick} />
              </div>
              <div className="col p-0">
                <Button value="x" onClick={this.onClick} />
              </div>
            </div>
            <div className="row px-2">
              <div className="col p-0">
                <Button value="7" onClick={this.onClick} />
              </div>
              <div className="col p-0">
                <Button value="8" onClick={this.onClick} />
              </div>
              <div className="col p-0">
                <Button value="9" onClick={this.onClick} />
              </div>
              <div className="col p-0">
                <Button value="-" onClick={this.onClick} />
              </div>
            </div>
            <div className="row px-2">
              <div className="col p-0">
                <Button value="4" onClick={this.onClick} />
              </div>
              <div className="col p-0">
                <Button value="5" onClick={this.onClick} />
              </div>
              <div className="col p-0">
                <Button value="6" onClick={this.onClick} />
              </div>
              <div className="col p-0">
                <Button value="+" onClick={this.onClick} />
              </div>
            </div>
            <div className="row px-2">
              <div className="col-9">
                <div className="row">
                  <div className="col p-0">
                    <Button value="1" onClick={this.onClick} />
                  </div>
                  <div className="col p-0">
                    <Button value="2" onClick={this.onClick} />
                  </div>
                  <div className="col p-0">
                    <Button value="3" onClick={this.onClick} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-8 p-0">
                    <Button value="0" onClick={this.onClick} />
                  </div>
                  <div className="col p-0">
                    <Button value="." onClick={this.onClick} />
                  </div>
                </div>
              </div>
              <div className="col-3 pb-2 p-0">
                <ResultButton onClick={this.calculate} value="=" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
