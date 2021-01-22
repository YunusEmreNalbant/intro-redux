import React from 'react';
import {connect} from "react-redux"


class CategoryList extends React.Component {
    render() {
        return (
            <div>
                <h3>Category</h3>
                <h5>Seçili Kategori: {this.props.currentCategory.categoryName}</h5>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        currentCategory: state.changeCategoryReducer
    }
}

export default connect(mapStateToProps)(CategoryList);




