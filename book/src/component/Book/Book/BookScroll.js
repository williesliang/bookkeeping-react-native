import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import BookCell from '~/component/Book/Book/BookCell'


export default class BookScroll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chooseIndexs: [-1, -1]
        };
    }

    // 滚动开始
    _onScrollBeginDrag = (e)=>{
        this.setState({
            chooseIndexs: [-1, -1]
        })
    }

    // 滚动结束
    _onMomentumScrollEnd = (e)=>{
        const page = e.nativeEvent.contentOffset.x / SCREEN_WIDTH
        this.props.onMomentumScrollEnd(page)
    }

    // 点击Item
    _onItemPress = (index)=>{
        var chooseIndexs = this.state.chooseIndexs;
        chooseIndexs[this.props.navigationIndex] = index
        this.setState({
            chooseIndexs: chooseIndexs
        })
        this.props.onItemPress(index)
    }

    // 更新
    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextProps.navigationIndex != this.props.navigationIndex) {
            this.refs.scroll.scrollTo({x: nextProps.navigationIndex * SCREEN_WIDTH, y: 0, animated: true})
            this.setState({chooseIndexs: [-1, -1]})
            return true
        }
        return true
    }

    // 滚动控件
    scrollItem = ()=>{
        var array = []
        var index = 0
        for (let i=0; i<2; i++) {
            var subarray = []
            var data = i === 0 ? this.props.models['pay'] : this.props.models['income']
            for (let y=0; y<data.length; y++) {
                subarray.push(
                    <BookCell 
                        key={index++} 
                        choose={this.state.chooseIndexs[i]==y}
                        onPress={()=>this._onItemPress(y)} 
                        model={data[y]}
                    />
                )
            }
            array.push (
                <ScrollView 
                    key={i}
                    style={styles.list}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.listContent}>
                        {subarray}
                    </View>
                </ScrollView>
            )
        }
        return array
    }
    
    // 初始化
    render() {
        return (
            <ScrollView 
                ref={'scroll'}
                horizontal={true} 
                pagingEnabled={true}
                style={styles.scroll}
                showsHorizontalScrollIndicator={false}
                onScrollBeginDrag={this._onScrollBeginDrag}
                onMomentumScrollEnd={this._onMomentumScrollEnd}
            >
                {this.scrollItem()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
    },
    list: {
        width: SCREEN_WIDTH,
        flexWrap: 'wrap',
    },
    listContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: SCREEN_WIDTH,
        paddingLeft: countcoordinatesX(30),
        paddingTop: countcoordinatesX(20),
        paddingBottom: countcoordinatesX(20),
    },
    item: {
        width: SCREEN_WIDTH / 4,
        height: SCREEN_WIDTH / 4,
    }
});