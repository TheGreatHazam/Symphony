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
            name: '',
            listofplaysong: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputListOfPlaySong = async event => {
        const listofplaysong = event.target.value
            ? event.target.value
            : this.state.listofplaysong

        this.setState({ listofplaysong })
    }

    handleUpdateSpotify = async () => {
        const { id, name, listofplaylist, listofplaysong } = this.state
        const payload = { name, listofplaylist, listofplaysong}

        await api.updateSpotifyById(id, payload).then(res => {
            window.alert(`Spotify updated successfully`)
            this.setState({
                name: '',
                listofplaysong: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const spotify = await api.getSpotifyById(id)

        this.setState({
            name: spotify.data.data.name,
            listofplaysong: spotify.data.data.listofplaysong,
        })
    }

    render() {
        const { name, listofplaylist, listofplaysong } = this.state
        return (
            <Wrapper>
                <Title>Update Spotify</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
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
                    value={listofplaysong}
                    onChange={this.handleChangeInputListOfPlaySong}
                />

                <Button onClick={this.handleUpdateSpotify}>Update Spotify</Button>
                <CancelButton href={'/spotifies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default SpotifiesUpdate