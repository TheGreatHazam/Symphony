import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class SymphoniesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playlistname: '',
            listofsong: '',
        }
    }

    handleChangeInputPlayListName = async event => {
        const playlistname = event.target.value
        this.setState({ playlistname })
    }

    handleChangeInputListOfPlaySong = async event => {
        const listofsong = event.target.value
        this.setState({ listofsong })
    }

    handleIncludeSymphony = async () => {
        const { playlistname, listofsong } = this.state
        const arrayTime = listofsong.split('/')
        const payload = { playlistname,listofsong: arrayTime }
	console.log(payload);
        await api.insertSymphony(payload).then(res => {
            window.alert(`Inserted successfully`)
            this.setState({
                playlistname: '',
                listofsong: '',
            })
        })
    }

    render() {
        const { playlistname, listofsong } = this.state
        return (
            <Wrapper>
                <Title>Create </Title>

                <Label>PlayListName: </Label>
                <InputText
                    type="text"
                    value={playlistname}
                    onChange={this.handleChangeInputPlayListName}
                />

                <Label>List of Song: </Label>
                <InputText
                   type="text"
                   step="0.1"
                   lang="en-US"
                   min="0"
                   max="10"
                   pattern="[0-9]+([,\.][0-9]+)?"
                    value={listofsong}
                    onChange={this.handleChangeInputListOfPlaySong}
                />

                <Button onClick={this.handleIncludeSymphony}>Add </Button>
                <CancelButton href={'/symphonies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default SymphoniesInsert


