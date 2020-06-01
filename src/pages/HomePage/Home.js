import React from 'react';
import { Grommet, Box, Text, Header, Anchor, Image, Select, RadioButton, RangeInput, ResponsiveContext } from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import database from "../../db.json";
import { Bar } from 'react-chartjs-2';
import { rollIn, fadeIn, zoomIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { Github } from 'grommet-icons';

const Rollin = styled.div`animation: 2s ${keyframes`${rollIn}`}`;
const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`}`;
const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`}`;

var goodAnswers;
var badAnswers;

const data = {
    labels: ['Nov19', 'Dec19', 'Jan20', 'Feb20', 'Mar20', 'Apr20'],
    datasets: [
        {
            label: 'CO2 monthly ppm variation',
            backgroundColor: '#C6EC5B',
            data: [0.300000000000011, 0.189999999999998, 0.629999999999995, 0.189999999999998, -0.240000000000009, 0.360000000000014]
        }
    ]
};


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
        for (var i in database) {
            this.state.searchOptions.push(database[i].name);
        }
        this.state.options = this.state.searchOptions;
        this.state.visualizationPath = ["no2/September2019.jpg"];
        this.updateQuery("Carbon Dioxide");
        goodAnswers = 0;
        badAnswers = 0;
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
                this.setState({ references: database[i].references })
            }
        }
    }

    renderRangeInputDtype() {

        var month = parseInt(this.state.rangeInputValue / (100 / 7));

        var monthName = this.state.visualizationPath[month];

        monthName = monthName.split("/")[1].split(".")[0].replace("2", " 2");

        return (
            <ResponsiveContext.Consumer>
                {responsive =>
                    responsive === "small" ? (
                        <Box pad='small' justify='center'>
                            <Image alignSelf='center' style={{ width: '40vh', marginTop: '3vh' }} src={require(`./assets/${this.state.visualizationPath[month]}`)} />
                            <Text alignSelf='center' style={{ fontSize: '2.5vh', letterSpacing: '1.5px', marginTop: '2vh' }}> {monthName} </Text>
                            <Box alignSelf="center" pad="medium" style={{ width: "75vw" }}>
                                <RangeInput value={this.state.rangeInputValue} onChange={(e) => this.onChangeRangeInput(e)} />
                            </Box>
                            <Text alignSelf='center' textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px', marginTop: '2vh' }}> {this.state.references} </Text>
                        </Box>
                    ) : (
                            <Box pad='small' justify='center'>
                                <Image alignSelf='center' style={{ width: '35vw' }} src={require(`./assets/${this.state.visualizationPath[month]}`)} />
                                <Text alignSelf='center' style={{ fontSize: '2.5vh', letterSpacing: '1.5px', marginTop: '2vh' }}> {monthName} </Text>
                                <Box alignSelf="center" pad="medium" style={{ width: "25vh" }}>
                                    <RangeInput value={this.state.rangeInputValue} onChange={(e) => this.onChangeRangeInput(e)} />
                                </Box>
                                <Text alignSelf='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px', marginTop: '2vh' }}> {this.state.references} </Text>
                            </Box>
                        )}
            </ResponsiveContext.Consumer>
        )
    }

    renderDataChartDtype() {
        return (
            <ResponsiveContext.Consumer>
                {responsive =>
                    responsive === "small" ? (
                        <Box pad='large' alignSelf='center' style={{ width: '70vh' }}>
                            <Text alignSelf='center' style={{ fontSize: '2.5vh', letterSpacing: '1.5px', marginTop: '2.5vh' }}> Variation </Text>
                            <Bar
                                data={data}
                            />
                            <Text alignSelf='center' textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px', marginTop: '2vh' }}>{this.state.references}</Text>

                        </Box>
                    ) : (
                            <Box pad='large' alignSelf='center' style={{ width: '40vw' }}>
                                <Text alignSelf='center' style={{ fontSize: '2.5vh', letterSpacing: '1.5px', marginTop: '2.5vh' }}> Variation </Text>
                                <Bar
                                    data={data}
                                />
                                <Text alignSelf='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px', marginTop: '2vh' }}>{this.state.references}</Text>

                            </Box>
                        )}
            </ResponsiveContext.Consumer>
        )
    }

    getQuizResult(type, index) {
        var questionYes = `${index}QuestionYes`;
        var questionNo = `${index}QuestionNo`;

        //Check type of radioButton
        if (type === "yes") {
            (index === 'first' || index === 'second') ? badAnswers++ : goodAnswers++;
            this.setState({ [questionYes]: true, [questionNo]: false });
        } else {
            (index === 'first' || index === 'second') ? goodAnswers++ : badAnswers++;
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
                <FadeIn><Header background='#C6EC5B' pad='small'>
                    <Text textAlign='center' style={{ color: '#000000', fontSize: '2vh', letterSpacing: '1.5px', marginLeft: '4vw' }}>Lockdown Hope</Text>
                    <Box direction='row' gap='medium' style={{ marginRight: '2vw' }}>
                        <Anchor color='#000000' label='About us' style={{ fontSize: '1.5vh', letterSpacing: '2px' }} href="https://covid19.spaceappschallenge.org/challenges/covid-challenges/quiet-planet/teams/toruk-makto-1/project" />
                        <a href="https://github.com/Gustavobb/NASA-covid19-challenge"><Github size='medium' color='#000000' /></a>
                    </Box>
                </Header>
                </FadeIn>
                <ResponsiveContext.Consumer>
                    {responsive =>
                        responsive === "small" ? (
                            <Box background='#EDEDED' direction='column' justify='center' alignContent='center'>
                                <Image alignSelf='center' style={{ width: '20vh', marginBottom: ' 3vh', marginTop: '2vh' }} src={require('./assets/tree.png')} />
                                <Text textAlign='center' style={{ fontSize: '3vh', marginBottom: '2vh', letterSpacing: '1.5px' }}><FadeIn>Does quarantine affect the environment?</FadeIn></Text>
                                <Text textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px', marginBottom: '2vh' }}><FadeIn>The covid-19 pandemic changed several human activities.<br />
                            Maybe for the environment this has a positive meaning.</FadeIn></Text>
                            </Box>

                        ) : (
                                <Box background='#EDEDED' direction='row' pad='xlarge' justify='center'>
                                    <Box direction='row' justify='start' gap='xlarge'>
                                        <Rollin><Image style={{ width: '15vw' }} src={require('./assets/tree.png')} /></Rollin>
                                        <Box direction='column' justify='center'>
                                            <Text textAlign='center' style={{ fontSize: '3.5vh', marginBottom: '2vh', letterSpacing: '1.5px' }}><FadeIn>Does quarantine affect the environment?</FadeIn></Text>
                                            <Text textAlign='center' style={{ fontSize: '1.5vh', letterSpacing: '1.5px' }}><FadeIn>The covid-19 pandemic changed several human activities.<br />
                            Maybe for the environment this has a positive meaning.</FadeIn></Text>
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                </ResponsiveContext.Consumer>
                <ResponsiveContext.Consumer>
                    {responsive =>
                        responsive === "small" ? (
                            <Box background='#E1FF8D' pad='large' justify='center'>
                                <Box direction='column' style={{ marginTop: '6vh' }}>
                                    <Text textAlign='center' style={{ fontSize: '3.5vh', letterSpacing: '1.5px', marginBottom: '3.5vh' }}> {this.state.dataName} </Text>
                                    <Box alignSelf='center' style={{ width: '30vh' }}>
                                        <Select
                                            size='medium'
                                            placeholder='Choose an indicator'
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
                                    <Text alignSelf='center' style={{ lineHeight: '2', textIndent: '50px', fontSize: '1.8vh', letterSpacing: '1px', marginTop: '3.5vh', width: '30vh' }}>{this.state.description}</Text>
                                </Box>
                                {this.state.dataType === "rangeinput" ? this.renderRangeInputDtype()
                                    : this.state.dataType === "plot" ? this.renderDataChartDtype()
                                        : null}
                            </Box>
                        ) : (<Box background='#E1FF8D' pad='large' justify='center'>
                            <Box direction='row' justify='center' gap='large'>
                                <Box direction='column' style={{ marginTop: '6vh' }}>
                                    <Text textAlign='center' style={{ fontSize: '3.5vh', letterSpacing: '1.5px', marginBottom: '3.5vh' }}> {this.state.dataName} </Text>
                                    <Box alignSelf='center' style={{ width: '15vw' }}>
                                        <Select
                                            size='medium'
                                            placeholder='Choose an indicator'
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
                                    <Text alignSelf='center' style={{ lineHeight: '2', textIndent: '50px', fontSize: '1.8vh', letterSpacing: '1px', marginTop: '3.5vh', width: '45vw' }}>{this.state.description}</Text>
                                </Box>
                                {this.state.dataType === "rangeinput" ? this.renderRangeInputDtype()
                                    : this.state.dataType === "plot" ? this.renderDataChartDtype()
                                        : null}
                            </Box>
                        </Box>

                            )}
                </ResponsiveContext.Consumer>
                {/* </FadeIn> */}
                <ScrollAnimation animateIn="fadeIn">
                    <Box background='#EDEDED' pad='xlarge' justify='center'>

                        <Text textAlign='center' style={{ fontSize: '3vh', letterSpacing: '1.5px', marginBottom: '4vh' }}>Measure your contribution to the environment</Text>
                        <Box direction='column' justify='center'>
                            <Text alignSelf='center' textAlign='center' style={{ fontSize: '2vh', letterSpacing: '1px' }}> Are you driving a car that uses fossil fuels? </Text>
                            <Box direction='row' justify='center' style={{ marginTop: '2vh', marginBottom: '2vh' }} gap='medium'>
                                <RadioButton name='firstButtonYes' label='Yes' checked={this.state.firstQuestionYes} onChange={(event) => this.getQuizResult('yes', 'first')} />
                                <RadioButton name='firstButtonNo' label='No' checked={this.state.firstQuestionNo} onChange={(event) => this.getQuizResult('no', 'first')} />
                            </Box>
                            <Text alignSelf='center' textAlign='center' style={{ fontSize: '2vh', letterSpacing: '1px' }}> Are you stocking up on food beyond what you need? </Text>
                            <Box direction='row' justify='center' style={{ marginTop: '2vh', marginBottom: '2vh' }} gap='medium'>
                                <RadioButton name='secondButtonYes' label='Yes' checked={this.state.secondQuestionYes} onChange={(event) => this.getQuizResult('yes', 'second')} />
                                <RadioButton name='firstButtonNo' label='No' checked={this.state.secondQuestionNo} onChange={(event) => this.getQuizResult('no', 'second')} />
                            </Box>
                            <Text alignSelf='center' textAlign='center' style={{ fontSize: '2vh', letterSpacing: '1px' }}> Is anyone in your household studying at a distance? </Text>
                            <Box direction='row' justify='center' style={{ marginTop: '2vh', marginBottom: '2vh' }} gap='medium'>
                                <RadioButton name='thirdButtonYes' label='Yes' checked={this.state.thirdQuestionYes} onChange={(event) => this.getQuizResult('yes', 'third')} />
                                <RadioButton name='thirdButtonNo' label='No' checked={this.state.thirdQuestionNo} onChange={(event) => this.getQuizResult('no', 'third')} />
                            </Box>
                            <Text alignSelf='center' textAlign='center' style={{ fontSize: '2vh', letterSpacing: '1px' }}> Are you eating food prepared at home? </Text>
                            <Box direction='row' justify='center' style={{ marginTop: '2vh', marginBottom: '2vh' }} gap='medium'>
                                <RadioButton name='fourthButtonYes' label='Yes' checked={this.state.fourthQuestionYes} onChange={(event) => this.getQuizResult('yes', 'fourth')} />
                                <RadioButton name='fourthButtonNo' label='No' checked={this.state.fourthQuestionNo} onChange={(event) => this.getQuizResult('no', 'fourth')} />
                            </Box>
                            <Text alignSelf='center' textAlign='center' style={{ fontSize: '3vh', letterSpacing: '2px', marginTop: '2vh' }}> Result: </Text>
                            <Text alignSelf='center' textAlign='center' style={{ color: this.state.resultColor, fontSize: '3vh', letterSpacing: '2px', marginTop: '2vh' }}>{this.state.quizResult}</Text>
                        </Box>
                    </Box>
                </ScrollAnimation>
                <Box background='#E1FF8D' pad='large' justify='center'>
                    <Text textAlign='center' style={{ fontSize: '3vh', letterSpacing: '1.5px' }}>Perhaps Nature needs a break...</Text>
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
    },
    rangeInput: {
        thumb: {
            color: "#808080"
        }
    }
});

export default Home;
