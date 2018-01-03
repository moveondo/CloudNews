<template lang="html">
  <transition name="slide-right">
    <div class="chatting">

      <!-- 聊天界面头部 -->
      <div class="chatting-header">

        <div class="chatting-back">
          <div @click="$router.push('/talk')" class="icon-back"></div>
        </div>
        <div class="chatting-title">
          <h2>AI 智能机器人</h2>
        </div>
        <div class="chatting-menu">
          <div @click="$router.push('/')" class="icon-menu"></div>
        </div>

      </div>

      <!-- 聊天内容区域 -->
      <div ref="chattingContent" id="chattingContent" class="chatting-content">

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
              <span class="msg-author">{{ item.from }}</span>
            </div>
            <div class="msg-content">{{ item.content }}</div>
          </div>

        </div>

        <!-- <div class="online">
          microzz上线了
        </div> -->

      </div>

      <!-- 输入区域 -->
      <div class="chatting-input">
        <input @keyup.enter="send" v-model.trim="inputContent" placeholder="与智能机器人聊些啥">
        <button @click="send">发送</button>
      </div>

    </div>
  </transition>

</template>

<script>
export default {
  name: 'chatting',
  data() {
    return {
      msgs:  [
        // { date: '2015-11-09 09:57:08', from: 'microzz', avatarUrl: `http://omratag7g.bkt.clouddn.com/icon-avatar${this.random(11)}.svg`, content: 'test', self: false}
      ],
      inputContent: '',
      oContent: {}
    }
  },
  watch: {
    msgs(val) {
      localStorage.msgs = JSON.stringify(val);
    }
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    avatarUrl() {
      return this.$store.state.avatarUrl;
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!localStorage.name) {
      next('/')
    } else {
      next();
    }
  },

  // beforeRouteLeave(to, from, next) {
  //   console.log(this.$refs);
  // },

  mounted() {
    // console.log('title');
    this.oContent = document.getElementById('chattingContent');
    setTimeout(() => {
      this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight
    }, 0)
  },
  methods: {
    send() {
      this.oContent.scrollTop = this.oContent.scrollHeight;
      if (this.inputContent === '') {
        return;
      } else {
        this.msgs.push({
          date: this.moment().format('MM-DD HH:mm:ss'),
          loc: localStorage.addr,
          from: `${localStorage.name}`,
          content: this.inputContent,
          self: true,
          avatarUrl: this.avatarUrl
        });
        setTimeout(() => {
          this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight
        }, 0)

        this.axios.get(`/api/api/AI/?search=${this.inputContent}&userid=${localStorage.name+localStorage.addr}&loc=${localStorage.addr}`)
          .then(result => {
            this.msgs.push({
              date: this.moment().format('MM-DD HH:mm:ss'),
              from: '智能机器人',
              content: result.data.result.text,
              self: false,
              avatarUrl: 'http://omratag7g.bkt.clouddn.com/icon-ai.svg'
            })
            console.log(this.msgs);
            
          })
          .then(() => {
            this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight
          })

        this.inputContent = '';
      };


    },
  }
}
</script>

<style lang="scss" scoped>
  $blue: #2196f3;

  .chatting {
   
   position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
   z-index: 99;
        display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

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
          background: url('../../common/icons/icon-group2.svg') no-repeat;
          background-size: contain;
          width: 30px;
         height: 30px;
        }
      }

      .chatting-title {
        .icon-group {
          vertical-align: top;

          background: url('../../common/icons/icon-group.svg') no-repeat;
          background-size: contain;
          margin-right: 3px;
                    width: 30px;
          height: 30px;
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
      background-color: rgba(208, 201, 201, 1);
      overflow: auto;
      .chatting-item {
        padding: 10px;
        width: 100%;
    margin: 5% 0px 10%;
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

    .chatting-input {
      display: flex;
      height: 40px;
      width: 100%;
      input {
        flex: 1;
        padding-left: 10px;
        // padding-top: 10px;
        height: 100%;
        font-size: 1.3rem;
      }
      button {
        width: 60px;
        height: 100%;
        background-color: $blue;
        color: white;
        font-size: 1.2rem;
      }
    }
  }
</style>
