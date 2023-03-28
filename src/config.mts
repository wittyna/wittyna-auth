export default {
  systemClient: {
    desc: 'system',
    client_id: 'system',
    client_secret: '42ea9BE#',
    redirectUris: ['https://www.baidu.com']
  },
  systemAdminUsers: [
    {
      username: 'admin',
      password: '42ea9BE#',
    },
    {
      username: 'baixiyang',
      email: 'baixiyang@outlook.com',
      password: '42ea9BE#',
    },
    {
      username: 'rona',
      password: 'luona0206',
    },
  ],
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
  // 单位 秒
  authorizationCodeLifeTime: 60,
  iss: 'witty-oauth',
};