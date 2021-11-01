import React, { useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import {
    Listbox,
    ListboxInput,
    ListboxButton,
    ListboxPopover,
    ListboxList,
    ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";


function CoreListbox(props) {
    //강의실 리스트
    let [listbox_datas, setListbox_datas] = useState(props.listbox_datas);

    //맨처음 강의실 선택하기 
    let [selectedData, setSelectedData] = useState(listbox_datas[0].value);
    let [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleMenuItemClick = (event, index) => {
        setSelectedData(listbox_datas[index].value);
        setAnchorEl(null);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <List component="nav" aria-label="class">
                <ListItem button
                    id="class-button"
                    aria-haspopup="listbox"
                    aria-controls="class-menu"
                    aria-label="강의실 선택"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}>
                    <ListItemText
                        primary="강의실을 선택해주세요"
                        secondary={selectedData}
                    />
                </ListItem>
            </List>
            <Menu id="class-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'class-button',
                    role: 'listbox',
                }}>
                {listbox_datas.map((listbox_data, index) => (
                    <MenuItem
                        key={listbox_data.id}
                        selected={listbox_data.value === selectedData}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {listbox_data.value}
                    </MenuItem>
                ))}
            </Menu>
        </div >

    )
}

export default CoreListbox;