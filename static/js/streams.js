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
