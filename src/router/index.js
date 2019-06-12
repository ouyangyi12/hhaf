import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'/',
      component: resolve => require(['../components/page/game.vue'], resolve),
      meta: { title: '游戏' },
    },
    {
      path: '/scroll_test',
      name:'scroll_test',
      component: resolve => require(['../components/page/scroll_test.vue'], resolve),

    },
    {
      path: '/imgTest',
      name:'imgTest',
      component: resolve => require(['../components/page/imgTest.vue'], resolve),
      meta: { title: 'imgTest' },
    },
    {
      path: '/game',
      name:'gameHome',
      component: resolve => require(['../components/page/game.vue'], resolve),
      meta: { title: '游戏' },
    },{
      path: '/customer',
      name:'customerHome',
      component: resolve => require(['../components/page/customer.vue'], resolve),
      meta: { title: '客服' },
    },{
      path: '/contacts',
      name:'contactsHome',
      component: resolve => require(['../components/page/contacts.vue'], resolve),
      meta: { title: '通讯录' },
    },{
      path: '/me',
      component: resolve => require(['../components/page/me.vue'], resolve),
      meta: { title: '个人中心' },
      name:'meHome'
    },{
      path: '/addFriend',
      name:'addFriend',
      component: resolve => require(['../components/page/item/addFriend.vue'], resolve),
      meta: { title: '添加好友' },
    },{
      path: '/info',
      name:'info',
      component: resolve => require(['../components/page/item/info.vue'], resolve),
      meta: { title: '个人信息' },
    },{
      path: '/income',
      name:'income',
      component: resolve => require(['../components/page/item/income.vue'], resolve),
      meta: { title: '推广收益' },
    },{
      path: '/wallet',
      name:'wallet',
      component: resolve => require(['../components/page/item/wallet.vue'], resolve),
      meta: { title: '钱包详情' },
    },{
      path: '/posters',
      name:'posters',
      component: resolve => require(['../components/page/item/posters.vue'], resolve),
      meta: { title: '推广海报' },
    },{
      path: '/setup',
      name:'setup',
      component: resolve => require(['../components/page/item/setup.vue'], resolve),
      meta: { title: '设置' },
    },{
      path: '/mention',
      name: 'mention',
      component: resolve => require(['../components/page/item/mention.vue'], resolve),
      meta: { title: '提现' }
    },{
      path: '/recharge',
      name: 'recharge',
      component: resolve => require(['../components/page/item/recharge.vue'], resolve),
      meta: { title: '充值' }
    },{
      path: '/friendsDetail',
      name: 'friendsDetail',
      component: resolve => require(['../components/page/item/friendsDetail.vue'], resolve),
      meta: { title: '详细信息' }
    },{
      path: '/gameRules',
      name: 'gameRules',
      component: resolve => require(['../components/page/item/gameRules.vue'], resolve),
      meta: { title: '游戏规则' }
    },{
      path: '/packets',
      name: 'packets',
      component: resolve => require(['../components/page/item/packets.vue'], resolve),
      meta: { title: '红包游戏' }
    },{
      path: '/chat',
      name: 'chat',
      component: resolve => require(['../components/page/item/chat.vue'], resolve),
      meta: { title: '聊天窗口' }
    },{
      path: '/chatInfo',
      name: 'chatInfo',
      component: resolve => require(['../components/page/item/chatInfo.vue'], resolve),
      meta: { title: '聊天信息' }
    },{
      path: '/bindingPhone',
      name:'bindingPhone',
      component: resolve => require(['../components/page/item/bindingPhone.vue'], resolve),
      meta: { title: '绑定手机号' },
    },{
      path: '/bindingPay',
      name:'bindingPay',
      component: resolve => require(['../components/page/item/bindingPay.vue'], resolve),
      meta: { title: '绑定支付密码' },
    },{
      path: '/customer',
      name: 'customer',
      component: resolve => require(['../components/page/customer.vue'], resolve),
      meta: { title: '客服' }
    },{
      path: '/logsRecharge',
      name:'logsRecharge',
      component: resolve => require(['../components/page/item/logsRecharge.vue'], resolve),
      meta: { title: '充值记录' },
    },{
      path: '/logsTransfer',
      name:'logsTransfer',
      component: resolve => require(['../components/page/item/logsTransfer.vue'], resolve),
      meta: { title: '转账记录' },
    },{
      path: '/logsMention',
      name:'logsMention',
      component: resolve => require(['../components/page/item/logsMention.vue'], resolve),
      meta: { title: '提现记录' },
    },{
      path: '/logsPackets',
      name:'logsPackets',
      component: resolve => require(['../components/page/item/logsPackets.vue'], resolve),
      meta: { title: '红包记录'},
    },{
      path: '/sendPackets',
      name: 'sendPackets',
      component: resolve => require(['../components/page/item/sendPackets.vue'], resolve),
      meta: { title: '发红包' }
    },{
      path: '/transfer',
      name: 'transfer',
      component: resolve => require(['../components/page/item/transfer.vue'], resolve),
      meta: { title: '聊天窗口' }
    },{
      path: '/viewLuck',
      name: 'viewLuck',
      component: resolve => require(['../components/page/item/viewLuck.vue'], resolve),
      meta: { title: '查看手气'}
    },{
      path: '/packetsLogs',
      name: 'packetsLogs',
      component: resolve => require(['../components/page/item/packetsLogs.vue'], resolve),
      meta: { title: '红包记录' }
    },{
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/page/login.vue'], resolve),
      meta:{ title: '登录选择'},
    },{
      path:'./initial',
      name:'initial',
      component: resolve => require(['../components/page/initial.vue'],resolve),
      meta: { title: '登录页'}
    },{
      path: '/regist',
      name: 'regist',
      component: resolve => require(['../components/page/regist.vue'], resolve),
      meta:{ title: '注册'},
    }
    ,{
      path: '/friendList',
      name: 'friendList',
      component: resolve => require(['../components/page/item/friendList.vue'], resolve),
      meta:{ title: '新朋友'},
    }
  ]
})
