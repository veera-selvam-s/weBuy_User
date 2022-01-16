import React, {useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../actions';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const MenuHeader = (props) => {

  const category = useSelector(state => state.category);
  const dispatch = useDispatch();
  const isMobile = window.innerWidth <= 700;  


  useEffect(() => {
    dispatch(getAllCategory());
  }, []);


  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {
            category.parentId ? <Link
              to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </Link> :
              <span>{category.name}</span>
          }
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </li>
      );
    }
    return myCategories;
  }

  const TreeViewForMobile = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <>
          {
            category.children.length > 0 ?
              <TreeItem key={category._id} nodeId={category._id} label={category.name}>
                {category.children.length > 0 ? TreeViewForMobile(category.children) : null}
              </TreeItem>
              :
              <NavLink className="link" to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
                <TreeItem label={category.name} />
              </NavLink>
          }
        </>
      )
    }
    return myCategories;
  }

  if (isMobile) {
    return (
      <div className="smallMenuHeader">
        <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        multiSelect
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ width: '100%', bgcolor: 'background.paper' }}
      >
        {category.categories.length > 0 ? TreeViewForMobile(category.categories) : null}
      </TreeView>
      </div>
      
    );
  }
  else {
    return (
      <div className="menuHeader">
        <ul>
          {category.categories.length > 0 ? renderCategories(category.categories) : null}
        </ul>
      </div>
    )
  }


}

export default MenuHeader