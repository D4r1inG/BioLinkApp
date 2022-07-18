import React from 'react'

const youtubeURLRegex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/

export default function MediaEmbed(props) {

    const { url, name } = props

    const renderIframe = () => {
        switch (name) {
            case 'Youtube': {
                let urlEmbed = url?.match(youtubeURLRegex)[2];
                return <iframe width="100%" height="217" src={`https://www.youtube.com/embed/${urlEmbed}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            }

            case 'Spotify': {
                let urlEmbed = url?.replace('https://open.spotify.com/', 'https://open.spotify.com/embed/')
                return <iframe height="80" width="100%" src={urlEmbed} type="application/pdf" frameBorder="0" ></iframe>
            }

            default: {
                break
            }
        }
    }

    return (
        <>
            {renderIframe()}
        </>
    )
}
