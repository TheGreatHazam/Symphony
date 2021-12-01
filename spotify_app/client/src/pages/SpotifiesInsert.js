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

class SpotifiesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            listofplaylist: '',
            listofplaysong: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputListOfPlaylist= async event => {
        const listofplaylist = event.target.validity.valid
            ? event.target.value
            : this.state.listofplaylist

        this.setState({ listofplaylist })
    }

    handleChangeInputListOfPlaySong = async event => {
        const listofplaysong = event.target.value
        this.setState({ listofplaysong })
    }

    handleIncludeSpotify = async () => {
        const { name, listofplaylist, listofplaysong } = this.state
        const arrayTime = listofplaysong.split('/')
        const payload = { name, listofplaylist, listofplaysong: arrayTime }

        await api.insertSpotify(payload).then(res => {
            window.alert(`Spotify inserted successfully`)
            this.setState({
                name: '',
                listofplaylist: '',
                listofplaysong: '',
            })
        })
    }

    render() {
        const { name, listofplaylist, listofplaysong } = this.state
        return (
            <Wrapper>
                <Title>Create Spotify</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>List of PlayList : </Label>
                <InputText
                    type="text"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={listofplaylist}
                    onChange={this.handleChangeInputListOfPlaylist}
                />

                <Label>List of Song: </Label>
                <InputText
                   type="text"
                   step="0.1"
                   lang="en-US"
                   min="0"
                   max="10"
                   pattern="[0-9]+([,\.][0-9]+)?"
                    value={listofplaysong}
                    onChange={this.handleChangeInputListOfPlaySong}
                />

                <Button onClick={this.handleIncludeSpotify}>Add Spotify</Button>
                <CancelButton href={'/spotifies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default SpotifiesInsert