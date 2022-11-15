import { useState, useEffect } from 'react'
const getYoutubeData = new Promise(function (resolve, reject) {
    const key = 'AIzaSyCdVvVQPGW5oR4n10tmf6gWSQqzEvz20es';
    const playlist_ID = 'PLYZb8VYygIYh1c_ZIL-F9oIYYvaTw9fqO';
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&prettyPrint=true&playlistId=${playlist_ID}&key=${key}`;
    fetch(url).then(res => res.json()).then(data => {
        resolve(data)
    }).catch(err => { throw err })
})
export default function Youtube() {
    const [youtubeData, setYoutubeData] = useState([])
    useEffect(() => {
        try {
            getYoutubeData.then(function (apiData) {
                // const apiData = JSON.parse(apiResponse)
                var youtube_list = [];
                for (const result of apiData.items) {
                    youtube_list.push({
                        title: result.snippet.title,
                        published_date: result.contentDetails.videoPublishedAt,
                        description: result.snippet.description,
                        contentDetails: result.contentDetails.videoId,
                        thumbnail: result.snippet.thumbnails.standard,
                    })
                }
                setYoutubeData(youtube_list)
            }, function (err) {
                throw err
            })
        } catch (err) {
            console.log(err)
        }
    }, [])
    console.log(youtubeData)
    if (youtubeData.length) {
        return <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <iframe width="640" height="352" src={`https://www.youtube.com/embed/${youtubeData[0]['contentDetails']}`} frameborder="0" allowfullscreen=""></iframe>
                    </div>
                    <div className="col-md-5">
                        {youtubeData.map(result => {
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img alt="youtube" className="img-fluid" src="result.thumbnail.url?>" />
                                    </div>
                                    <div className="col-md-8">
                                        <h3>result.title</h3>
                                        <p>result.published_date</p>
                                    </div>
                                </div>

                            </div>
                        })}
                    </div>


                </div>
            </div>
        </>
    } else {
        return <></>
    }
}