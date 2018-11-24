import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

  renderItem({ item }) {
      return <ListItem library={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => (
  {
    libraries: state.libraries,
  }
);

export default connect(mapStateToProps)(LibraryList);
