import React, { useState, useEffect } from 'react';
import { withStyles, Input, ListItem, ListItemText, Typography, Link, List, FormControl } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {getAllUsers} from '../../service/users/index'

function SearchBar(props) {
    const { classes } = props;
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState('');
    const [clickSearch, setClickSearch] = useState(false)
    const [openList, setOpenList] = useState(false)

    const handleSearchChange = (e) => {
        setFilter(e.target.value.toLowerCase());
    };

    useEffect(() => {
        async function getUsers(){
            return await getAllUsers()
        }

        getUsers().then((res) => {
            setUsers(res.data.users);
        })
        
    }, [])


    const getListUser = (user) => {
        
        return (
            clickSearch ? 
                <Link href={`/perfil/${user._id}`} underline={'none'}>
                    <List key={user._id} className={classes.list}>
                        <ListItem  button className={classes.listItem} >
                            <ListItemText>
                                <Typography 
                                    className={classes.primaryTextList}
                                    component={"span"}>
                                        {user.name}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Link>
             : ''
        ) 
    };

    const renderSearch = () => {   
        return (
            users.map(user => {
                if (user.name.trim().toLowerCase().includes(filter)) {
                    return getListUser(user)
                } else return null
            })
        );
    };

    return (
        users.length > 0 ?
            <div className={classes.container}>
                    <FormControl >
                        <Input 
                            className={classes.searchInput}
                            classes={{
                                input: classes.input
                            }}
                            placeholder={`Encontre um usuário`}
                            label="Encontre um usuário"
                            onChange={handleSearchChange}
                            defaultValue={filter}
                            variant={'standard'}
                            disableUnderline
                            onBlur={() => setTimeout(function(){ setClickSearch(false) }, 200)}
                            onFocus={() => {
                                setClickSearch(true)
                                setOpenList(true);
                            }}
                        />
                    </FormControl>
                    <SearchIcon className={classes.searchIcon} />
                <div className={classes.renderList}>
                    {openList && renderSearch()}
                </div>
            </div>
        : ''
    );
};

const styles = theme => ({
    list: {
        padding:0
    },
    listitem: {
        maxHeight: 300, 
        overflow: 'auto'
    },
    listItemAvatar: {
        width:'1.5em',
        height:'1.5em'
    },
    primaryTextList: {
        fontSize:'x-small', 
        fontWeight: "bold"
    },
    secondaryTextList: {
        fontSize:'xx-small',
        opacity:0.9
    },
    menuSearchBar: {
        padding: '10px 5px 10px',
        '&:hover': {
            background: 'none'
        }
    },
    searchInput: {
        width: "100%",
        color: "#000000",
        fontSize: '14px',
        '&::after': {
            borderBottom: '2px solid #ffffff !important',
            opacity: 0.5

        }, 
        '&::placeholder': {
            color: 'red'
        }
    },
    input: {
        margin: '0px 10px'
    },
    container: {
        display: 'flex',
        position:'relative',
        alignItems: 'center',
        height: 'fit-content',
        backgroundColor: 'white',
        borderRadius: '52px',
        boxShadow: '-5px 4px 4px -2px rgba(0,0,0, 0.25)'
    },
    renderList: {
        margin: '0 2px',
        maxWidth: 250, 
        maxHeight: 150,
        overflow: 'auto',
        position:'absolute',
        top:'3em',
        right:'0em',
        backgroundColor:'#ffffff',
        width:'14em',
    },
    searchIcon: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '52px',
        marginRight: '-2px',
        padding: '4px',
        boxShadow: '-26px 0px 35px -6px rgb(103 58 183 / 100%)'
    }
});

export default withStyles(styles)(SearchBar);
