import React, { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height';


const youtubeURLRegex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/

export default function MediaEmbed(props) {

    const [height, setHeight] = useState(0)
    const { url, name, hide } = props

    useEffect(() => {
        switch (name) {
            case 'Youtube': {
                setHeight(200)
                break
            }

            case 'Spotify': {
                setHeight(80)
                break
            }

            default: {
                break
            }
        }
    }, [name])

    const renderIframe = () => {
        switch (name) {
            case 'Youtube': {
                let urlEmbed = url?.match(youtubeURLRegex)[2];
                return <iframe width="100%" height='200' src={`https://www.youtube.com/embed/${urlEmbed}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            }

            case 'Spotify': {
                let urlEmbed = url?.replace('https://open.spotify.com/', 'https://open.spotify.com/embed/')
                return <iframe width="100%" height='80' src={urlEmbed} type="application/pdf" frameBorder="0" ></iframe>
            }

            default: {
                break
            }
        }
    }

    return (
        <AnimateHeight className='rounded-3xl' duration={500} height={hide ? 0 : height}>
            {renderIframe()}
        </AnimateHeight>
    )
}
