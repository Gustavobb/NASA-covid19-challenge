import React from 'react';
import { Grommet, Box, Text, Header, Anchor, Image, Select } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOptions: ['CO2', 'NO2', 'Urban Heats', 'Deforestation'],
            options: ['CO2', 'NO2', 'Urban Heats', 'Deforestation'],
            value: '',
        };
    }

    render() {
        return (
            <Grommet theme={customTheme}>
                <Header background='#EDEDED' pad='small'>
                    <Text textAlign='center' style={{ color: '#000000', fontSize: '2vh', letterSpacing: '1.5px', marginLeft: '4vw' }}>Lockdown Hope</Text>
                    <Box direction='row' gap='medium' style={{ marginRight: '2vw' }}>
                        <Anchor color='#000000' label='Section 1' style={{ fontSize: '1.5vh', letterSpacing: '2px' }} />
                        <Anchor color='#000000' label='Section 2' style={{ fontSize: '1.5vh', letterSpacing: '2px' }} />
                    </Box>
                </Header>
                <Box background='#C6EC5B' direction='row' pad='xlarge' justify='center'>
                    <Box direction='row' justify='start' gap='xlarge'>
                        <Image style={{ width: '25vw' }} src='https://picsum.photos/300/200' />
                        <Box direction='column' justify='center'>
                            <Text textAlign='center' style={{ fontSize: '3.5vh', marginBottom: '2vh', letterSpacing: '1.5px' }}>Does quarantine affect the enviroment?</Text>
                            <Text textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px' }}>The covid-19 pandemic changed several human activities.<br />
                            Maybe for the environment this has a positive meaning</Text>
                        </Box>
                    </Box>
                </Box>
                <Box background='#EDEDED' pad='xlarge'>
                    <Box direction='row' justify='center' >
                        <Box direction='column' pad='small'>
                            <Text textAlign='center' style={{ fontSize: '3.5vh', letterSpacing: '1.5px', marginBottom: '1.5vh' }}> Co2 </Text>
                            <Text textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px', marginBottom: '1.5vh' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Nullam dictum purus ac velit pellentesque eleifend </Text>
                            <Box alignSelf='center' style={{ width: '12vw' }}>
                                <Select
                                    size='medium'
                                    placeholder='Select'
                                    value={this.state.value}
                                    options={this.state.options}
                                    onChange={({ option }) => this.setState({ value: option })}
                                    onClose={() => this.setState({ options: this.state.searchOptions })}
                                    onSearch={(text) => {
                                        const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
                                        const exp = new RegExp(escapedText, 'i');
                                        this.setState({ options: this.state.searchOptions.filter(o => exp.test(o)) });
                                    }}
                                />
                            </Box>
                        </Box>
                        <Image style={{ marginLeft: '5vw', width: '25vw' }} src={require('./assets/no2.gif')} />
                    </Box>
                </Box>
                <Box background='#C6EC5B' direction='row' pad='xlarge' justify='center'>
                    <Text textAlign='center' style={{ fontSize: '3vh', letterSpacing: '1.5px' }}>Measure your contribution to the environment</Text>
                </Box>
            </Grommet>
        )
    }
}

const customTheme = deepMerge(grommet, {
    global: {
        colors: {
            focus: '#C6EC5B',
            selected: {
                background: '#C6EC5B'
            }
        },
        hover: {
            background: '#C6EC5B'
        }
    },
    select: {
        icons: {
            color: '#808080'
        }

    }
});

export default Home;
