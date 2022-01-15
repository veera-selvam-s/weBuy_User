import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../actions';
import { List, ListItem, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


/**
* @author
* @function MenuHeader
**/

const MenuHeader = (props) => {

  const category = useSelector(state => state.category);
  const dispatch = useDispatch();
  const isMobile = window.innerWidth <= 500;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };


  useEffect(() => {
    dispatch(getAllCategory());
  }, []);


  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {
            category.parentId ? <NavLink
              to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </NavLink> :
              <span>{category.name}</span>
          }
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </li>
      );
    }
    return myCategories;
  }

  const renderCategoriesForMobile = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader">
          {
            category.children.length > 0 ?
            <List>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={category.name} />
                  {category.children.length !== null ? open ? <ExpandLess /> : <ExpandMore /> : null}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      {category.children.length > 0 ? (<List>{renderCategoriesForMobile(category.children)}</List>) : null}
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
              :
              <ListItemButton>
              <NavLink className="link" to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
                <ListItemText
                  primary={category.name} />
              </NavLink>
              </ListItemButton>
              
          }


        </List>



      );
    }

    return myCategories;
  }

  if (isMobile) {
    return (
      <>
        <div className='smallMenuHeader'>
          {category.categories.length > 0 ? renderCategoriesForMobile(category.categories) : null}
        </div>
      </>
    );
  } else {
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