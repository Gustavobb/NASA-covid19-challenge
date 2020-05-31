import React from "react";
import { Grommet, Box, Text, Select } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOptions: ["CO2", "Water", "1", "2", "3"],
      options: ["CO2", "Water", "1", "2", "3"],
      value: "",
    };
  }

  render() {
    return (
      <Grommet theme={customTheme}>
        <Box align="center" pad="large">
          <Text style={{ fontSize: "2vh", letterSpacing:"1.5px" }}> Co2 </Text>
          <Text style={{ fontSize: "1.5vh", letterSpacing:"1.5px" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum purus ac velit pellentesque eleifend </Text>
          <Select
            font
            size="medium"
            placeholder="Select"
            value={this.state.value}
            options={this.state.options}
            onChange={({ option }) => this.setState({ value: option })}
            onClose={() => this.setState({ options: this.state.searchOptions })}
            onSearch={(text) => {
              const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
              const exp = new RegExp(escapedText, "i");
              this.setState({ options: this.state.searchOptions.filter(o => exp.test(o))});
            }}
          />
        </Box>
      </Grommet>
    );
  }
}

const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      focus: "#C6EC5B",
    },
  },
});

export default Home;
