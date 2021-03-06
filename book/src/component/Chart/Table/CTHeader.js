import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import CTSvg from '~/component/Chart/Table/CTSvg'


export default class ChartTableHeader extends Component {

    render() {
        const str = this.props.navigationIndex == 0 ? '总支出' : '总收入'
        return (
            <View style={styles.container}>
                <Text style={styles.name}>{str}: {this.props.models[0].sum}</Text>
                <Text style={styles.detail}>平均值: {parseFloat(this.props.models[0].avg.toFixed(2))}</Text>
                <CTSvg 
                    ref={'svg'}
                    models={this.props.models}
                    chartCount={this.props.models[0].chart.count}
                    dateIndex={this.props.dateIndex}
                    subdateIndex={this.props.subdateIndex}
                    navigationIndex={this.props.navigationIndex}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH - countcoordinatesX(60),
        marginLeft: countcoordinatesX(30),
        marginRight: countcoordinatesX(30),
    },
    name: {
        fontSize: FONT_SIZE(14),
        fontWeight: '300',
        color: kColor_Text_Black,
        marginTop: countcoordinatesX(20),
        fontFamily: 'Helvetica Neue',
    },
    detail: {
        fontSize: FONT_SIZE(12),
        fontWeight: '300',
        color: kColor_Text_Black,
        marginBottom: countcoordinatesX(20),
        fontFamily: 'Helvetica Neue',
    }
});