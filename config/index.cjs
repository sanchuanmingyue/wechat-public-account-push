/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
// 请将以下代码按照图示粘贴到对应位置
USE_PASSAGE: 'push-deer',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3cd7fc85287052c7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '29f7b6c002275058686411d1d7186be5',

  PROVINCE: '陕西',
  CITY: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '三三',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU25884Te7I4BPnjK5V3oX2DANEXxCaicglB4caG',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'nhKHXOA8MyhOvzlhL8aiJlYO7eIBjE-bNzaZPIl6CDQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      /*horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],*/


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'nhKHXOA8MyhOvzlhL8aiJlYO7eIBjE-bNzaZPIl6CDQ',

  CALLBACK_USERS: [
    {
      name: '三川',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1zz_6rOc-P-4aAe9Z-CxPMaE9xw',
    }
  ],

}

module.exports = USER_CONFIG

