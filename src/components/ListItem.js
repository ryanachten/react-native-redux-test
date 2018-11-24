import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription() {
    const { expanded, library: { description } } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text>{description}</Text>
        </CardSection>
      );
    }
    return null;
  }

  render() {
    const { titleStyle } = styles;
    const { selectLibrary, library: { id, title } } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = ({ selectedLibraryId }, ownProps) => {
  const expanded = selectedLibraryId === ownProps.library.id;
  return {
    expanded
  };
};

export default connect(mapStateToProps, actions)(ListItem);
