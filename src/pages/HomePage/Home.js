import React from 'react';
import { Grommet, Box, Text, Header, Anchor, Image, Select, RadioButton } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import database from "../../db.json"

var goodAnswers = 0;
var badAnswers = 0;
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchOptions: ['CO2', 'NO2', 'Urban Heats', 'Deforestation'],
            options: ['CO2', 'NO2', 'Urban Heats', 'Deforestation'],
            dataName: '',
            description: '',
            visualizationPath: 'no2.gif',
            value: '',
            firstQuestionYes: '',
            firstQuestionNo: '',
            secondQuestionYes: '',
            secondQuestionNo: '',
            thirdQuestionYes: '',
            thirdQuestionNo: '',
            fourthQuestionYes: '',
            fourthQuestionNo: '',
            quizResult: "You're okay!",
            resultColor: '#808080',
        };
        this.getQuizResult = this.getQuizResult.bind(this);
    }

    componentDidMount() {
        this.updateQuery("NO2");
    }

    updateQuery(option) {
        // update name display
        this.setState({ dataName: option });

        // find description in db
        for (var i in database) {
            if (database[i].name === option) {
                this.setState({ description: database[i].description });
                this.setState({ visualizationPath: database[i].visualization });
            }
        }
    }

    getQuizResult(type, index) {
        var questionYes = `${index}QuestionYes`;
        var questionNo = `${index}QuestionNo`;

        //Check type of radioButton
        if (type === "yes") {
            goodAnswers++;
            this.setState({ [questionYes]: true, [questionNo]: false });
        } else {
            badAnswers++;
            this.setState({ [questionNo]: true, [questionYes]: false });
        }

        //Calculate result
        if (goodAnswers > badAnswers) {
            this.setState({ quizResult: "You're doing great", resultColor: 'green' })
        }
        if (goodAnswers === badAnswers) {
            this.setState({ quizResult: "You're okay!", resultColor: 'gray' })
        }
        if (badAnswers > goodAnswers) {
            this.setState({ quizResult: 'You could be doing more...', resultColor: 'red' })
        }
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
                    <Text textAlign='center' style={{ fontSize: '3.5vh', letterSpacing: '1.5px', marginBottom: '3.5vh' }}> {this.state.dataName} </Text>
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
                    <Text alignSelf='center' textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px', marginTop: '3.5vh', width: '40vw' }}> {this.state.description} </Text>
                    <Image alignSelf='center' style={{ marginTop: '6vh', width: '25vw' }} src={require(`./assets/${this.state.visualizationPath}`)} />
                </Box>
                <Box background='#EDEDED' pad='xlarge' justify='center'>
                    <Text textAlign='center' style={{ fontSize: '3vh', letterSpacing: '1.5px', marginBottom: '3vh' }}>Measure your contribution to the environment</Text>
                    <Box direction='column' justify='center'>
                        <Text alignSelf='center' textAlign='center' style={{ fontSize: '2vh', letterSpacing: '1px' }}> Are you driving a car that uses fossil fuels? </Text>
                        <Box direction='row' justify='center' style={{ marginTop: '2vh', marginBottom: '2vh' }} gap='medium'>
                            <RadioButton label='Yes' checked={this.state.firstQuestionYes} onChange={(event) => this.getQuizResult('yes', 'first')} />
                            <RadioButton label='No' checked={this.state.firstQuestionNo} onChange={(event) => this.getQuizResult('no', 'first')} />
                        </Box>
                        <Text alignSelf='center' textAlign='center' style={{ fontSize: '2vh', letterSpacing: '1px' }}> Are you using public transportation? </Text>
                        <Box direction='row' justify='center' style={{ marginTop: '2vh', marginBottom: '2vh' }} gap='medium'>
                            <RadioButton label='Yes' checked={this.state.secondQuestionYes} onChange={(event) => this.getQuizResult('yes', 'second')} />
                            <RadioButton label='No' checked={this.state.secondQuestionNo} onChange={(event) => this.getQuizResult('no', 'second')} />
                        </Box>
                        <Text alignSelf='center' textAlign='center' style={{ fontSize: '2vh', letterSpacing: '1px' }}> Is anyone in your household studying at a distance? </Text>
                        <Box direction='row' justify='center' style={{ marginTop: '2vh', marginBottom: '2vh' }} gap='medium'>
                            <RadioButton label='Yes' checked={this.state.thirdQuestionYes} onChange={(event) => this.getQuizResult('yes', 'third')} />
                            <RadioButton label='No' checked={this.state.thirdQuestionNo} onChange={(event) => this.getQuizResult('no', 'third')} />
                        </Box>
                        <Text alignSelf='center' textAlign='center' style={{ fontSize: '2vh', letterSpacing: '1px' }}> Are you eating food prepared at home? </Text>
                        <Box direction='row' justify='center' style={{ marginTop: '2vh', marginBottom: '2vh' }} gap='medium'>
                            <RadioButton label='Yes' checked={this.state.fourthQuestionYes} onChange={(event) => this.getQuizResult('yes', 'fourth')} />
                            <RadioButton label='No' checked={this.state.fourthQuestionNo} onChange={(event) => this.getQuizResult('no', 'fourth')} />
                        </Box>
                        <Text alignSelf='center' textAlign='center' style={{ fontSize: '2vh', letterSpacing: '2px', marginTop: '2vh' }}> Result: </Text>
                        <Text alignSelf='center' textAlign='center' style={{ color: this.state.resultColor, fontSize: '2vh', letterSpacing: '2px', marginTop: '2vh' }}>{this.state.quizResult}</Text>
                    </Box>
                </Box>
                <Box background='#E1FF8D' pad='large' justify='center'>
                    <Text textAlign='center' style={{ fontSize: '3vh', letterSpacing: '1.5px'}}>Perhaps Nature needs a break...</Text>
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

    },
    radioButton: {
        check: {
            color: {
                light: '#808080'
            }
        },
        hover: {
            border: {
                color: '#808080'
            }
        }
    }
});

export default Home;
