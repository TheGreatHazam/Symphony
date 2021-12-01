import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class SpotifiesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spotifies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getAllSpotifies().then(spotifies => {
            for (let i = 0; i < spotifies.data.data.length; i++) {
            this.setState({
                spotifies: spotifies.data.data[i],
                isLoading: false,
            })
            console.log(spotifies.data.data[i]);
        }
        })
    }

    render() {
        const { spotifies, isLoading } = this.state
        console.log('TCL: SpotifiesList -> render -> spotifies', spotifies)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'List of Songs',
                accessor: 'listofplaysong',
                filterable: true,
            },
            {
                Header: 'List of Playlist',
                accessor: 'listofplaylist',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        if (!spotifies.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={spotifies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default SpotifiesList;
