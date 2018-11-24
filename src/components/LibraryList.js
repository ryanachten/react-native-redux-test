import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

class LibraryList extends Component {

  renderItem(library) {

  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);
