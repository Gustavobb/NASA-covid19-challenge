import React from 'react';
import { Grommet, Box, TextInput, Text, Header, Anchor, Image } from 'grommet';
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
                <Header background='#EDEDED' pad='small'>
                    <Text textAlign='center' style={{ color: '#000000', fontSize: '2vh', letterSpacing: '1.5px' }} >Lockdown Hope</Text>
                    <Box direction='row' gap='medium' style={{ marginRight: '2vw' }}>
                        <Anchor color='#000000' label='Section 1' style={{ fontSize: '1.5vh', letterSpacing: '2px' }} />
                        <Anchor color='#000000' label='Section 2' style={{ fontSize: '1.5vh', letterSpacing: '2px' }} />
                    </Box>
                </Header>
                <Box background='#C6EC5B' direction='row' pad='xlarge' justify='center'>
                    <Box direction='row' justify='start' gap='xlarge'>
                        <Box direction='column' justify='center'>
                            <Text textAlign='center' style={{ fontSize: '3.5vh', marginBottom: '2vh', letterSpacing: '1.5px' }}>Does quarantine affect the enviroment?</Text>
                            <Text textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px' }}>The covid-19 pandemic changed several human activities.<br />
                            Maybe for the environment this has a positive meaning</Text>
                        </Box>
                        <Image style={{ width: '25vw' }} src='https://picsum.photos/300/200' />
                    </Box>
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