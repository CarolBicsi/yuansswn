import plugin from '../../lib/plugins/plugin.js'
import YAML from "yaml"
import fs from "node:fs"
/*
原理是改云崽配置文件白名单，出问题了去白名单配置瞧瞧
使用方法： 在群里发指令 #bot上班
                      #bot下班

注意：如果装了sanyi插件包不要装这个套娃，两个上下班指令不一样
*/ 
const on_tip='该死的主人又让我上班！' //上班提示词，自行修改
const close_tip='好耶，成功开溜~'  //下班提示词，自行修改

export class jinyong extends plugin {
    constructor() {
        super({
            name: "syjs:上下班",
            dsc: "控制机器人在指定群开关",
            event: "message",
            priority: -10, //指令优先级
            rule: [{
                reg: '^下班$', //上班指令，可以改成自己想要的
                fnc: "jinyong",
                permission: 'master',
            },
            {
                reg: '^上班$',//下班指令，可以改成自己想要的
                fnc: "kaiqi",
                permission: 'master',
            },
            ],
        });
    }

    // 关机
    async jinyong(e) {
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
}