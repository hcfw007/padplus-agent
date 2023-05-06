import PuppetPadplus from '@juzi/wechaty-puppet-padplus'
import { WechatyBuilder } from '@juzi/wechaty'

const puppet = new PuppetPadplus({
  token: 'puppet_padplus_06f5f33665fa6a09',
  endpoint: '52.82.24.73:50052',
  tls: {
    disable: true
  }
})

const bot = WechatyBuilder.build({
  puppet,
})

bot.on('scan', data => {
  console.log(data)
}).start()