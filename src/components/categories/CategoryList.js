import React from 'react';
import {connect,useDispatch,useSelector} from "react-redux"


const CategoryList = (props) => {

    const currentCategory = useSelector(state=>state.changeCategoryReducer);

    /*
        useSelector sayesinde connect e gerek yok ve aşağıdaki koda da artık gerek yok.

        function mapStateToProps(state) {
            return {
                currentCategory: state.changeCategoryReducer
            }
        }
     */
    return (
        <div>
            <h3>Category</h3>
            <h5>Seçili Kategori:{currentCategory.categoryName}</h5>
        </div>
    );

}


export default CategoryList;




