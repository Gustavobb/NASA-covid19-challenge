import React from 'react';
import { Grommet, Box, Text, Header, Anchor, Image, Select, RangeInput } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import database from "../../db.json"

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchOptions: [],
            options: [],
            dataName: '',
            description: '',
            dataType: '',
            visualizationPath: [],
            rangeInputValue: 0,
            value: '',
        };
    }

    componentDidMount() {
        for (var i in database) {
            this.state.searchOptions.push(database[i].name);
        }
        this.state.options = this.state.searchOptions;
        this.state.visualizationPath = ["no2/September2019.jpg"];
        this.updateQuery("NO2");
    }

    onChangeRangeInput(event) {
        this.setState({ rangeInputValue: event.target.value })
    }
    
    updateQuery(option) {
        // update name display
        this.setState({ dataName: option });

        // find description in db
        for (var i in database) {
            if (database[i].name === option) {
                this.setState({ description: database[i].description });
                this.setState({ visualizationPath: database[i].visualization });
                this.setState({ dataType: database[i].dataType });
            }
        }
    }

    renderRangeInputDtype() {

        var month = parseInt(this.state.rangeInputValue/(100/7));
        var monthName = this.state.visualizationPath[month];

        monthName = monthName.split("/")[1].split(".")[0];

        return (
            <Box background='#E1FF8D' pad='xlarge' justify='center'>
                <Text style={{ fontSize: '1.2vh', letterSpacing: '1.5px' }}> { monthName } </Text>
                <Image alignSelf='center' style={{marginTop: '6vh', width: '25vw' }} src={require(`./assets/${this.state.visualizationPath[month]}`)} />
                <Box alignSelf="center" pad="medium" style={{ width:"10vw" }}>
                    <RangeInput value={this.state.rangeInputValue} onChange={(e) => this.onChangeRangeInput(e)} />
                </Box>
            </Box>
        )
    }

    render() {
        return (
            <Grommet theme={customTheme}>
                <Header background='#C6EC5B' pad='small'>
                    <Text textAlign='center' style={{ color: '#000000', fontSize: '2vh', letterSpacing: '1.5px', marginLeft: '4vw' }}>Lockdown Hope</Text>
                    <Box direction='row' gap='medium' style={{ marginRight: '2vw' }}>
                        <Anchor color='#000000' label='Section 1' style={{ fontSize: '1.5vh', letterSpacing: '2px' }} />
                        <Anchor color='#000000' label='Section 2' style={{ fontSize: '1.5vh', letterSpacing: '2px' }} />
                    </Box>
                </Header>
                <Box background='#EDEDED' direction='row' pad='xlarge' justify='center'>
                    <Box direction='row' justify='start' gap='xlarge'>
                        <Image style={{ width: '15vw' }} src={require('./assets/tree.png')} />
                        <Box direction='column' justify='center'>
                            <Text textAlign='center' style={{ fontSize: '3.5vh', marginBottom: '2vh', letterSpacing: '1.5px' }}>Does quarantine affect the enviroment?</Text>
                            <Text textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px' }}>The covid-19 pandemic changed several human activities.<br />
                            Maybe for the environment this has a positive meaning</Text>
                        </Box>
                    </Box>
                </Box>
                <Box background='#E1FF8D' pad='xlarge' justify='center'>
                        <Text textAlign='center' style={{ fontSize: '3.5vh', letterSpacing: '1.5px', marginBottom: '3.5vh' }}> { this.state.dataName } </Text>
                        <Box alignSelf='center' style={{ width: '12vw' }}>
                            <Select
                                size='medium'
                                placeholder='Select'
                                value={this.state.value}
                                options={this.state.options}
                                onChange={({ option }) => this.updateQuery(option)}
                                onClose={() => this.setState({ options: this.state.searchOptions })}
                                onSearch={(text) => {
                                    const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
                                    const exp = new RegExp(escapedText, 'i');
                                    this.setState({ options: this.state.searchOptions.filter(o => exp.test(o)) });
                                }}
                            />
                        </Box>
                        <Text alignSelf='center' textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px', marginTop: '3.5vh', width: '40vw'}}> { this.state.description } </Text>
                        
                        { this.state.dataType === "rangeinput" ?
                            this.renderRangeInputDtype()
                        : null }
                       
                </Box>
                <Box background='#EDEDED' direction='row' pad='xlarge' justify='center'>
                    <Text textAlign='center' style={{ fontSize: '3vh', letterSpacing: '1.5px' }}>Measure your contribution to the environment</Text>
                    <Box direction='row' justify='center'>
                        <Text alignSelf='center' textAlign='center' style={{ fontSize: '2.5vh', letterSpacing: '1.5px', marginTop: '5vh' }}> Are you driving? </Text>
                        <Text alignSelf='center' textAlign='center' style={{ fontSize: '2.5vh', letterSpacing: '1.5px', marginTop: '5vh' }}> Are you driving? </Text>
                        <Text alignSelf='center' textAlign='center' style={{ fontSize: '2.5vh', letterSpacing: '1.5px', marginTop: '5vh' }}> Are you driving? </Text>
                    </Box>
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
