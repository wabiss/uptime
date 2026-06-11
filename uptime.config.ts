// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "石头的状态页面",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/lyc8503', label: 'GitHub' },
    { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'foo_monitor',
      // `name` is used at status page and callback message
      name: 'My API Monitor',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://example.com',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://example.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
      // [OPTIONAL] body to be sent (require POST/PUT/PATCH method)
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      // responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://`, `globalping://` and `http(s)://` proxies
      // checkProxy: 'worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      // checkProxyFallback: true,
    },
    {
      id: 'graintcp_site', // ID 保持唯一
      name: 'graintcp Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://gpt.ttlive17.dns-dynamic.net/',
      tooltip: 'graintcp 监控',
      statusPageLink: 'https://gpt.ttlive17.dns-dynamic.net/',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: 'joey_site', // ID 保持唯一
      name: 'joey Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://joey.525542.xyz/',
      tooltip: 'joey 监控',
      statusPageLink: 'https://joey.525542.xyz/',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: 'edg_site', // ID 保持唯一
      name: 'edg Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://edg.tgwy.eu.org/admin',
      tooltip: 'edg 监控',
      statusPageLink: 'https://edg.tgwy.eu.org/admin',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: '提醒_site', // ID 保持唯一
      name: '提醒 Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://dlx.hidns.cc',
      tooltip: '提醒 监控',
      statusPageLink: 'https://dlx.hidns.cc',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: 'snp检测_site', // ID 保持唯一
      name: 'snp检测 Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://snp.tgwy.eu.org',
      tooltip: 'snp检测 监控',
      statusPageLink: 'https://snp.tgwy.eu.org',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: '节点转换_site', // ID 保持唯一
      name: '节点转换 Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://sub.525542.xyz',
      tooltip: '节点转换 监控',
      statusPageLink: 'https://sub.525542.xyz',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: '优选ip_site', // ID 保持唯一
      name: '优选ip Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://ip.dln.de5.net',
      tooltip: '优选ip 监控',
      statusPageLink: 'https://ip.dln.de5.net',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: 'worker请求数_site', // ID 保持唯一
      name: 'worker请求数 Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://cfwp.dlx.us.ci',
      tooltip: 'worker请求数 监控',
      statusPageLink: 'https://cfwp.dlx.us.ci',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: '优选生成器_site', // ID 保持唯一
      name: '优选生成器 Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://sub.dlx.us.ci',
      tooltip: '优选生成器 监控',
      statusPageLink: 'https://sub.dlx.us.ci',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: 'wispbyte_site', // ID 保持唯一
      name: 'wispbyte Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://wabiss.wisp.uno/wabiss',
      tooltip: 'wispbyte 监控',
      statusPageLink: '',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: 'dcdeploy_site', // ID 保持唯一
      name: 'dcdeploy Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://dacy-sls9vdzl5k.dcdeploy.cloud/',
      tooltip: 'dcdeploy 监控',
      statusPageLink: 'https://dacy-sls9vdzl5k.dcdeploy.cloud/',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    {
      id: 'northflank_site', // ID 保持唯一
      name: 'northflank Monitor', // 状态页面上显示的名称
      method: 'GET',
      target: 'https://p01--wabiss--tbvxzcz6f2n4.code.run',
      tooltip: 'northflank 监控',
      statusPageLink: 'https://p01--wabiss--tbvxzcz6f2n4.code.run',
      expectedCodes: [200], // 只有返回 200 才算正常
      timeout: 10000,
    },
    // Example TCP Monitor
    {
      id: 'test_tcp_monitor',
      name: 'Example TCP Monitor',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'TCP_PING',
      // `target` should be `host:port` for tcp monitors
      target: '1.2.3.4:22',
      tooltip: 'My production server SSH',
      statusPageLink: 'https://example.com',
      timeout: 5000,
    },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot8318447836:AAE96K9cl5tJI0WCu5QcN2CShS1mBLRo4UA/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      // method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'x-www-form-urlencoded',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 1021923170,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
  {
    // [Optional] Monitor IDs to be affected by this maintenance
    monitors: ['foo_monitor', 'test_tcp_monitor'],
    // [Optional] default to "Scheduled Maintenance" if not specified
    title: 'Test Maintenance',
    // Description of the maintenance, will be shown at status page
    body: 'This is a test maintenance, server software upgrade',
    // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
    start: '2020-01-01T00:00:00+08:00',
    // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
    // if not specified, the maintenance will be considered as on-going
    end: '2050-01-01T00:00:00+08:00',
    // [Optional] color of the maintenance alert at status page, default to "yellow"
    color: 'blue',
  },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
