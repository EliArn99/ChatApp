const APP_ID = '741c8a7e9f944f3ca5b73ba3274128d7'
const CHANNEL = 'main'
const TOKEN = '007eJxTYEg6pbpu0eYd6Tf8D89YelvgwfXV5utac9knaB/bw7Pwg+RNBQZzE8Nki0TzVMs0SxOTNOPkRNMkc+OkRGMjoISRRYq5t9Pq9IZARoZZulMZGKEQxGdhyE3MzGNgAADiUyC5'
let UID;


const client = AgoraRTC.createClient({mode: 'rtc', codec: 'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    client.on('user-published', () => {
        console.log('User has joined our room!')
    })


    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container- ${UID}">
                            <div class="username-wrapper"><span class="user-name">My Name</span></div>
                               <div class="video-player" id="user-${UID}"></div>
                        </div>`
document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)
    localTracks[1].play(`user-${UID}`)
    await client.publish([localTracks[0], localTracks[1]])

}
