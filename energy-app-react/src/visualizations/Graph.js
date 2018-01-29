import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Dimensions } from 'react-native'
import { VictoryPie, VictoryBar, VictoryChart, VictoryTheme,
         VictoryScatter, VictoryAxis } from "victory-native";


import { scale, moderateScale, verticalScale} from './../helpers/Scaling';
import { GetStyle } from './../styling/Themes'
import CurrTheme from './../styling/CurrentTheme'
import { default as CustomThemes } from './GraphThemes'


class Graph extends Component {
    render() {
        const themeStyles = GetStyle(CurrTheme);

        if (this.props.type=='pie') {
            return (
                <VictoryPie
                    theme={this.props.theme}
                    height={this.props.height}
                    innerRadius={20}
                    width={this.props.width}
                    padding={{ top: 50, bottom: 50, left: 70, right: 65 }}
                    data={this.props.graphData}/>
            )
        } else if (this.props.type=='bar') {
            return (
                <VictoryChart
                    height={this.props.height}
                    width={this.props.width}
                    theme={this.props.theme}
                    padding={{ top: 20, bottom: 50, left: 60, right: 60}}
                    domainPadding={15}>
                    <VictoryBar
                        data={this.props.graphData}/>
                </VictoryChart>
            )
        } else if (this.props.type=='scatter'){
            return (
                <VictoryChart
                    height={this.props.height}
                    width={this.props.width}
                    theme={this.props.theme}
                    padding={{ top: 0, bottom: 10, left: 60, right: 40}}
                    domainPadding={10}>
                    <VictoryScatter
                        size={5}
                        data={this.props.graphData}/>
                    <VictoryAxis crossAxis tickFormat={() => ''}/>
                    <VictoryAxis crossAxis dependentAxis/>
                </VictoryChart>
            )

        } else {
            return (
                <VictoryChart>
                <VictoryBar/>
                </VictoryChart>
            )
        }
    }
}
// 1
//Graph.defaultProps = {
//    type: 'pie',
//    graphData: [{y:  8, x: "Electricity"},
//                 {y: 7, x: "Water"},
//                 {y: 16, x: "Heat/AC"}],
//    theme: CustomThemes.grayscale,
//    height: 300,
//    width: 300
//}

// 2
Graph.defaultProps = {
    type: 'pie',
    graphData: [{y:  8, x: "Electricity"},
                 {y: 7, x: "Water"},
                 {y: 16, x: "Heat/AC"}],
    theme: CustomThemes.grayscale,
    height: 175,
    width: 250
}

// 3
//Graph.defaultProps = {
//    type: 'pie',
//    graphData: [{y:  8, x: "Electricity"},
//                 {y: 7, x: "Water"},
//                 {y: 16, x: "Heat/AC"}],
//    theme: CustomThemes.grayscale,
//    height: 300,
//    width: 300
//}

Graph.propTypes = {
    type: PropTypes.string,
    graphData: PropTypes.any,
    theme: PropTypes.object,
    height: PropTypes.number,
    width: PropTypes.number
}

const styles = StyleSheet.create({
  container: {
      flex: 0.8,
      justifyContent: 'center',
      alignItems: 'center',
  },
})

export default Graph