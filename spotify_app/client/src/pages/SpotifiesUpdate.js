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

class SpotifiesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            playlistname: '',
            listofsong: '',
        }
    }

    handleChangeInputName = async event => {
        const playlistname = event.target.value
        this.setState({ playlistname })
    }

    handleChangeInputListOfPlaySong = async event => {
        const listofsong = event.target.value
            ? event.target.value
            : this.state.listofsong

        this.setState({ listofsong })
    }

    handleUpdateSpotify = async () => {
        const { id, playlistname, listofsong } = this.state
        const payload = { playlistname, listofsong}

        await api.updateSpotifyById(id, payload).then(res => {
            window.alert(`Spotify updated successfully`)
            this.setState({
                playlistname: '',
                listofsong: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const spotify = await api.getSpotifyById(id)

        this.setState({
            playlistname: spotify.data.data.playlistname,
            listofsong: spotify.data.data.listofsong,
        })
    }

    render() {
        const { playlistname, listofsong } = this.state
        return (
            <Wrapper>
                <Title>Update Spotify</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={playlistname}
                    onChange={this.handleChangeInputName}
                />

                <Label>List of PlaySong: </Label>
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

                <Button onClick={this.handleUpdateSpotify}>Update Spotify</Button>
                <CancelButton href={'/spotifies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default SpotifiesUpdate