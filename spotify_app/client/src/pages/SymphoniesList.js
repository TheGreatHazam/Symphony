import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"
import {Button} from "react-bootstrap";

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateSymphony extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/symphonies/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteSymphony extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the playlist permanently?`,
            )
        ) {
            api.deleteSymphonyById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}
const goToSearch = () => {
    window.location = ('/redirect')
}

class SymphoniesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            symphonies: [],
            columns: [],
            isLoading: false,
        }
    }



    componentDidMount = async () => {
        this.setState({ isLoading: true })
	console.log(api.getAllSymphonies());
        await api.getAllSymphonies().then(symphonies => {
            this.setState({
                symphonies: symphonies.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { symphonies, isLoading } = this.state
        console.log('TCL: SymphoniesList -> render -> symphonies', symphonies)

        const columns = [ 
            {
                Header: 'Playlist Name',
                accessor: 'playlistname',
                filterable: true,
            },
            {
                Header: 'List of Song',
                accessor: 'listofsong',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteSymphony id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateSymphony id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!symphonies.length) {
            showTable = false
        }

        return (
            <>
                <Wrapper>
                    {showTable && (
                        <ReactTable
                            data={symphonies}
                            columns={columns}
                            loading={isLoading}
                            defaultPageSize={5}
                            showPageSizeOptions={true}
                            minRows={1}
                        />
                    )}
                </Wrapper>

                <Button variant="info" type="submit" onClick = {goToSearch}>
                    Return to Music Search
                </Button>
            </>

        )
    }
}

export default SymphoniesList

