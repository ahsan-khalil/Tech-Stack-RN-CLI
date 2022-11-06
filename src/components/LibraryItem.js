import React, { Component } from "react";
import { Text, 
         StyleSheet, 
         TouchableWithoutFeedback,
         View, 
         LayoutAnimation } from "react-native";
import { CardSection } from "./common";
import * as actions from "../actions";
import { connect } from "react-redux";

class LiraryItem extends Component {
    componentDidUpdate() {
        LayoutAnimation.spring()
    }
    renderDescription() {
        const {expanded, library} = this.props;
        if (expanded) {
            return <Text>{library.description}</Text>
        }
    }

    render() {
        const { id, title } = this.props.library;
        console.log('props ',this.props);
        return(
            <TouchableWithoutFeedback
                onPress={ () => { this.props.selectLibrary(id) }}
            >
                <View>
                    <CardSection>
                        <Text styles={styles.textStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        flex: 1
    }
})

const mapStateToProps = (state, props) => {
    const expanded = state.selectedLibraryId === props.library.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(LiraryItem);