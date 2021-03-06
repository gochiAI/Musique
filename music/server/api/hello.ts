import { defineEventHandler } from 'h3';

const myObj = {
  "10001":{
    "id":"10001",
    "name":"ヴィーナスとジーザス",
    "link":[
      10001,
      10002
    ]
  },
  "10002":{
    "id":"10002",
    "name":"朝焼けのスターマイン",
    "link":[
      10001,
      10003
    ]
  },
  "10003":{
    "id":"10003",
    "name":"catch you,catch me",
    "link":[10002,10004]
  },
  "10004":{
    "id":"10004",
    "name":"扉あけて",
    "link":[10003,10005]
  },
  "10005":{
    "id":10005,
    "name":"プラチナ",
    "link":[10004,10006]
  },
  "10006":{
    "id":10006,
    "name":"もっと派手にね",
    "link":[10005,10007]
  },
  "10007":{
    "id":10007,
    "name":"Mr.music!",
    "link":[10006,10008]
  },
  "10008":{
    "id":10008,
    "name":"君じゃなきゃダメみたい",
    "link":[10007,10009]
  },
  "10009":{
    "id":10009,
    "name":"Sing my Love",
    "link":[10008,10010]
  },
  "10010":{
    "id":10010,
    "name":"ring of fortune",
    "link":[10009,10011]
  },
  "10011":{
    "id":10011,
    "name":"君の銀の庭",
    "link":[10010,10012]
  },
  "10012":{
    "id":10012,
    "name":"ひかりふる",
    "link":[10011,10013]
  },
  "10013":{
    "id":10013,
    "name":"銀のスプーン",
    "link":[10012,10014]
  },
  "10014":{
    "id":10014,
    "name":"少年よ我に帰れ",
    "link":[10013,10014]
  }
};

export default defineEventHandler(() => myObj)
