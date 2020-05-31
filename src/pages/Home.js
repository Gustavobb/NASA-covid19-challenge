import React from 'react';
import { Grommet, Box, TextInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            state1: 'a'
        });


    }

    render() {
        return (
            <Grommet theme={customTheme}>
                <Box direction='row' pad='small'>
                </Box>


            </Grommet>
        )
    }
}


const customTheme = deepMerge(grommet, {
    global: {
        colors: {
            focus: '#FFFFFF'
        }
    },

})

export default Home;