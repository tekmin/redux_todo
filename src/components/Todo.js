import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { addToDo } from './../actions/TodoActions';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
        marginTop: 40,
        padding: 10,
    },
    button: {
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        marginVertical: 10,
        padding: 10,
    },
});

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos,
    };
}

class Todo extends Component {

    constructor(props) {
        super(props);

        this.onTextChange = this.onTextChange.bind(this);
        this.save = this.save.bind(this);
        this.renderRow = this.renderRow.bind(this);
        
        this.state = {
            text: '',
        };
    }

    onTextChange(text) {
        this.setState({
            text: text,
        });
    }

    save() {
        this.props.dispatch(addToDo(this.state.text));

        // clear input
        this.setState({
            text: '',
        });
    }

    renderRow(rowData) {
        return (
            <TouchableHighlight onPress={() => {}}>
                <Text>{rowData.text}</Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={this.onTextChange}
                    value={this.state.text}
                />
                <TouchableOpacity onPress={this.save}>
                    <Text style={styles.button}>Add ToDo</Text>
                </TouchableOpacity>
                <Text>To Do List</Text>
                <ListView 
                    dataSource={dataSource.cloneWithRows([])}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                />
            </View>
        )
    }
}

module.exports = connect(mapStateToProps) (Todo);