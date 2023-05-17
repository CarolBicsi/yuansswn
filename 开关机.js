import plugin from '../../lib/plugins/plugin.js'
import common from '../../lib/common/common.js'
import moment from "moment"
import YAML from "yaml"
import fs from "node:fs"
/*
原理是改云崽配置文件白名单，出问题了去白名单配置瞧瞧
使用方法： 在群里发指令 例如 #bot上班
                           #bot下班
                           具体请到28-36行查看

注意：如果装了sanyi插件包不要装这个套娃，两个上下班指令不一样
*/
const on_tip = '你们好，纳西妲来啦！' //上班提示词，自行修改
const close_tip = '纳西妲下班啦，开溜~'  //下班提示词，自行修改
const huibi_tip = '我先去找旅行者玩啦，你们聊天吧，我们5分钟后见-'
const huilai_tip = "我玩完回来啦，来和你们分享啦"


export class jinyong extends plugin {
    constructor() {
        super({
            name: "syjs:上下班",
            dsc: "控制机器人在指定群开关",
            event: "message",
            priority: -10, //指令优先级
            rule: [{
                reg: '^关机$', //上班指令，可以改成自己想要的
                fnc: "jinyong",
            },
            {
                reg: '^开机$',//下班指令，可以改成自己想要的
                fnc: "kaiqi",
            },
            {
                reg: '^回避$',//回避指令，避免打扰群友聊天
                fnc: "huibi",
            }
            ],
        });
    }

    // 关机
    async jinyong(e) {
        if (!e.isMaster && !e.member.is_admin) {
            e.reply("你看起来真是个笨蛋呢")
            return true;
        }
        if (e.isGroup) {
            this.file = './config/config/group.yaml'
            let data = YAML.parse(fs.readFileSync(this.file, 'utf8'))
            data[e.group_id] = { enable: ["syjs:上下班",] }
            let yaml = YAML.stringify(data)
            fs.writeFileSync(this.file, yaml, "utf8")
            e.reply(close_tip)
        } else {
            e.reply('请在群聊中使用')
        }
    }

    /** 开机 */
    async kaiqi(e) {
        if (!e.isMaster && !e.member.is_admin) {
            e.reply("你看起来真是个笨蛋呢")
            return true;
        }
        if (e.isGroup) {
            this.file = './config/config/group.yaml'
            let data = YAML.parse(fs.readFileSync(this.file, 'utf8'))
            data[e.group_id] = { enable: null }
            let yaml = YAML.stringify(data)
            fs.writeFileSync(this.file, yaml, "utf8")
            e.reply(on_tip)
        } else {
            e.reply('请在群聊中使用')
        }
    }

    /** 回避 */
    //开关机了没
    onOff(e) {
        this.file = './config/config/group.yaml'
        let data = YAML.parse(fs.readFileSync(this.file, 'utf8'))
        return data[e.group_id].enable === null;
    }
    async huibi(e) {
        if (this.onOff(e)) {
            if (e.isGroup) {
                this.file = './config/config/group.yaml'
        let data = YAML.parse(fs.readFileSync(this.file, 'utf8'))
                data[e.group_id] = { enable: ["syjs:上下班",] }
                let yaml = YAML.stringify(data)
                fs.writeFileSync(this.file, yaml, "utf8")
                // 检查文件是否写入成功
                if (fs.existsSync(this.file)) {
                    e.reply(huibi_tip)
                    await common.sleep(300000);
                    let data = YAML.parse(fs.readFileSync(this.file, 'utf8'))
                    data[e.group_id] = { enable: null }
                    fs.writeFileSync(this.file, yaml, "utf8")
                    // 检查data[e.group_id]是否写入成功
                    if (data[e.group_id] === null) {
                        e.reply("我做完回来啦，来和你们分享啦")
                    } else {
                        let data = YAML.parse(fs.readFileSync(this.file, 'utf8'))
                        data[e.group_id] = { enable: null }
                        let yaml = YAML.stringify(data)
                        fs.writeFileSync(this.file, yaml, "utf8")
                        if (fs.existsSync(this.file)) {
                            e.reply(huilai_tip)
                        } else {
                            e.reply("啊，制作失败了，喊群主或者管理来开机吧")
                        }
                    }
                }
            }
        } else {
            e.reply("我已经下班啦！");
            return false
        }
    }
}