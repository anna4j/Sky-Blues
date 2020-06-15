import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    boxShadow: 'none',
                    backgroundColor: '#98c5e9',
                    padding: '10px 0px',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <ToolBar style={{ display: 'flex' }}>
                    <div styles={{ flexGrow: 1 }}>
                        <div className="header_logo">

                        </div>
                    </div>

                    <Link to="/the_team">
                        <Button color="inherit">The Team</Button>
                    </Link>
                    <Link to="/the_matches">
                        <Button color="inherit">Matches</Button>
                    </Link>

                </ToolBar>

            </AppBar>
        )
    }
}
