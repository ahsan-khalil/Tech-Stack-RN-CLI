import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, FlatList } from 'react-native';
import LibraryItem from "./LibraryItem";

class LibraryList extends Component {

    renderItem(library) {
        return <LibraryItem library={library.item} />
    }

    render() {
        return (
            <FlatList 
                data={this.props.libraries}
                renderItem = {this.renderItem}
                keyExtractor = { library => library.id }
            />
        )
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    }
})

export default connect(mapStateToProps)(LibraryList);