import {Map} from 'immutable'
import {CHANGE_CURRENT_SONG_INDEX,
        CHANGE_PLAY_LIST,
        CHANGE_CURRENT_SONG,
        CHANGE_PLAY_MODE,
        CHANGE_LYRIC_LIST} from './contanst'

const initState=Map({
  currentSongIndex:0,
  currentSong:{},
  lyricList:[],
  playMode:0,//0：顺序播放；1：随机播放；2：单曲循环
  playList:[
    {
        "name": "秒针",
        "id": 1893367646,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 33230219,
                "name": "阿梨粤",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 10,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 135839543,
            "name": "秒针",
            "picUrl": "https://p1.music.126.net/KOc728F6RYUoa4D41c4pZA==/109951166605308483.jpg",
            "tns": [],
            "pic_str": "109951166605308483",
            "pic": 109951166605308480
        },
        "dt": 108571,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 4345774,
            "vd": -65131
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 2607482,
            "vd": -62517
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 1738336,
            "vd": -60821
        },
        "a": null,
        "cd": "01",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 10,
        "songJumpInfo": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 1416618,
        "mv": 0,
        "publishTime": 0
    },
    {
      "name": "有何不可",
      "id": 167876,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 5771,
              "name": "许嵩",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "600902000007916021",
      "fee": 8,
      "v": 51,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 16953,
          "name": "自定义",
          "picUrl": "https://p2.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg",
          "tns": [],
          "pic_str": "109951166118671647",
          "pic": 109951166118671650
      },
      "dt": 241840,
      "h": {
          "br": 320000,
          "fid": 0,
          "size": 9675799,
          "vd": -21099
      },
      "m": {
          "br": 192000,
          "fid": 0,
          "size": 5805497,
          "vd": -18400
      },
      "l": {
          "br": 128000,
          "fid": 0,
          "size": 3870346,
          "vd": -16900
      },
      "a": null,
      "cd": "1",
      "no": 3,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 51,
      "songJumpInfo": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 22036,
      "publishTime": 1231516800000
    },
    {
        "name": "漠河舞厅·2022",
        "id": 1894094482,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 1060132,
                "name": "柳爽",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 5,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 135992033,
            "name": "漠河舞厅·2022",
            "picUrl": "https://p2.music.126.net/m8BMzRWR53lMu2uaMYV2mA==/109951166609630672.jpg",
            "tns": [],
            "pic_str": "109951166609630672",
            "pic": 109951166609630670
        },
        "dt": 304195,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 12169965,
            "vd": -45176
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 7301997,
            "vd": -42579
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 4868013,
            "vd": -40904
        },
        "a": null,
        "cd": "01",
        "no": 0,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 0,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 5,
        "songJumpInfo": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "mst": 9,
        "cp": 0,
        "rtype": 0,
        "rurl": null,
        "mv": 0,
        "publishTime": 0
    },
    
  ]
})

function reducer(state=initState,action){
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
        return state.set('currentSong',action.value)
    case CHANGE_PLAY_LIST:
        return state.set('playList',action.value)
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex',action.value)
    case CHANGE_PLAY_MODE:
        return state.set('playMode',action.value)
    case CHANGE_LYRIC_LIST:
        return state.set('lyricList',action.value)
    default:
      return state
  }
}

export default reducer