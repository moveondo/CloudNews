<template lang="html">
  <div class="container">
    <!-- <div class="chat">
      <div v-for="(item, index) in messageList">
              <div class="group" v-if="item.type === 2">
                  <div class="center">
                      <div class="jiqi">
                        <img class="avatar" src="../../pic/avatar.jpg" alt="">
                        <div class="user1">大熊</div>
                      </div>
                      <div class="text1"><span class="horn">{{item.msg}}</span></div>
                  </div>
                  <br style="clear: both;"/>
              </div>
              <div class="sending" v-if="item.type === 3">
                  <div class="right">
                      <div class="person">
                        <div class="user2">喜洋洋</div>
                        <img class="avatar" src="../../pic/avatar2.jpg" alt="">
                      </div>
                      <div class="text2"><span class="horn">{{item.msg}}</span></div>
                  </div>
                  <br style="clear: both;"/>
              </div>
          </div>
    </div> -->
        <!-- 聊天界面头部 -->
      <div class="chatting-header">

        <div class="chatting-back">
          <div @click="$router.push('/AI')" :class="[isRedAI ? 'icon-back' : 'icon-back2']"></div>
        </div>
        <div class="chatting-title">
          <div class="icon-group"></div>
          <div class="talk-group">群聊</div>
        </div>
        <div class="chatting-menu">
          <div @click="$router.push('/')" class="icon-menu"></div>
        </div>

      </div>
      <!-- 聊天内容区域 -->
      <div @click.stop.prevent="isShowEmoji=false" ref="chattingContent" class="chatting-content">

        <div v-for="item of msgs">
          <div v-if="item.self" class="chatting-item self clearfix">
            <div class="msg-date">
              {{ item.date }}
            </div>
            <div class="msg-from">
              <span class="loc">[{{item.loc}}]</span>
              <span class="msg-author">{{ item.from}}</span>
              <img :src="item.avatarUrl" alt="">
            </div>
            <div class="msg-content">{{ item.content }}</div>
          </div>

          <div v-else class="chatting-item other clearfix">
            <div class="msg-date">
              {{ item.date }}
            </div>
            <div class="msg-from">
              <img :src="item.avatarUrl" alt="">
              <span class="loc">[{{item.loc}}]</span>
              <span class="msg-author">{{ item.from }}</span>
            </div>
            <div class="msg-content">{{ item.content }}</div>
          </div>

        </div>

        <!-- <div class="online">
          microzz上线了
        </div> -->

      </div>
    <div class="send">
      <i class="icon-yuyin"></i>
      <input type="text" @keyup.enter="send" v-model="value" class="input">
      <button  @click="send">发送</button>
    </div>
  </div>
</template>

<script>
// import io from 'socket.io-client'
// import CHAT from '../../client'

export default {
  data () {
    return {
      value: '',
      isRedAI: false,
      msgs: [{
        date: this.moment().format('YYYY-MM-DD HH:mm:ss'),
        loc: localStorage.addr,
        from: `${localStorage.name}`,
        content: "今天吃什么？",
        avatarUrl: "http://omratag7g.bkt.clouddn.com/icon-avatar3.svg"
      //  type: 2 ,
      //  msg: '你们喜欢用掘金分享技术吗？'
     }]
    }
  },
  computed: {
   avatarUrl() {
      return this.$store.state.avatarUrl;
    }
  },
  mounted () {
    setInterval(() => this.isRedAI = !this.isRedAI, 2500);
  this.$store.commit('details', {data: '智能聊天室', fa: false, fb: true, fc: false});
  this.$store.commit('hidfooter', false);
  //  this.socket.on('receiveGroupMsg', (value) => {
  //    console.log(value);
     
  //      this.messageList.push(
  //       {type: 2, msg: value}
  //      );
  // })
    socket.emit('online', this.$store.state.name);

    socket.on('online', (name) => {
      if (!name) {
        return;
      }
      let oOnline = document.createElement('div');
      oOnline.className = 'online';
      oOnline.innerText = name + '上线了';
      this.oContent.appendChild(oOnline);
      this.oContent.scrollTop = this.oContent.scrollHeight;


    });
        // 接收群聊消息
    socket.on('receiveGroupMsg', data => {
      this.msgs.push(data);
      setTimeout(() => {
        this.oContent.scrollTop = this.oContent.scrollHeight;
      }, 0);
    });

},
  methods: {
    send () {
      if (this.value === '') {
        return;
      } else {
         socket.emit('sendGroupMsg', {
          date: this.moment().format('YYYY-MM-DD HH:mm:ss'),
          loc: localStorage.addr,
          from: `${localStorage.name}`,
          content: this.value,
          avatarUrl: this.avatarUrl
        });
        this.msgs.push({
          date: this.moment().format('YYYY-MM-DD HH:mm:ss'),
          loc: localStorage.addr,
          from: `${localStorage.name}`,
          content: this.value,
          self: true,
          avatarUrl: this.avatarUrl
        });
        this.value = '';
       
      };
    },
    scroll () {
    this.$refs.scroll.scrollTop = this.$refs.scroll.scrollHeight;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../common/style/talk.scss";
  $blue: #2196f3;
  .container{
        display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  .chatting-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      width: 100%;
      background-color: $blue;
      color: white;
      padding-left: 10px;
      padding-right: 15px;

      .chatting-back {
      
        .icon-back {
          background: url('../../common/icons/icon-ai.svg') no-repeat;
          background-size: contain;
            width: 32px;
        height: 32px;

        }
        .icon-back2 {
          background: url('../../common/icons/icon-ai2.svg') no-repeat;
          background-size: contain;
            width: 32px;
        height: 32px;
        }
      }

      .chatting-title {
        display: flex;
        .icon-group {
          vertical-align: top;
          width: 30px;
          height: 30px;
          background: url('../../common/icons/icon-group.svg') no-repeat;
          background-size: contain;
          margin-right: 3px;
        }
        .talk-group{
          line-height: 33px;
          font-size: 1.2rem;
          font-weight: bold;
        }
      }

      .chatting-menu {

         .icon-menu {
          background: url('../../common/icons/icon-index.svg') no-repeat;
          background-size: contain;
          width: 30px;
          height: 30px;
        }
      }
    }
    .chatting-content {
      flex: 1;
      width: 100%;
      // background-color:#E5E5E5;
      overflow: auto;
      .chatting-item {
        padding: 10px;
        width: 100%;
        margin: 6% 0;
        .msg-date {
          text-align: center;
          color: gray;
          font-size: 80%;
        }
        .msg-from {
          display: flex;
          align-items: center;
          span.loc {
            color: gray;
            font-size: 60%;
            margin-right: 5px;
          }
          .msg-author {
            font-size: 1.2rem;
          }
          img {
            width: 30px;
            height: 30px;
            border-radius: 15px;
          }
        }
        .msg-content {
          margin-top: 5px;
          background-color: white;
          width: 200px;
          padding: 6px 10px;
          border-radius: 10px;
        }
      }

      .chatting-item + .chatting-item {
        margin-top: 10px;
      }
      .self {
        .msg-from {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          img {
            margin-left: 10px;
          }
        }

        .msg-content {
          float: right;
          word-wrap: break-word;
          word-break: break-all;
          margin-right: 10px;
        }


      }

      .other {
        .msg-from {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          span.loc {
            color: gray;
            font-size: 60%;
            margin-right: 5px;
          }
          img {
            margin-right: 10px;
          }
        }

        .msg-content {
          float: left;
          margin-left: 10px;
          word-wrap: break-word;
          word-break: break-all;
        }

      }

      .online {
        width: 200px;
        // max-width: 100%;
        margin: 3px auto;
        border-radius: 4px;
        text-align: center;
        background-color: #FFFDE7;
      }
    }
  }
</style>
